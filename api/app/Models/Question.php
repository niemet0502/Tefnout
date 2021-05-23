<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Question extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = ['label', 'description'];

    /**
     * Get the quizz that owns the question.
     */
    public function quizz()
    {
        return $this->belongsTo(Quizz::class, 'foreign_key');
    }

     /**
     * Get the answers for the question.
     */
    public function answers()
    {
        return $this->hasMany(Answers::class);
    }
}
