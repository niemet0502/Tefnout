<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Course;
use App\Models\FollowCourse;
use Illuminate\Http\Request;

class ChapterController extends Controller
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
            'title' => 'required',
            'description' => 'nullable',
            'textContent' => 'nullable',
            'video' => 'nullable',
            'section_id' => 'required|integer'
        ]);

        $chapter = new Chapter();
        $chapter->title = $request->title;
        $chapter->description = $request->description;
        $chapter->textContent = $request->textContent;
        $chapter->video = $request->video;
        $chapter->section_id = $request->section_id;

        $chapter->save();

        return response([
            'status' => 'success',
            'message' => 'chapitre ajouté avec succès !'
        ], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($chapterId, $slug, $student)
    {

        $cours = Course::where('slug', $slug)->first();

        $training = FollowCourse::where([['follow_courses.course_id', $cours->id],
                    ['follow_courses.student_id', $student]])
                    ->join('follow_chapters', 'follow_chapters.formation_id', '=', 'follow_courses.id')
                    ->where('follow_chapters.chapter_id', $chapterId)
                    ->select('follow_chapters.is_validated as is_validated')
                    ->groupBy('follow_chapters.id')
                    ->first();

        $chapter = Chapter::find($chapterId);

        return response([
            'content' => $chapter,
            'training' => $training
        ]);

       // return $chapter;
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
        $chapter = Chapter::find($id);
        $chapter->update($request->all());

        return response([
            'status' => 'success',
            'message' => 'chapitre édité avec succès !'
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
        Chapter::destroy($id);

        return response([
            'status' => 'success',
            'message' => 'chapitre supprimé avec succès !'
        ]);
    }
}
