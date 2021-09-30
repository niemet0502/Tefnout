<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Course;
use App\Models\FollowCourse;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::select('users.*', 'profils.name as profil_name')
                ->join('profils', 'profils.id', '=', 'users.profil_id')->get();
        return $users;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user =  User::find($id);

        return response([
            'user', $user,
            'status' => 'success',
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
           
        $user = User::find($id);
        $user->update($request->all());
        
        $newUser = User::where('users.id', '=', $id)
                ->join('profils', 'profils.id', '=', 'users.profil_id')
                ->select('users.*', 'profils.id as profil_id')
                ->get();
        return response([
            'newUser', '',
            'status' => $newUser,
            'message' => 'Utilisateur mise a jour avec succès !'
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
        User::destroy($id);

        return response([
            'status' => 'success',
            'message' => 'Utilisateur supprimée avec succès !'
        ], 200);

        // [TODO] delete all informations related to user before deletion
    }

    // methods metier 

    public function getUserByProfil(int $id)
    {
        $users = User::select('users.*', 'profils.name as profil_name')
        ->join('profils', 'profils.id', '=', 'users.profil_id')
        ->where('profils.id', '=', $id)
        ->get();

        return $users;
    }

    public function getUserByEmail($email){
        return User::where('users.email', '=', $email)
                    ->get();
    }


    public function getAdminStat(){
        $courses = Course::count();
        $formations = FollowCourse::count();
        $instructors = User::where('users.profil_id', '=', 3)->get();
        $students = User::where('users.profil_id', '=', 4)->get();
        
        return response([
            'status' => 'success',
            'courses' => $courses,
            'formations' => $formations,
            'instructors' => $instructors->count(),
            'students' => $students->count()
        ], 200);
    }

    public function getInstructorStat($id){
        $courses = Course::where('courses.teacher_id', '=', $id)->get();
        $students = Course::where('courses.teacher_id', '=', $id)
                    ->join('follow_courses', 'follow_courses.course_id', '=', 'courses.id')
                    ->select(DB::raw('COUNT(follow_courses.id) as student_count'))
                    ->get();

        return response([
            'courses' => $courses->count(), 
            'students' => $students[0]['student_count']
        ],200);
    }
}
