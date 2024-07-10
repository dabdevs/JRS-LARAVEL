<?php

namespace App\Notifications;

use App\Models\BusinessInfo;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class EmailReceived extends Notification implements ShouldQueue
{
    use Queueable;

    public $contact;

    /**
     * Create a new notification instance.
     */
    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $business = BusinessInfo::firstOrFail();

        return (new MailMessage)
                    ->line('Dear '. $this->contact->name. ',')
                    ->line('Thank you for reaching out to us at '.env('APP_NAME'). '. We have received your message and one of our representatives will get back to you shortly.')
                    ->line('If you have any urgent inquiries, please feel free to call us at '. $business->phone . '.')
                    ->line('Best regards,')
                    ->line('The '. env('APP_NAME') .' Team')
                    ->line($business->address)
                    ->line($business->phone)
                    ->line($business->email)
                    ->line('www.jrsautocorp.com');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
