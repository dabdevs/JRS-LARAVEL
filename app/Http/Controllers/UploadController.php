<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageUploadRequest;
use App\Models\Car;
use Illuminate\Support\Facades\DB;

class UploadController extends Controller
{
    /**
     *  Upload images
     */
    public function images(ImageUploadRequest $request)
    {
        try {
            $car = Car::findOrFail($request->modelId);

            DB::beginTransaction();
            foreach ($request->images as $key => $image) {
                $path = $image->store('images/cars', 'public');
                
                if ($request->model === 'Car') {
                    $car->images()->create([
                        "url" => $path,
                        "is_primary" => $key === 0 ?? true,
                        "extension" => 'N/A'
                    ]);
                }
            }

            DB::commit();

            return back()->with('success', 'Images uploaded successfuly');
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
            return back()->with('error', 'An error ocurred');
        }
    }
}
