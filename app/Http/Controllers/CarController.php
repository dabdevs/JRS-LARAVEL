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
            $data = $request->all();

            $car = new Car($data); 
            $car->slug = Helper::generateSlug($car);
            
            if (Car::whereSlug($car->slug)->exists()) {
                return back()->with('error', 'This car already exists in the database');
            }

            $car->save();

            return redirect(route('cars.edit', $car->slug))->with('success', 'Car created successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     *  Create view
     */
    public function create()
    {
        return inertia('Car/Create', [
            'models' => Helper::getCarModels()
        ]);
    }

    /**
     *  Show view
     */
    public function show($slug) 
    {
        $car = Car::whereSlug($slug)->with('images')->firstOrFail();
        
        return inertia('Car/Show', [
            'car' => $car
        ]);
    }

    /**
     *  Edit view
     */
    public function edit($slug) 
    {
        $car = Car::whereSlug($slug)->with('images')->firstOrFail();
    
        return inertia('Car/Edit', [
            'car' => $car,
            'models' => Helper::getCarModels()
        ]);
    }

    /**
     *  Update existing car
     */
    public function update(Car $car, CarRequest $request)
    {
        try {
            $car->fill($request->all());

            switch ($car->status) {
                case 'Published':
                    if ($car->images->count() === 0) {
                        return back()->with('error', 'Cannot change the state before uploading images.');
                    }
                    $car->date_published = now();
                    break;
                case 'Sold':
                    if ($car->images->count() === 0) {
                        return back()->with('error', 'Cannot change the state before uploading images.');
                    }
                    $car->date_sold = now();
                    break;
                
                default:
                    $car->date_published = null;
                    break;
            }

            $car->slug = Helper::generateSlug($car);
            $car->save();

            return redirect(route('cars.edit', $car->slug))->with('success', 'Car updated successfuly.');
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
                foreach ($car->images as $image) {
                    Storage::delete('public/' . $image->url);
                }

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

    /** 
     * Delete image
     */
    public function deleteImage(Request $request, $imgId)
    {
        try {
            $car = Car::findOrFail($request->id);
            $image = $car->images()->findOrFail($imgId);

            // Delete the image file from storage
            Storage::delete('public/' . $image->url);

            // Delete the image record from the database
            $image->delete();

            if ($car->images()->count() === 0) {
                $car->status = 'Unpublished';
                $car->save();
            }

            return redirect(route('cars.edit', $car->slug))->with('success', 'Image deleted successfully.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('success', 'Image deleted successfully.');
        }
    }
}
