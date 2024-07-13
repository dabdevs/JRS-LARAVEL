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
        return [
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->optional()->lastName, // Optional middle name
            'last_name' => $this->faker->lastName,
            'ssn_itin' => Str::random(9), // Generate random SSN/ITIN (replace with logic for actual generation)
            'date_of_birth' => $this->faker->date('Y-m-d', $this->faker->numberBetween(18, 65)), // Birthdate between 18-65 years old

            'driver_license_number' => $this->faker->optional()->randomNumber(8), // Optional driver license number
            'phone' => $this->faker->phoneNumber,
            'mobile_phone' => $this->faker->optional()->phoneNumber, // Optional mobile phone number

            'email' => $this->faker->unique()->safeEmail, // Unique email address

            'address_line_1' => $this->faker->streetAddress,
            'address_line_2' => $this->faker->optional()->secondaryAddress, // Optional address line 2
            'apt_unit' => $this->faker->optional()->randomNumber(4), // Optional apartment unit number
            'city' => $this->faker->city,
            'state' => $this->faker->stateAbbr,
            'zip_code' => $this->faker->postcode,
            'time_at_current_address' => $this->faker->numberBetween(1, 10), // Time at current address (years)
            'current_residence_type' => $this->faker->randomElement(['Own', 'Rent', 'Other']),

            'rent_mortgage_payment' => $this->faker->randomFloat(2, 500, 5000), // Random rent/mortgage payment

            'employment_type' => $this->faker->randomElement(['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other']),
            'employer_name' => $this->faker->company,
            'occupation_rank' => $this->faker->jobTitle,
            'work_phone' => $this->faker->phoneNumber,
            'work_phone_extension' => $this->faker->optional()->randomNumber(4), // Optional work phone extension
            'time_at_employment' => $this->faker->numberBetween(1, 10), // Time at current employment (years)

            'employer_address_line_1' => $this->faker->streetAddress,
            'employer_address_line_2' => $this->faker->optional()->secondaryAddress, // Optional employer address line 2
            'employer_apt_unit' => $this->faker->optional()->randomNumber(4), // Optional employer apartment unit number
            'employer_city' => $this->faker->city,
            'employer_state' => $this->faker->stateAbbr,
            'employer_zip_code' => $this->faker->postcode,

            'gross_monthly_income' => $this->faker->randomFloat(2, 3000, 10000), // Random gross monthly income
            'other_monthly_income' => $this->faker->optional()->randomFloat(2, 0, 2000), // Optional other monthly income
            'other_monthly_income_description' => $this->faker->optional()->sentence, // Optional description of other income
        ];
    }
}
