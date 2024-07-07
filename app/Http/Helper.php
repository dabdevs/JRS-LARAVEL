<?php

namespace App\Http;

use App\Models\Car;
use Illuminate\Support\Facades\Cache;

class Helper {
    public static function sortCars($q, $options=[])
    {
        // Sort
        if (!empty(request('sortBy'))) {
            $order = request('sortBy');
            $field = null;

            if ($order === "lowest-price") {
                $field = "price";
                $order = "ASC";
            }
            if ($order === "highest-price") {
                $field = "price";
                $order = "DESC";
            }
            if ($order === "newest") {
                $field = "date_published";
                $order = "ASC";
            }

            if (!is_null($field)) return $q->orderBy($field, $order); 
        }
        
        return $q;
    }

    public static function getCarsMakeAndModels() {
        $formadedMakeModels = Cache::remember('formadedMakeModels', 60, function () {
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

        return $formadedMakeModels;
    }
}