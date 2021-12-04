<?php

namespace App\Http\Controllers;

use App\Models\Applicatio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ApplicationController extends Controller
{
    public function index(){
        return Applicatio::all();
    }

    public function store(Request $request){
        $request->validate([
            'fullname' => 'required',
            'email' => 'required',
            'message' => 'nullable',
            'phone' => 'required',
        ]);

        $application = new Applicatio();

        $application->fullname = $request->fullname;
        $application->email = $request->email;
        $application->resume = $request->resume;
        $application->message = $request->message;
        $application->phone = $request->phone;

        $application->save();

        return response([
            'status' => 'success',
            'message' => 'Votre demande a bien ete envoyer !!!'
        ],200);
    }

    public function destroy(int $id){
        Applicatio::destroy($id);

        return response([
            'status' => 'success',
            'message' => 'Application supprimer avec succes'
        ],200);

    }   
}
