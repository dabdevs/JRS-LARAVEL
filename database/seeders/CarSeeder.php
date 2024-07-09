<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Image;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 100 cars
        Car::factory()->count(100)->create()->each(function ($car) {
            Image::factory()->count(2)->create(['car_id' => $car->id]);
        });
    }
}
