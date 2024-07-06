<?php

namespace App\Http\Controllers;

use App\Models\Car;
use App\Models\Manufacturer;
use Illuminate\Support\Facades\Cache;

class ListingController extends Controller
{
    /**
     *  Render listing view
     */
    public function index()
    {
        $formadedMakeModels = Cache::remember('formadedMakeModels', 60, function() {
            $carsData = [];
            $cars = Car::select(['make', 'model'])->where('is_published', true)->get();

            foreach ($cars as $car) {
                if (!array_key_exists($car->make, $carsData)) {
                    $carsData[$car->make] = [];
                }

                array_push($carsData[$car->make], $car->model);
            }

            return $carsData;
        }); 

        // Initiate query builder
        $query = Car::query()->select(['id', 'slug', 'make', 'model', 'state', 'year', 'price', 'mileage'])
            ->with(['images' => function ($q) {
                $q->select(['id', 'url', 'car_id'])->orderBy('id')->take(1);
            }]);

        // search
        if (request('search')) {
            $query->where("slug", "like", "%" . request('search') . "%");
        }

        $filters = request()->all();

        if (!empty($filters["state"])) $query->whereIn('state', $filters["state"]);
        if (!empty($filters["make"])) $query->whereIn('make', $filters["make"]);
        if (!empty($filters["model"])) $query->whereIn('model', $filters["model"]);
        if (!empty($filters["body_type"])) $query->orWhereIn('body_type', $filters["body_type"]);
        if (!empty($filters["fuelType"])) $query->orWhereIn('fuelType', $filters["fuelType"]);
        if (!empty($filters["size"])) $query->orWhereIn('size', $filters["size"]);
        if (!empty($filters["doors"])) $query->orWhereIn('doors', $filters["doors"]);
        if (!empty($filters["transmission"])) $query->orWhereIn('transmission', $filters["transmission"]);
        if (!empty($filters["cylinders"])) $query->orWhereIn('cylinders', $filters["cylinders"]);
        if (!empty($filters["minYear"])) $query->orWhere('year', '>', $filters["minYear"]);
        if (!empty($filters["maxYear"])) $query->orWhere('year', '<', $filters["maxYear"]);

        if (!empty($filters["price"])) {
            $prices = explode("-", $filters["price"]);
            $minPrice = (float)$prices[0];
            $maxPrice = (float)$prices[1];

            $query->whereBetween("price", [$minPrice, $maxPrice]);
        }

        if (!empty($filters["mileage"])) {
            $mileage = explode("-", $filters["mileage"]);
            $minMileage = (int)$mileage[0];
            $maxMileage = (int)$mileage[1];

            $query->whereBetween("mileage", [$minMileage, $maxMileage]);
        }

        // Execute the query and paginate results
        $cars = $query->paginate(20);

        return inertia('Listing', [
            'cars' => $cars,
            'manufacturers' => $formadedMakeModels,
        ]);

        return inertia('Listing', [
            'cars' => $query->paginate(20),
            'count' => Car::count(),
            'manufacturers' => $formadedMakeModels,
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
}
