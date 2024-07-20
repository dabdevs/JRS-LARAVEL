<?php

namespace App\Http\Controllers;

use App\Events\NewContact;
use App\Http\Requests\ContactRequest;
use App\Http\Requests\LoanApplicationRequest;
use App\Mail\NewContactEmail;
use App\Models\BusinessInfo;
use App\Models\Car;
use App\Models\Contact;
use App\Models\LoanApplication;
use App\Notifications\EmailReceived;
use App\Notifications\NewContactReceived;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

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
            $contact = Contact::create($request->all());

            // event(new NewContact($contact));

            $contact->notify(new EmailReceived($contact));
            BusinessInfo::firstOrFail()->notify(new NewContactReceived($contact));

            return back()->with('success', 'Message sent successfuly!');
        } catch (\Throwable $th) {
            throw $th;
            return back()->with('error', 'An error ocurred while sending the message. Please try again later!');
        }
    }

    public function getQualified($carId)
    {
        $car = Car::with('images')->findOrFail($carId);

        return inertia('GetQualified', [
            'car' => $car
        ]);
    }

    public function storeApplication(LoanApplicationRequest $request)
    {
        try {
            LoanApplication::create($request->all());

            return inertia('LoanApplication/Success');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }
    }
}
