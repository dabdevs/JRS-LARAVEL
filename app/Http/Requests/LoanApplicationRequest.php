<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
        $rules = [
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'ssn_itin' => 'required|string|max:20',
            'date_of_birth' => 'required|date',
            'driver_license_number' => 'nullable|string|max:50',
            'phone' => 'required|string|max:255',
            'address_line_1' => 'required|string|max:255',
            'address_line_2' => 'nullable|string|max:255',
            'apt_unit' => 'nullable|string|max:50',
            'city' => 'required|string|max:100',
            'county' => 'nullable|string|max:100',
            'state' => 'required|string|max:50',
            'zip_code' => 'required|string|max:50',
            'time_at_current_address_years' => 'required|string',
            'time_at_current_address_months' => 'nullable|string',
            'current_residence_type' => 'required|in:Own,Rent,Other',
            'rent_mortgage_payment' => 'required|numeric',
            'employment1_type' => 'required|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employment1_rank' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:150',
            'employer1_name' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:150',
            'employer1_phone' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:100',
            'time_at_employment1_years' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string',
            'time_at_employment1_months' => 'nullable|string',
            'employer1_address' => 'nullable|string|max:255',
            'employer1_city' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:150',
            'employer1_state' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:50',
            'employer1_zip_code' => 'exclude_if:employment1_type,Retired|exclude_if:employment1_type,Self-Employed|required|string|max:50',
            'income1_type' => 'required|string',
            'income1' => 'required|numeric',
            'employment2_type' => 'nullable|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employer2_name' => 'nullable|string|max:150',
            'employment2_rank' => 'nullable|string|max:150',
            'employer2_phone' => 'nullable|string|max:50',
            'time_at_employment2_years' => 'nullable|string',
            'time_at_employment2_months' => 'nullable|string',
            'employer2_address' => 'nullable|string|max:255',
            'employer2_city' => 'nullable|string|max:150',
            'employer2_state' => 'nullable|string|max:50',
            'employer2_zip_code' => 'nullable|string|max:50',
            'income2_type' => 'nullable|string',
            'income2' => 'nullable|numeric',
            'income2_description' => 'nullable|string|max:255',
            'status' => 'required|in:Pending,Approved,Denied',
            'date_approved' => 'nullable|date',
            'date_denied' => 'nullable|date',
        ];

        // Ensure a ssn is unique for a car application
        if (!$this->id) {
            $rules['ssn_itin'] = [
                'required',
                'string',
                'max:20',
                Rule::unique('loan_applications')->where(function ($query) {
                    return $query->where('car_id', request('car_id'));
                }),
            ];
        }

        return $rules;
    }

    public function attributes()
    {
        return [
            'first_name' => 'first name',
            'middle_name' => 'middle name',
            'last_name' => 'last name',
            'email' => 'Email Address',
            'ssn_itin' => 'SSN',
            'date_of_birth' => 'date of birth',
            'driver_license_number' => "driver's license #",
            'phone' => 'phone',
            'address_line_1' => 'address line 1',
            'address_line_2' => 'address line 2',
            'apt_unit' => 'apt unit',
            'city' => 'city',
            'county' => 'county',
            'state' => 'state',
            'zip_code' => 'zip code',
            'time_at_current_address_years' => 'time at current address',
            'time_at_current_address_months' => 'time at current address',
            'current_residence_type' => 'current residence type',
            'rent_mortgage_payment' => 'rent mortgage payment',
            'employment1_type' => 'employment type',
            'employment1_rank' => 'employment rank',
            'employer1_name' => "employer name",
            'employer1_phone' => "employer phone",
            'time_at_employment1_years' => 'time at employment',
            'time_at_employment1_months' => 'time at employment',
            'income1_type' => 'income type',
            'income1' => 'income',
            'employer1_address' => "employer address",
            'employer1_city' => "employer city",
            'employer1_state' => "employer state",
            'employer1_zip_code' => 'employer zip code',
            'employment2_type' => 'employment type',
            'employer2_name' => 'employer name',
            'employment2_rank' => 'employment rank',
            'employer2_phone' => 'employer phone',
            'time_at_employment2_years' => 'time at employment',
            'time_at_employment2_months' => 'time at employment',
            'income2_type' => 'income type',
            'income2' => 'income',
            'employer2_address' => 'employer address',
            'employer2_city' => 'employer city',
            'employer2_state' => 'employer state',
            'employer2_zip_code' => 'employer zip code',
            'income2_description' => 'income description',
            'status' => 'status',
            'car_id' => 'required|exists:cars,id'
        ];
    }
}
