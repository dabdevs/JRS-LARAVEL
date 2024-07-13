<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'middle_name', // nullable field, so included even though optional
        'last_name',
        'ssn_itin', // unique field, but still needs to be fillable
        'date_of_birth',

        'driver_license_number', // nullable field, so included even though optional
        'phone',
        'mobile_phone', // nullable field, so included even though optional

        'email', // unique field, but still needs to be fillable

        'address_line_1',
        'address_line_2', // nullable field, so included even though optional
        'apt_unit', // nullable field, so included even though optional
        'city',
        'county', // nullable field, so included even though optional
        'state',
        'zip_code',
        'time_at_current_address',
        'current_residence_type',

        'rent_mortgage_payment',

        'employment_type',
        'employer_name',
        'occupation_rank',
        'work_phone',
        'work_phone_extension', // nullable field, so included even though optional
        'time_at_employment',

        'employer_address_line_1',
        'employer_address_line_2', // nullable field, so included even though optional
        'employer_apt_unit', // nullable field, so included even though optional
        'employer_city',
        'employer_state',
        'employer_zip_code',

        'gross_monthly_income',
        'other_monthly_income', // nullable field, so included even though optional
        'other_monthly_income_description', // nullable field, so included even though optional
    ];
}
