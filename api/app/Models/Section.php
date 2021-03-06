<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Section extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = ['title', 'description', 'course_id'];
    
     /**
     * Get the chapters for the section.
     */
    public function chapters()
    {
        return $this->hasMany(Chapter::class);
    }

     /**
     * Get the quizz for the section.
     */
    public function quizzs()
    {
        return $this->hasMany(Quizz::class);
    }
}
