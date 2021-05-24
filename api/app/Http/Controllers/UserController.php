<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
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
        return User::find($id);
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

        return response([
            'status' => 'success',
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
}
