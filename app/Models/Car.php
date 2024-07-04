<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'make',
        'model',
        'year',
        'color',
        'mileage',
        'price',
        'transmission',
        'fuel_type',
        'body_type',
        'engine_size',
        'doors',
        'is_used',
        'is_published'
    ];
}
