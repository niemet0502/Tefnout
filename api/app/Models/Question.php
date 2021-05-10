<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
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
