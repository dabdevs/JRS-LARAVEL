<?php

namespace App\Http\Controllers;

use App\Http\Helper;
use App\Http\Requests\LoanApplicationRequest;
use App\Models\Car;
use App\Models\LoanApplication;
use Illuminate\Http\Request;

class LoanApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = LoanApplication::query();
        // ->select(['id', 'slug', 'make', 'model', 'state', 'year', 'price', 'mileage'])


        // Search
        if ($request->has('search')) {
            $query->where('first_name', 'like', '%' . $request->input('search') . '%');
            $query->orWhere('last_name', 'like', '%' . $request->input('search') . '%');
            $query->orWhere('email', 'like', '%' . $request->input('search') . '%');
            $query->orWhere('ssn_itin', 'like', '%' . $request->input('search') . '%');
        }

        $query = Helper::sortApplications($query);

        // Pagination
        $applications = $query->paginate(10);

        return inertia('LoanApplication/Index', [
            'applications' => $applications,
            'filters' => $request->only(['search', 'sort', 'direction']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($carId)
    {
        $car = Car::with('images')->findOrFail($carId);

        return inertia('LoanApplication/Create', [
            'car' => $car
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanApplicationRequest $request)
    {
        try {
            LoanApplication::create($request->all());

            return redirect()->back()->with('success', 'Application created successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $application = LoanApplication::findOrFail($id);

        return inertia('LoanApplication/Show', [
            'application' => $application
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $application = LoanApplication::with('car')->findOrFail($id);
        $car = Car::with('images')->findOrFail($application->car_id);

        return inertia('LoanApplication/Edit', [
            'application' => $application,
            'car' => $car
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, LoanApplicationRequest $request)
    {
        try {
            $application = LoanApplication::findOrFail($id);
            $application->update($request->all());

            return redirect(route('applications.edit', $application->id))->with('success', 'Application updated successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            LoanApplication::findOrFail($id)->delete();

            return redirect()->back()->with('success', 'Application deleted successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}
