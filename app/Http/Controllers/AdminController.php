<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class AdminController extends Controller
{
    public function dashboard()
    {
        return redirect(route('cars.index'));
        // return inertia('Dashboard');
    }
}
