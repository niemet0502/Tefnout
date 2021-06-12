<?php

namespace App\Http\Controllers;

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
        $formation->status = "invalid";

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
}
