<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $data = [
            'make' => $this->faker->randomElement(['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Lexus', 'Mercedes', 'Tesla', 'Nissan']),
            'model' => $this->faker->word,
            'year' => $this->faker->numberBetween(2000, 2024),
            'color' => $this->faker->safeColorName,
            'mileage' => $this->faker->numberBetween(0, 100000),
            'price' => $this->faker->numberBetween(5000, 50000),
            'transmission' => $this->faker->randomElement(['Automatic', 'Manual']),
            'fuel_type' => $this->faker->randomElement(['Gasoline', 'Diesel', 'Electric']),
            'body_type' => $this->faker->randomElement(['Sedan', 'SUV', 'Truck', 'Coupe']),
            'engine_size' => $this->faker->randomFloat(2, 1.0, 5.0),
            'doors' => $this->faker->numberBetween(2, 5),
            'is_used' => $this->faker->boolean(),
            'is_published' => true,
        ];

        $slug = Str::slug($data['make'] . "-" . $data['model'] . "-" . $data['year'] . "-" . $data['color'] . "-" . $data['mileage'] . "-" . $data['price'] . "-" . $data['transmission'] . "-" .$data['fuel_type'] . "-" .$data['body_type']. "-" . $data['engine_size'] . "-" . $data['doors']);
        $data['slug'] = $slug;
        
        return $data;
    }
}
