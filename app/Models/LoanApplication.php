<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class LoanApplication extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'email',
        'ssn_itin',
        'date_of_birth',
        'driver_license_number',
        'phone',
        'address_line_1',
        'address_line_2',
        'apt_unit',
        'city',
        'county',
        'state',
        'zip_code',
        'time_at_current_address_years',
        'time_at_current_address_months',
        'current_residence_type',
        'rent_mortgage_payment',
        'employment1_type',
        'employment1_rank',
        'employer1_name',
        'employer1_phone',
        'time_at_employment1_years',
        'time_at_employment1_months',
        'income1_type',
        'income1',
        'employer1_address',
        'employer1_city',
        'employer1_state',
        'employer1_zip_code',
        'employment2_type',
        'employer2_name',
        'employment2_rank',
        'employer2_phone',
        'time_at_employment2_years',
        'time_at_employment2_months',
        'income2_type',
        'income2',
        'income2_description',
        'employer2_address',
        'employer2_city',
        'employer2_state',
        'employer2_zip_code',
        'down_payment',
        'sent_to_bank',
        'status',
        'date_approved',
        'date_denied',
        'car_id'
    ];

    /**
     * Get the car that owns the LoanApplication
     *
     */
    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
