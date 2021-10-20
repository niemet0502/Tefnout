<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\FollowChapter;
use Illuminate\Http\Request;
use App\Models\FollowCourse;
use Illuminate\Support\Facades\DB;
use App\Models\User;
class FormationController extends Controller
{

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

    public function getStudentFormations(int $id){
        $courses = FollowCourse::select(
                'follow_courses.created_at as inscription_date',
                'courses.title as course_title', 
                'categories.name as category_name',
                'courses.chapter_count as chapter_count')
                ->where('follow_courses.student_id', '=', $id)
                ->join('courses', 'courses.id', '=', 'follow_courses.course_id')
                ->join('categories', 'categories.id', '=', 'courses.category_id')
                ->join('users', 'users.id', '=', 'courses.teacher_id')  
                ->withCount('followChapters') // afficher le pourcentage des chapitres valider
                ->get();
        ;

        return $courses;
    }

    public function valideChapter(Request $request){
        $request->validate([
            'formation_id' => 'required|integer|min:1|',
            'chapter_id' => 'required|integer|min:1|',
        ]);

        $chapter = new FollowChapter();
        $chapter->is_validated = true;
        $chapter->chapter_id = $request->chapter_id;
        $chapter->formation_id = $request->formation_id;
        $chapter->follow_course_id = $request->formation_id;

        $chapter->save();
        
        return response([
            'chapitre' => 'success',
            'message' => 'Et un chapitre de terminé, bravo !'
        ], 200);
    }

    public function unvalideChapter($id){
        FollowChapter::destroy($id);

        return response([
            'chapitre' => 'success',
            'message' => 'Ce chapitre n’est plus marqué comme étant terminé.'
        ], 200);
    }

    public function cancelFormation($id){

        FollowChapter::where('follow_course_id', $id)->delete();
        FollowCourse::destroy($id);

        $response = [
            'message' => 'Vous ne suivez plus ce cours',
            'status' => 200
        ];

        return $response;
    }

    public function studentReviews($id){
        
        $comments = User::join('follow_courses', 'follow_courses.student_id', '=', 'users.id')
                    ->join('comments', 'comments.formation_id', '=', 'follow_courses.id')
                    ->join('courses', 'courses.id', '=', 'follow_courses.course_id')
                    ->where('users.id', $id)
                    ->select('courses.title as course_title',
                    'comments.content as comment',
                    'users.name as student_name',
                    'users.firstname as student_firstname',
                    'courses.created_at as comment_date',
                    'users.avatar as student_avatar')
                    ->get();

        $notes = User::join('follow_courses', 'follow_courses.student_id', '=', 'users.id')
                    ->join('notes', 'notes.formation_id', '=', 'follow_courses.id')
                    ->where('users.id', $id)
                    ->select(DB::raw('SUM(notes.value) as total_note'),
                    DB::raw('COUNT(notes.value) as notes_count'))
                    ->groupBy('users.id')
                    ->get();     
        
        $response = [
            'comments' =>  $comments,
            'notes' =>  $notes,
            'status' => 200
        ];

        return $response;
    }

    public function checkIfTrainingsExist(int $cours,int $student){


        $training = FollowCourse::where([['course_id', '=', $cours], ['student_id', '=', $student]])->get();

        return $training;
    }

}
