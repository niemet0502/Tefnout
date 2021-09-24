<?php

namespace App\Http\Controllers;

use App\Models\Note;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
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
            'value' => 'required|integer|min:1|max:5',
            'formation_id' => 'required|integer|min:1|',
        ]);

        $note = new Note();
        $note->value =  $request->value;
        $note->formation_id =  $request->formation_id;
        $note->save();
        
        return response([
            'status' => 'success',
            'message' => 'Note ajouté avec succès !'
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

    public function getAllCourseRatings(){
        $notes =  Course::join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
            ->join('notes', 'notes.formation_id', '=', 'follow_courses.id')
            ->join('users', 'users.id', '=', 'follow_courses.student_id')
            ->select(DB::raw('SUM(notes.value) as total_note'),
            DB::raw('COUNT(notes.value) as notes_count'))
            ->groupBy('follow_courses.id')
            ->get();
            
        return response([
            'status' => 'success',
            'notes' => $notes
        ],200);

    }

    public function getTeacherCourseRatings($id){
        $notes =  Course::where('courses.teacher_id', $id)
                ->join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->join('notes', 'notes.formation_id', '=', 'follow_courses.id')
                ->join('users', 'users.id', '=', 'follow_courses.student_id')
                ->select(DB::raw('SUM(notes.value) as total_note'),
                DB::raw('COUNT(notes.value) as notes_count'))
                ->groupBy('courses.id')
                ->get();

        $one =  Course::where('courses.teacher_id', $id)
                ->join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->join('notes', 'notes.formation_id', '=', 'follow_courses.id')
                ->join('users', 'users.id', '=', 'follow_courses.student_id')
                ->where('notes.value', '=', 1)
                ->select(DB::raw('SUM(notes.value) as total_note'),
                DB::raw('COUNT(notes.value) as notes_count'))
                ->groupBy('courses.id')
                ->get();


            return response([
                'status' => 'success',
                'notes' => $notes
            ],200);
    }
}
