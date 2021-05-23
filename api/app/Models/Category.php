<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Category extends Model
{
    use HasFactory,HasApiTokens;
    protected $fillable = [
        'label', 
        'description'
    ];

     /**
     * Get the course for the category.
     */
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
