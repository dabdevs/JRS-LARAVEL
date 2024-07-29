<?php

use App\Models\Car;
use App\Models\User;
use Inertia\Testing\AssertableInertia;

test('cars list screen can be rendered', function () {
    // Create a test user and authenticate
    $user = User::factory()->create();
    $this->actingAs($user);

    // Create some cars in the database
    $cars = Car::factory()->count(2)->create();

    // Send a GET request to the /dashboard/cars route
    $response = $this->get('/dashboard/cars');

    // Check that the response is OK (status code 200)
    $response->assertOk();

    // Check that the response contains the correct Inertia props
    $response->assertInertia(
        fn (AssertableInertia $page) =>
        $page->component('Cars/Index') // Ensure you're checking the correct component
            ->has('cars', 2) // Check that the cars prop is present and has the right count
    );

    // Optionally, check for specific car names
    foreach ($cars as $car) {
        $response->assertSee($car->name);
    }
});

// class CarTest extends TestCase
// {
//     use RefreshDatabase;

//     public function test_cars_index_page_is_displayed(): void
//     {
//         // Create some cars in the database
//         $cars = Car::factory()->count(2)->create();

//         // Send a GET request to the /cars route
//         $response = $this->get('/dashboard/cars');

//         // Check that the response is OK (status code 200)
//         $response->assertOk();

//         // Optionally, check that the view contains the cars data
//         $response->assertViewHas('cars', function ($viewCars) use ($cars) {
//             return $cars->pluck('id')->diff($viewCars->pluck('id'))->isEmpty();
//         });
//     }


// }
