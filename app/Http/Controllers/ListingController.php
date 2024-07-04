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
        $cars = Cache::remember('cars', 10, function () {
            return Car::select(['id', 'slug', 'make', 'model', 'year', 'price'])
                ->with(['images' => function ($query) {
                    $query->select(['id', 'url', 'car_id'])->orderBy('id')->take(1);
                }])
                ->paginate(20);
        });

        return inertia('Listing', [
            'cars' => $cars,
        ]);
    }

    /**
     *  Display car's information
     */
    public function displayCar($slug)
    {
        $car = Car::whereSlug($slug)->with(['images' => function ($query) {
            $query->select(['id', 'url', 'car_id']);
        }])->first();

        $similarCars = Car::where('slug', '<>', $car->slug)
            ->orWhere('make', $car->make)
            ->orWhere('model', $car->model)
            ->orWhere('year', $car->year,)
            ->orWhere('body_type', $car->body_type)
            ->with(['images' => function ($query) {
                $query->select(['id', 'url', 'car_id']);
            }])->take(10)->get();

        return inertia('DisplayCar', [
            'car' => $car,
            'similarCars' => $similarCars
        ]);
    }

    /**
     *  Search a car by keyword
     */
    public function search($keyword)
    {
        $cars = Car::select(['id', 'slug', 'make', 'model', 'year', 'price'])
            ->where("slug", "like", "%" . $keyword . "%")
            ->with(['images' => function ($query) {
                $query->select(['id', 'url', 'car_id'])->orderBy('id')->take(1);
            }])
            ->paginate(20);

        return inertia('Listing', [
            'cars' => $cars,
        ]);
    }
}
