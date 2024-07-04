<?php

namespace App\Http\Controllers;

use App\Models\Car;

class ListingController extends Controller
{
    /**
     *  Render listing view
     */
    public function index()
    {
        $cars = Car::all();

        return inertia('Listing', [
            'cars' => $cars,
        ]);
    }
}
