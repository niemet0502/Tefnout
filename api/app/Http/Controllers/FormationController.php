<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\FollowCourse;
class FormationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'student_id' => 'required|integer|min:1|',
            'course_id' => 'required|integer|min:1|',
        ]);

        $formation = new FollowCourse();

        $formation->student_id = $request->student_id;
        $formation->course_id = $request->course_id;
        $formation->status = "en cours";

        $formation->save();
        return response([
            'formation' => 'success',
            'message' => 'Formation ajouté avec succès !'
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
        //
    }

    public function studentsCourse(int $id){
        $courses = FollowCourse::select('follow_courses.status as formation_status',
                'follow_courses.created_at as inscription_date',
                'courses.title as course_title', 
                'users.name as teacher_name', 
                'categories.name as category_name')
                ->where('follow_courses.student_id', '=', $id)
                ->join('courses', 'courses.id', '=', 'follow_courses.course_id')
                ->join('categories', 'categories.id', '=', 'courses.category_id')
                ->join('users', 'users.id', '=', 'courses.teacher_id')
                ->withCount('followChapters')
                ->get();
        ;

        return $courses;
    }
}
