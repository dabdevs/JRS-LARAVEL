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
        $url = $this->faker->randomElement(['img/card-image-1.jpg', 'img/card-image-2.jpg']);
        return [
            'url' => $url,
            'extention' => 'jpg',
            'car_id' => Car::factory(), 
        ];
    }
}
