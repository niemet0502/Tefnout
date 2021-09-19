<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\FormationController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\UserController;
use App\Models\Course;
use App\Models\User;
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

//course's route {list, search and show}
Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/{id}', [CourseController::class, 'show']);
Route::get('/courses/search/{name}', [CourseController::class, 'searchCourse']);

Route::resource('categories', CategoryController::class);

Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/users/find/{email}', [UserController::class, 'getUserByEmail']);
Route::get('/users', [UserController::class, 'index']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);

Route::get('/users/admin/dashboard', [UserController::class, 'getAdminStat']);
Route::get('/users/instructor/dashboard/{id}', [UserController::class, 'getInstructorStat']);
Route::group(['middleware' => ['auth:sanctum']], function () {

    // Category's routes

    //user's routes 
    Route::put('/users/{id}', [UserController::class, 'update']);
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::get('/users/profil/{id}', [UserController::class, 'getUserByProfil']);


    // Comment's routes 
    Route::post('/comments',[CommentController::class, 'store']);

    //Note's routes
    Route::post('/notes',[NoteController::class, 'store']);
  
    //course's route {store}
    Route::post('/courses', [CourseController::class, 'store']);
    Route::get('/topics/{id}',  [CategoryController::class, 'show']); // show course
    Route::delete('/courses/{id}', [CourseController::class, 'destroy']);



    //teacher's courses
    Route::get('/teacher/{id}/courses', [CourseController::class, 'getCoursesByTeacher']);
    

    // profil's routes 
    Route::post('/profils', [ProfilController::class, 'store']);

    //logout's route

    //Formation routes
    Route::delete('/formations/{id}', [FormationController::class, 'cancelFormation']); //cancel formation
    Route::post('/formations', [FormationController::class, 'store']); // start learning course 
    Route::post('/formation/chapter', [FormationController::class, 'valideChapter']); // validated chapter
    Route::delete('/formation/chapter/{id}', [FormationController::class, 'unvalideChapter']); // unvalidated chapter

    //student's course 
    Route::get('/student/courses/{id}', [FormationController::class, 'studentsCourse']);

    // get student's review 
    Route::get('/students/reviews/{id}', [FormationController::class, 'studentReviews']);

    //get teacher's review 
    Route::get('/teacher/reviews/{id}', [FormationController::class, 'teacherReviews']);

});



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
