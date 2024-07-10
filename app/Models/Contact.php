<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Contact extends Model
{
    use Notifiable;
    
    /**
     *  Fillable fields
     */
    protected $fillable = [
        'name',
        'email',
        'message'
    ];

    protected $dispatchesEvents = [
        'created' => \App\Events\NewContact::class,
    ];
}
