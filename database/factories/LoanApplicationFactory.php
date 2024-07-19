<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LoanApplication>
 */
class LoanApplicationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $factory = [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->lastName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->safeEmail,
            'ssn_itin' => Str::random(9),
            'date_of_birth' => $this->faker->date('Y-m-d'),
            'driver_license_number' => $this->faker->optional()->randomNumber(8),
            'phone' => $this->faker->numberBetween(2222222222, 9999999999),
            'address_line_1' => $this->faker->streetAddress,
            'address_line_2' => $this->faker->optional()->secondaryAddress,
            'apt_unit' => $this->faker->optional()->randomNumber(4),
            'city' => $this->faker->city,
            'county' => $this->faker->optional()->city,
            'state' => $this->faker->stateAbbr,
            'zip_code' => $this->faker->postcode,
            'time_at_current_address' => $this->faker->numberBetween(1, 10),
            'current_residence_type' => $this->faker->randomElement(['Own', 'Rent', 'Other']),
            'rent_mortgage_payment' => $this->faker->randomFloat(2, 500, 5000),
            'employment1_type' => $this->faker->randomElement(['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other']),
            'employment1_rank' => $this->faker->jobTitle,
            'employer1_name' => $this->faker->company,
            'employer1_phone' => $this->faker->phoneNumber,
            'time_at_employment1' => $this->faker->numberBetween(1, 10),
            'income1_type' => $this->faker->randomElement(['Comp Paystub w/YTD', 'Printed Paystub - No YTD', 'Self Emp - TurboPass', 'Self Emp - Bus Bank Stmt', 'Self Emp - Pers Bank Stmt', 'Job Letter', 'SSI - Buyer']),
            'income1' => $this->faker->randomFloat(2, 3000, 10000),
            'employer1_address' => $this->faker->streetAddress,
            'employer1_city' => $this->faker->city,
            'employer1_state' => $this->faker->stateAbbr,
            'employer1_zip_code' => $this->faker->postcode,
            'employment2_type' => $this->faker->optional()->randomElement(['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other']),
            'employer2_name' => $this->faker->optional()->company,
            'employment2_rank' => $this->faker->optional()->jobTitle,
            'employer2_phone' => $this->faker->optional()->phoneNumber,
            'time_at_employment2' => $this->faker->optional()->numberBetween(1, 10),
            'income2_type' => $this->faker->randomElement(['Comp Paystub w/YTD', 'Printed Paystub - No YTD', 'Self Emp - TurboPass', 'Self Emp - Bus Bank Stmt', 'Self Emp - Pers Bank Stmt', 'Job Letter', 'SSI - Buyer']),
            'income2' => $this->faker->optional()->randomFloat(2, 0, 5000),
            'income2_description' => $this->faker->optional()->sentence,
            'employer2_address' => $this->faker->optional()->streetAddress,
            'employer2_city' => $this->faker->optional()->city,
            'employer2_state' => $this->faker->optional()->stateAbbr,
            'employer2_zip_code' => $this->faker->optional()->postcode,
            'status' => $this->faker->randomElement(['Pending', 'Approved', 'Denied']),
        ];

        if ($factory["status"] === "Approved") $factory["date_approved"] = $this->faker->dateTime;
        if ($factory["status"] === "Denied") $factory["date_denied"] = $this->faker->dateTime;

        return $factory;
    }
}
