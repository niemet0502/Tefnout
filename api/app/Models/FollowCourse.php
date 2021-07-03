<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FollowCourse extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'course_id',
        'status'
    ];

    /**
     * Get the comments for the blog post.
     */
    public function followChapters()
    {
        return $this->hasMany(FollowChapter::class);
    }

    /**
     * Get the notes for the blog post.
     */
    public function notes()
    {
        return $this->hasMany(Note::class);
    }
}
