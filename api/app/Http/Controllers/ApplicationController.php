<?php

namespace App\Http\Controllers;

use App\Models\Applicatio;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function index(){
        return Applicatio::all();
    }

    public function store(Request $request){
        $request->validate([
            'fullname' => 'required',
            'email' => 'required',
            'resume' => 'required',
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
}
