<?php

namespace App\Http\Controllers;

use App\Http\Helper;
use App\Http\Requests\CarRequest;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CarController extends Controller
{
    /**
     *  Render car view
     */
    public function index(Request $request)
    { 
        $query = Car::query()
            // ->select(['id', 'slug', 'make', 'model', 'state', 'year', 'price', 'mileage'])
            ->with(['images' => function ($q) {
                $q->select(['id', 'url', 'car_id'])->orderBy('id')->take(1);
            }]);

        // Search
        if ($request->has('search')) {
            $query->where('slug', 'like', '%' . $request->input('search') . '%');
        }

        $query = Helper::sortCars($query);

        // Pagination
        $cars = $query->paginate(5);

        return inertia('Car/Index', [
            'cars' => $cars,
            'filters' => $request->only(['search', 'sort', 'direction']),
        ]);
    }

    /**
     *  Store a new car
     */
    public function store(CarRequest $request)
    {
        try {
            $car = Car::create(["name" => Str::lower($request->name)]);

            return redirect()->back()->with(['extraData' => ['carId' => $car->id], 'success' => 'Car created successfuly.']);
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     *  Show view
     */
    public function show($slug) 
    {
        $car = Car::whereSlug($slug)->firstOrFail();
        
        return inertia('Car/Show', [
            'car' => $car
        ]);
    }

    /**
     *  Edit view
     */
    public function edit($slug) 
    {
        $car = Car::whereSlug($slug)->firstOrFail();


        return inertia('Car/Edit', [
            'car' => $car,
            'models' => Helper::getCarModels()
        ]);
    }

    /**
     *  Update existing car
     */
    public function update(CarRequest $request)
    {
        try {
            $car = Car::findOrFail($request->id);

            // Write rules for CarRequest
            $car->fill($request->all());

            switch ($car->status) {
                case 'Published':
                    $car->date_published = now();
                    break;
                case 'Sold':
                    $car->date_sold = now();
                    break;
                
                default:
                    $car->date_published = null;
                    $car->date_sold = null;
                    break;
            }

            $car->save();

            return redirect()->back()->with('success', 'Car updated successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     *  Delete existing car
     */
    public function destroy(Car $car)
    {
        try {
            DB::transaction(function () use ($car) {
                // Delete the image files from the storage first
                // foreach ($car->images as $image) {
                //     Storage::delete($image->url);
                // }

                // Delete the images from the database
                $car->images()->delete();

                // Then delete the car
                $car->delete();
            });

            return redirect()->back()->with('success', 'Car deleted successfuly.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}
