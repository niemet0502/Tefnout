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
                ->select('courses.title', 
                'courses.image',
                'courses.level',
                'courses.views',
                'users.avatar as teacher_image', 
                'categories.name as category_name',
                DB::raw('SUM(notes.value) as total_note'),
                DB::raw('COUNT(notes.value) as notes_count'))
                ->withCount('followCourses')
                ->groupBy('courses.id')
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
        $course->description = $request->description;
        $course->image = $request->image;
        $course->video = $request->video;
        $course->hours = $request->hours;
        $course->level = $request->level;
        $course->teacher_id = $request->teacher_id;
        $course->category_id = $request->category_id;
        $course->topics = $request->topics;
        $course->status = "draft";

        $course->save();

        
        return response([
            'status' => 'success',
            'message' => 'Cours ajouté avec succès !'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //get course's infos and count, sum notes
        $courses = Course::where('courses.id', '=', $id)
                ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->leftJoin('notes', 'notes.formation_id', '=', 'follow_courses.id')
                ->select('courses.*',
                DB::raw('SUM(notes.value) as total_notes'),
                DB::raw('COUNT(notes.value) as notes_count'))
                ->groupBy('courses.id')
                ->get();   

        // get Reviews 
        $reviews = FollowCourse::where('follow_courses.course_id', $id)
                ->join('comments', 'comments.formation_id', '=', 'follow_courses.id')
                ->join('users', 'users.id', '=', 'follow_courses.student_id')
                ->select('comments.*', 
                'users.name as user_name',
                'users.firstname as user_firstname',
                'users.avatar as user_avatar')
                ->groupBy('comments.id')
                ->get();
        
        // get teacher's infos 
        $instructor = User::where('users.id', $courses[0]['teacher_id'])
            ->leftJoin('courses', 'courses.teacher_id', '=', 'users.id')
            ->leftJoin('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
            ->select('users.name',
            'users.firstname',
            'users.avatar',
            'users.function',
            'users.bio',
            DB::raw('COUNT(courses.id) as courses_count'),
            DB::raw('COUNT(follow_courses.id) as students_count'))
            ->groupBy('users.id')  
            ->get();

        //get course's program 

        $program = Section::where("course_id", $id)
                ->select('sections.title',
                'sections.id')
                ->get();

        return response([
            'course' => $courses,
            'reviews' => $reviews,
            'instructor' => $instructor,
            'program' => $program,
            'message' => 'Cours ajouté avec succès !'
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = Course::find($id);
         

        // get sections of current course 
        $sections = Section::where('course_id', $id)->get();

        foreach($sections as $section){
            $chapter = Chapter::where('section_id', $section->id);
        }

            $response = [
                'course' => $chapter,
                'status' => 200
            ];
    
            return $response;
    }

    public function getCoursesByTeacher(int $id){
        $courses = Course::select('courses.id', 'courses.title', 'courses.created_at', 'courses.status',
        'categories.name as category_name', 
        'users.name as user_name', 
        'users.firstname as user_firstname',
        DB::raw('COUNT(chapters.id) as chapters_count'))
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
        return Course::select('courses.*', 
            'users.avatar as teacher_image',
            'users.name as teacher_nae', 
            'categories.name as category_name')
            ->join('users', 'users.id', '=', 'courses.teacher_id')
            ->join('categories', 'categories.id', '=', 'courses.category_id' )
            ->where('title', 'like', '%'.$name.'%')
            ->orWhere('description', 'like', '%'.$name.'%') 
            ->orWhere('topics', 'like', '%'.$name.'%') 
            ->orWhere('categories.name', 'like', '%'.$name.'%') 
            ->orWhere('users.name', 'like', '%'.$name.'%')   
            ->get();
    }

    public function getAdminCourse(){
        
        $courses = Course::select('courses.id', 'courses.title', 'courses.created_at', 'courses.status',
        'categories.name as category_name', 
        'users.name as user_name', 
        'users.firstname as user_firstname',
        DB::raw('COUNT(chapters.id) as chapters_count'))
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
    }

}
