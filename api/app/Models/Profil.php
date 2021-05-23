<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Profil extends Model
{
    use HasFactory, HasApiTokens;
    protected $fillable = ['name'];

     /**
     * Get the users for the profil.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
