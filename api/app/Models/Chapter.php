<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'textContent',
        'video',
        'section_id'
    ];

    /**
     * Get the section that owns the phone.
     */
    public function section()
    {
        return $this->belongsTo(Section::class, 'foreign_key');
    }
}
