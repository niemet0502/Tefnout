<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\FollowChapter;
use App\Models\FollowCourse;
use Illuminate\Support\Facades\DB;
use App\Models\Section;
use App\Models\User;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::join('users', 'users.id', '=', 'courses.teacher_id')
            ->join('categories', 'categories.id', '=', 'courses.category_id')
            ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
            ->leftJoin('notes', 'notes.formation_id', '=', 'follow_courses.id')
            ->where('courses.status', '=', 'Publier')
            ->select('courses.title', 
            'courses.image',
            'courses.level',
            'courses.views',
            'courses.slug',
            'users.avatar as teacher_image', 
            'categories.name as category_name',
            DB::raw('SUM(notes.value) as total_note'),
            DB::raw('COUNT(notes.value) as notes_count'))
            ->withCount('followCourses')
            ->groupBy('courses.id')
            ->orderBy('courses.id','DESC')
            ->get();

        $response = [
            'courses' => $courses,
            'status' => 200
        ];

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'title' => 'required',
            'description' => 'nullable',
            'image' => 'nullable',
            'video' => 'nullable',
            'hours' => 'required',
            'level'=> 'required',
            'teacher_id' => 'required|integer|min:1|',
            'category_id' => 'required|integer|min:1|',
            'topics' => 'nullable'
        ]);
        
        
        
        $course = new Course();
        $course->title = $request->title;
        $course->slug = str_replace(' ', '-', $request->title);
        $course->description = $request->description;
        $course->image = $request->image;
        $course->video = $request->video;
        $course->hours = $request->hours;
        $course->level = $request->level;
        $course->teacher_id = $request->teacher_id;
        $course->category_id = $request->category_id;
        $course->topics = $request->topics;
        $course->status = "Brouillon";
        
        $course->save();
        $maxId = Course::orderBy('id', 'desc')->value('id'); 
        $course->update(['slug' => strval($maxId).'-'.str_replace(' ', '-', $request->title)]);
        
        return response([
            'status' => 'success',
            'message' => 'Cours ajouté avec succès !',
            'course' => $course
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        //get course's infos and count, sum notes
        $courses = Course::where('courses.slug', '=', $slug)
                ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->leftJoin('notes', 'notes.formation_id', '=', 'follow_courses.id')
                ->select('courses.*',
                DB::raw('SUM(notes.value) as total_notes'),
                DB::raw('COUNT(notes.value) as notes_count'))
                ->groupBy('courses.id')
                ->first();   

        
        Course::find($courses->id)->increment('views');
        
        return response([
            'course' => $courses,
        ], 200);
    }

    public function publishCourse(int $id){
        $course = Course::find($id);
        $course->update(['status' => 'Publier']);

        return response([
            'message' => 'Votre cours a bien ete publier',
            'course' => $course
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $course = Course::find($id);
        $course->update($request->all());


        return response([
            'status' => 'success',
            'message' => 'Cours edité avec succès !',
            'course' => $course
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // get sections of current course 
        $sections = Section::where('course_id', $id)->get();

        foreach($sections as $section){
            Chapter::where('section_id', $section->id)->delete();
        }
        Section::where('course_id', $id)->delete();
        Course::destroy($id);
        return response([
            'status' => 'success',
            'message' => 'Cours supprimer avec succes'
        ],200);
    }

    public function getCoursesByTeacher(int $id){
        $courses = Course::select('courses.id', 'courses.title', 'courses.created_at', 'courses.status', 'courses.chapter_count',
        'categories.name as category_name', 
        'users.name as user_name', 
        'users.firstname as user_firstname')
        ->where('courses.teacher_id', '=', $id)
        ->join('users', 'users.id', '=', 'courses.teacher_id')
        ->join('categories', 'categories.id', '=', 'courses.category_id')
        ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
        ->leftJoin('sections', 'sections.course_id', '=', 'courses.id')
        ->leftJoin('chapters', 'chapters.section_id', '=', 'sections.id')
        ->withCount('followCourses')
        ->groupBy('courses.id')
        ->get();

        return response([
            'status' => 'success',
            'courses' => $courses
        ],200);

        $response = [
            'courses' => $courses,
            'status' => 200
        ];

        return $response;
    }

    public function searchCourse($name){
        return Course::join('users', 'users.id', '=', 'courses.teacher_id')
            ->join('categories', 'categories.id', '=', 'courses.category_id')
            ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
            ->leftJoin('notes', 'notes.formation_id', '=', 'follow_courses.id')
            ->where('courses.status', '=', 'Publier')
            ->where('title', 'like', '%'.$name.'%')
            ->orWhere('description', 'like', '%'.$name.'%') 
            ->orWhere('topics', 'like', '%'.$name.'%') 
            ->orWhere('categories.name', 'like', '%'.$name.'%') 
            ->orWhere('users.name', 'like', '%'.$name.'%')   
            ->select('courses.title', 
            'courses.image',
            'courses.level',
            'courses.views',
            'courses.slug',
            'users.avatar as teacher_image', 
            'categories.name as category_name',
            DB::raw('SUM(notes.value) as total_note'),
            DB::raw('COUNT(notes.value) as notes_count'))
            ->withCount('followCourses')
            ->groupBy('courses.id')
            ->orderBy('courses.id','DESC')
            ->get();
    
    }

    public function getAdminCourse(){
        
        $courses = Course::select('courses.id', 'courses.title', 'courses.created_at', 'courses.status', 'courses.chapter_count',
        'categories.name as category_name', 
        'users.name as user_name', 
        'users.firstname as user_firstname',)
        ->join('users', 'users.id', '=', 'courses.teacher_id')
        ->join('categories', 'categories.id', '=', 'courses.category_id')
        ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
        ->withCount('followCourses')
        ->groupBy('courses.id')
        ->get();

        return response([
            'status' => 'success',
            'courses' => $courses
        ],200);
    }

    public function getCoursesByCategories(int $id){
        $courses = Course::join('users', 'users.id', '=', 'courses.teacher_id')
            ->join('categories', 'categories.id', '=', 'courses.category_id')
            ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
            ->leftJoin('notes', 'notes.formation_id', '=', 'follow_courses.id')
            ->select('courses.title', 
            'courses.image',
            'courses.level',
            'courses.views',
            'courses.slug',
            'users.avatar as teacher_image', 
            'categories.name as category_name',
            DB::raw('SUM(notes.value) as total_note'),
            DB::raw('COUNT(notes.value) as notes_count'))
            ->where('categories.id', '=', $id)
            ->withCount('followCourses')
            ->groupBy('courses.id')
            ->orderBy('courses.id','DESC')
            ->get();

        $response = [
            'courses' => $courses,
            'status' => 200
        ];

        return $response;
    }

    public function getCourseCurriculum($id){
        $curriculum = Section::where('sections.course_id', $id)
                ->join('chapters', 'chapters.section_id', '=', 'sections.id')
                ->select('sections.id','sections.title as section_title', 
                    'chapters.title as chapter_title', 'chapters.id as chapter_id',
                    'chapters.textContent as chapter_text_content', 
                    'chapters.video as chapter_video_content')
                ->groupBy('chapters.id')
                ->get();

        return $curriculum;
    }

    public function getNewCourseCurriculum($id){
        $sections = Section::where('sections.course_id', $id)
                ->select('sections.id','sections.title as section_title')
                ->groupBy('sections.id')
                ->orderBy('sections.id', 'DESC')
                ->get();
        $chapters = Section::where('sections.course_id', $id)
                ->join('chapters', 'chapters.section_id', '=', 'sections.id')
                ->select('sections.id','sections.title as section_title', 
                    'chapters.title as chapter_title', 'chapters.id as chapter_id',
                    'chapters.textContent as chapter_text_content', 
                    'chapters.video as chapter_video_content')
                ->groupBy('chapters.id')
                ->get();

        return response([
            'sections' => $sections,
            'chapters' => $chapters
        ],200);
    }

}
