<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = [
        'content', 
        'question_id',
        'goodAnswer'
    ];

     /**
     * Get the question that owns the answer.
     */
    public function question()
    {
        return $this->belongsTo(Question::class, 'foreign_key');
    }
}
