<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {

    // Category's routes
    Route::resource('categories', CategoryController::class);

    //user's routes 
    Route::get('/users', [UserController::class, 'index']);
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::get('/users/{id}', [UserController::class, 'show']);


    Route::get('/courses', [CourseController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
});



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
