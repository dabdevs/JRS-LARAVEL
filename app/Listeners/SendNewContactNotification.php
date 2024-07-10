<?php

namespace App\Listeners;

use App\Events\NewContact;
use App\Jobs\NewContactJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendNewContactNotification implements ShouldQueue
{
    use InteractsWithQueue;
    
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(NewContact $event): void
    {
        NewContactJob::dispatch($event->contact);
    }
}
