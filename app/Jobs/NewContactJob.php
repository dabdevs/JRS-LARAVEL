<?php

namespace App\Jobs;

use App\Mail\NewContactEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class NewContactJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $contact;

    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    public function handle()
    {
        Mail::to($this->contact['email'])->send(new NewContactEmail($this->contact));
    }
}
