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
        'slug',
        'state',
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
        'cylinders',
        'is_published'
    ];

    /**
     * Get all of the images for the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
