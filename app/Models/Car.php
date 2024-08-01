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
        'description',
        'vin',
        'seats',
        'seat_rows',
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
        'date_published',
        'date_sold',
        'status',
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

    /**
     * Get all of the applications for the Car
     *
     */
    public function applications()
    {
        return $this->hasMany(LoanApplication::class);
    }
}
