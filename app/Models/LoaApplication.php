<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoanApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'ssn_itin',
        'date_of_birth',

        'driver_license_number',
        'phone',
        'mobile_phone',

        'email',

        'address_line_1',
        'address_line_2',
        'apt_unit',
        'city',
        'county',
        'state',
        'zip_code',
        'time_at_current_address',
        'current_residence_type',

        'rent_mortgage_payment',

        'employment_type',
        'employer_name',
        'occupation_rank',
        'work_phone',
        'work_phone_extension',
        'time_at_employment',

        'employer_address_line_1',
        'employer_address_line_2',
        'employer_apt_unit',
        'employer_city',
        'employer_state',
        'employer_zip_code',

        'gross_monthly_income',
        'second_monthly_income',
        'second_monthly_income_description',
    ];
}
