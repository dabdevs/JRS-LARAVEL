<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoanApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'required|string|max:150',
            'middle_name' => 'nullable|string|max:150',
            'last_name' => 'required|string|max:150',
            'ssn_itin' => 'required|string|max:50',
            'date_of_birth' => 'required|date|before_or_equal:' . now()->subYears(18)->format('Y-m-d'),
            'driver_license_number' => 'nullable|string|max:50',
            'phone' => 'required|string|max:50',
            'mobile_phone' => 'nullable|string|max:50',
            'email' => 'required|email|max:100',
            'address_line_1' => 'required|string|max:255',
            'address_line_2' => 'nullable|string|max:255',
            'apt_unit' => 'nullable|string|max:50',
            'city' => 'required|string|max:150',
            'county' => 'nullable|string|max:150',
            'state' => 'required|string|max:150',
            'zip_code' => 'required|string|max:50',
            'time_at_current_address' => 'required|integer|min:0',
            'current_residence_type' => 'required|in:Own,Rent,Other',
            'rent_mortgage_payment' => 'required|numeric|min:0',
            'employment_type' => 'required|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employer_name' => 'required|string|max:150',
            'occupation_rank' => 'required|string|max:100',
            'work_phone' => 'required|string|max:50',
            'time_at_employment' => 'required|integer|min:0',
            'employer_address_line_1' => 'required|string|max:255',
            'employer_address_line_2' => 'nullable|string|max:255',
            'employer_apt_unit' => 'nullable|string|max:50',
            'employer_city' => 'required|string|max:150',
            'employer_state' => 'required|string|max:150',
            'employer_zip_code' => 'required|string|max:50',
            'gross_monthly_income' => 'required|numeric|min:100',


            'second_occupation_rank' => 'required|string|max:100',
            'second_employer_name' => 'required|string|max:150',
            'second_work_phone' => 'required|string|max:150',
            'second_employer_address_line_1' => 'required|string|max:150',
            'second_employer_address_line_2' => 'required|string|max:150',
            'second_employer_apt_unit' => 'required|string|max:50',
            'second_employer_state' => 'required|string|max:100',
            'second_employer_zip_code' => 'required|string|max:50',

            'second_monthly_income' => 'nullable|numeric|min:100',
            'second_monthly_income_description' => 'nullable|string|max:255',
        ];
    }
}
