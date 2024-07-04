<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Support\Facades\Cache;

class ListingController extends Controller
{
    /**
     *  Render listing view
     */
    public function index()
    {
        // $cars = Cache::remember('cars', 1, function () {
        //     return Car::select(['id', 'make', 'model', 'year', 'price'])
        //         ->with(['images' => function ($query) {
        //             $query->select(['id', 'url'])->where('is_primary', 1);
        //         }])
        //         ->get();
        // });

        $cars = Car::select(['id', 'make', 'model', 'year', 'price'])
            ->with(['images' => function ($query) {
                $query->orderBy('id')->take(1);
            }])
            ->paginate(20); 

        return inertia('Listing', [
            'cars' => $cars,
        ]);
    }
}
