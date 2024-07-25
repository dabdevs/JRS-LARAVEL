<?php

namespace App\Http\Controllers;

use App\Http\Helper;
use App\Http\Requests\LoanApplicationRequest;
use App\Models\Car;
use App\Models\LoanApplication;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class LoanApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = LoanApplication::query();
    
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
        $states = Cache::rememberForever('states', function () {
            return State::orderBy('name')->pluck('name');
        });

        $car = Car::with('images')->findOrFail($carId);

        return inertia('LoanApplication/Create', [
            'car' => $car,
            'states' => $states,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanApplicationRequest $request)
    {
        try {
            $application = LoanApplication::create($request->all());

            return redirect(route('applications.show', $application->id))->with('success', 'Application created successfuly.');
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
        $car = Car::with('images')->findOrFail($application->car_id);

        return inertia('LoanApplication/Show', [
            'application' => $application,
            'car' => $car
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $states = Cache::rememberForever('states', function () {
            return State::orderBy('name')->pluck('name');
        });

        $application = LoanApplication::findOrFail($id);
        $car = Car::with('images')->findOrFail($application->car_id);

        return inertia('LoanApplication/Edit', [
            'application' => $application,
            'car' => $car,
            'states' => $states,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, LoanApplicationRequest $request)
    {
        try {
            LoanApplication::findOrFail($id)->update($request->all());

            return redirect()->back()->with('success', 'Application updated successfuly.');
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

    public function changeApplicationStatus($application_id, $status)
    {
        try {
            $data["status"] = $status;
            $application = LoanApplication::findOrFail($application_id);

            switch ($status) {
                case 'Approved':
                    $data["date_approved"] = now();
                    $data["date_denied"] = null;
                    break;
                case 'Denied':
                    $data["date_denied"] = now();
                    $data["date_approved"] = null;
                    break;

                default:
                    $data["date_denied"] = null;
                    $data["date_approved"] = null;
                    break;
            }

            $application->update($data);
            return redirect()->back()->with('success', 'Application ' . Str::lower($status));
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}
