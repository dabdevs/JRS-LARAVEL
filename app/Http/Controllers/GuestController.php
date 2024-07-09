<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\BusinessInfo;
use App\Models\Contact;
use Illuminate\Support\Facades\Cache;

class GuestController extends Controller
{
    /**
     *  Load index view
     */
    public function index() {
        $businessInfo = Cache::remember('businessInfo', 60, function () {
            return BusinessInfo::first();
        });

        return inertia('Index', compact('businessInfo'));
    }

    /**
     *  Send contact message
     */
    public function contact(ContactRequest $request) 
    {
        try {
            Contact::create($request->all());

            return back()->with('success', 'Message sent successfuly!');
        } catch (\Throwable $th) {
            return back()->with('error', 'An error ocurred while sending the message. Please try again later!');
            //throw $th;
        }
    }
}
