<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'course_id', 'content'];

     /**
     * Get the course that owns the note.
     */
    public function course()
    {
        return $this->belongsTo(Course::class, 'foreign_key');
    }

    /**
     * Get the user that owns the note.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'foreign_key');
    }
}
