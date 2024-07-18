<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoanApplicationRequest;
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
        // if ($request->has('search')) {
        //     $query->where('slug', 'like', '%' . $request->input('search') . '%');
        // }

        // $query = Helper::sortCars($query);

        // Pagination
        $applications = $query->paginate(5); 

        return inertia('LoanApplication/Index', [
            'applications' => $applications,
            'filters' => $request->only(['search', 'sort', 'direction']),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('LoanApplication/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LoanApplicationRequest $request)
    {
        try {
            $application = LoanApplication::create($request->all());
            
            return redirect(route('loan-applications.edit', $application->id));
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
        $application = LoanApplication::findOrFail($id);

        return inertia('LoanApplication/Edit', [
            'application' => $application
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

            return redirect(route('loan-applications.edit', $application->id))->with('success', 'Application updated successfuly.');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
