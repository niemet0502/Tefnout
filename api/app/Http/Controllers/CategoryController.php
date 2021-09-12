<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Course;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::leftJoin('Courses', 'Categories.id', '=', 'Courses.category_id')
                    ->selectRaw('Categories.*, count(Courses.id) as CoursesCount')
                    ->groupBy('Categories.id')
                    ->get();
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
            'name' => 'required',
            // 'image' => 'nullable'
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->image = $request->image;
        $category->save();

        return response([
            'status' => 'success',
            'message' => 'Categorie ajouté avec succès !',
            'category' => $category
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

        $courses = Course::where('category_id', '=', $id)
                ->get();

        $response = [
            'courses' => $courses,
            'status' => 200
        ];

        return $response;
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
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'image' => 'nullable'
        ]);

        $category = Category::find($id);
        $category->name =  $request->name;

        $category->update();
        
        return response([
            'status' => 'success',
            'message' => 'Categorie mise a jour avec succès !'
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
        Category::destroy($id);

        return response([
            'status' => 'success',
            'message' => 'Categorie supprimée avec succès !'
        ], 200);
    }
}
