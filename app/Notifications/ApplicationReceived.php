<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApplicationReceived extends Notification
{
    use Queueable;

    public $application;

    /**
     * Create a new notification instance.
     */
    public function __construct($application)
    {
        $this->application = $application;
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
        return (new MailMessage)
            ->line('Dear ' . $this->application->first_name . ',')
            ->line('Thank you for submitting your application')
            ->line('for ' . $this->application->car->state . ' ' . $this->application->car->make . ' ' . $this->application->car->model . ' ' . $this->application->car->year . '.')
            ->line('We will review it and get back to you shortly.')
            ->line('Best regards,')
            ->line('The ' . env('APP_NAME') . ' Team')
            ->action('Click here to see more vehicles', url('/listing'));
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
