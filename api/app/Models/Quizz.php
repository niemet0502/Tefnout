<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Quizz extends Model
{
    use HasFactory,HasApiTokens;
    protected $fillable = ['title', 'description', 'section_id'];

    /**
     * Get the setion that owns the quizz.
     */
    public function section()
    {
        return $this->belongsTo(Section::class, 'foreign_key');
    }

     /**
     * Get the questions for the quizz.
     */
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
}
