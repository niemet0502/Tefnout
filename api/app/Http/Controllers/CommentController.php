<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\FollowCourse;

class CommentController extends Controller
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
            'content' => 'required',
            'formation_id' => 'required|integer|min:1|',
        ]);

        $comment = new Comments();
        $comment->content =  $request->content;
        $comment->formation_id =  $request->formation_id;
        $comment->save();

        
        return response([
            'status' => 'success',
            'message' => 'Commentaire ajouté avec succès !'
        ], 200);

    }
    
    public function getTeacherComments($id){
        $comments = Course::where('courses.teacher_id', $id)
                ->join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->join('comments', 'comments.formation_id', '=', 'follow_courses.id')
                ->join('users', 'users.id', '=', 'follow_courses.student_id')
                ->select('courses.title as course_title',
                    'comments.content as comment',
                    'users.name as student_name',
                    'users.firstname as student_firstname',
                    'comments.created_at as comment_date',
                    'users.avatar as student_avatar')
                ->get();
        return response([
            'status' => 'success',
            'comments' => $comments
        ],200); 
    }

    public function getAllComments(){
        $comments = Course::join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                ->join('comments', 'comments.formation_id', '=', 'follow_courses.id')
                ->join('users', 'users.id', '=', 'follow_courses.student_id')
                ->select('courses.title as course_title',
                    'comments.content as comment',
                    'users.name as student_name',
                    'users.firstname as student_firstname',
                    'comments.created_at as comment_date',
                    'users.avatar as student_avatar')
                ->get(); 
        return response([
            'status' => 'success',
            'comments' => $comments
        ],200);
    }

    public function getCourseReviews($id){
        $reviews = FollowCourse::where('follow_courses.course_id', $id)
            ->join('comments', 'comments.formation_id', '=', 'follow_courses.id')
            ->join('users', 'users.id', '=', 'follow_courses.student_id')
            ->select('comments.*', 
            'users.name as user_name',
            'users.firstname as user_firstname',
            'users.avatar as user_avatar')
            ->groupBy('comments.id')
            ->get();

        return response([
            'reviews' => $reviews 
        ],200);
    }
}
