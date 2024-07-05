<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $url = $this->faker->randomElement([
            'img/cars/image-1.jpg', 
            'img/cars/image-2.jpg',
            'img/cars/image-3.jpg',
            'img/cars/image-4.jpg',
            'img/cars/image-5.jpg',
            'img/cars/image-6.jpg',
            'img/cars/image-7.jpg',
            'img/cars/image-8.jpg',
            'img/cars/image-9.jpg',
            'img/cars/image-10.jpg',
            'img/cars/image-11.jpg',
            'img/cars/image-12.jpg',
        ]);
        
        return [
            'url' => $url,
            'extention' => 'jpg',
            'car_id' => Car::factory(), 
        ];
    }
}
