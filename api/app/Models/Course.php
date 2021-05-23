<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Course extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = [
        'teacher_id',
        'category_id',
        'title',
        'description',
        'image',
        'video',
        'hours',
        'level',
        'status'
    ];

    /**
     * Get the notes for the course.
     */
    public function notes()
    {
        return $this->hasMany(Note::class);
    }

      /**
     * Get the comments for the course.
     */
    public function comments()
    {
        return $this->hasMany(Comments::class);
    }

       /**
     * Get the sections for the course.
     */
    public function sections()
    {
        return $this->hasMany(Section::class);
    }

     /**
     * Get the user that owns the course.
     */
    public function teacher()
    {
        return $this->belongsTo(User::class, 'foreign_key');
    }

     /**
     * Get the category that owns the course.
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'foreign_key');
    }
}
