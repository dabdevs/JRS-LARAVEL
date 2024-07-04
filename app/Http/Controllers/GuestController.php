<?php

namespace App\Http\Controllers;

use App\Models\BusinessInfo;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class GuestController extends Controller
{
    /**
     *  Load index view
     */
    public function index() {
        $businessInfo = Cache::remember('businessInfo', 60, function () {
            return BusinessInfo::first();
        });

        return Inertia::render('Index', compact('businessInfo'));
    }
}
