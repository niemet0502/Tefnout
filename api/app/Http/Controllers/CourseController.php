<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\FollowChapter;
use App\Models\FollowCourse;
use Illuminate\Support\Facades\DB;

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
        //
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
        Course::where('courses.id', $id)
            ->join('sections', 'sections.course_id', '=', 'courses.id')
            ->join('chapters', 'chapters.section_id', '=', 'sections.id')
            ->delete();

            $response = [
                'message' => 'Cours supprimé avec succès !',
                'status' => 200
            ];
    
            return $response;
    }

    public function getCoursesByTeacher(int $id){
        $courses = Course::where('teacher_id', '=', $id)->get();

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

}
