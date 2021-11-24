<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\FollowChapter;
use Illuminate\Http\Request;
use App\Models\FollowCourse;
use App\Models\Section;
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
    public function show($slug,$id)
    {
        if((FollowCourse::where([['course_id', intval(substr($slug,0,2))], ['student_id', $id]])->first()) == null){
            $formation = new FollowCourse();

            $formation->student_id = $id;
            $formation->course_id =  intval(substr($slug,0,2));
            $formation->status = "en cours";
            $formation->save();
        }
        $curriculum = Course::where('courses.slug', $slug)
                ->join('sections', 'sections.course_id', '=', 'courses.id')
                ->join('chapters', 'chapters.section_id', '=', 'sections.id')
                ->select('sections.id','sections.title as section_title', 'chapters.title as chapter_title', 'chapters.id as chapter_id')
                ->groupBy('chapters.id')
                ->get();


        $chapterValide = FollowCourse::where([['follow_courses.course_id', intval(substr($slug,0,2))],
                        ['follow_courses.student_id', $id]])
                    ->join('follow_chapters', 'follow_chapters.formation_id', '=', 'follow_courses.id')
                    ->select('follow_chapters.chapter_id as chapter_id')
                    ->groupBy('follow_chapters.id')
                    ->get();

        return response([
            'curriculum' => $curriculum,
            'chapterValide' => $chapterValide

        ]);
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
                'courses.slug as course_slug',
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
            'slug' => 'required|string|min:1|',
            'chapter_id' => 'required|integer|min:1|',
            'student_id' => 'required|integer|min:1|',
        ]);

        $formation =  FollowCourse::where([['course_id', intval(substr($request->slug,0,1))], ['student_id', $request->student_id]])->first();

        $chapter = new FollowChapter();
        $chapter->is_validated = "true";
        $chapter->chapter_id = $request->chapter_id;
        $chapter->formation_id = $formation->id;
        $chapter->follow_course_id = $formation->id;

        $chapter->save();
        
        return response([
            'chapitre' => 'success',
            'message' => 'Et un chapitre de terminé, bravo !'
        ], 200);

    }

    public function unvalideChapter($slug,$student_id,$chapter){
        $formation =  FollowCourse::where([['course_id', intval(substr($slug,0,2))], ['student_id', $student_id]])->first();
        
        FollowChapter::where([['formation_id', $formation->id], 
                    ['chapter_id', $chapter]])->delete();
        

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

    public function checkIfTrainingsExist(int $student,int $cours){

        $training = FollowCourse::where([['course_id', '=', $cours], ['student_id', '=', $student]])->get();

        return $training;
    }

}
