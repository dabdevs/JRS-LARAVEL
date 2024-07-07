<?php

namespace App\Http\Controllers;

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
        // $cars = Car::with('images')->get()->map(function ($car) {
        //     return [
        //         'id' => $car->id,
        //         'name' => $car->name,
        //         'permissions' => $car->permissions,
        //         'created_at' => $car->created_at->toIso8601String(),
        //         'updated_at' => $car->created_at->toIso8601String(),
        //     ];
        // });

        $query = Car::query()
            // ->select(['id', 'slug', 'make', 'model', 'state', 'year', 'price', 'mileage'])
            ->with(['images' => function ($q) {
                $q->select(['id', 'url', 'car_id'])->orderBy('id')->take(1);
            }]);

        // Filtering
        if ($request->has('search')) {
            $query->where('slug', 'like', '%' . $request->input('search') . '%');
        }

        // Sorting
        if ($request->has('sort')) {
            $query->orderBy($request->input('sort'), $request->input('direction', 'asc'));
        }

        // Pagination
        $cars = $query->paginate(5);

        return inertia('Cars', [
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
     *  Update existing car
     */
    public function update(CarRequest $request)
    {
        try {
            $car = Car::findOrFail($request->id);

            $car->update($request->all());

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
