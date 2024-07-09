<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /**
     *  Fillable fields
     */
    protected $fillable = [
        'name',
        'email',
        'message'
    ];
}
