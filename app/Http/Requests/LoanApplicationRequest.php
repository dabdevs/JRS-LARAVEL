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
            'time_at_current_address_months' => 'string',
            'current_residence_type' => 'required|in:Own,Rent,Other',
            'rent_mortgage_payment' => 'required|numeric',
            'employment1_type' => 'required|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employment1_rank' => 'required|string|max:150',
            'employer1_name' => 'required|string|max:150',
            'employer1_phone' => 'required|string|max:100',
            'time_at_employment1_years' => 'required|string',
            'time_at_employment1_months' => 'string',
            'income1_type' => 'required|string',
            'income1' => 'required|numeric',
            'employer1_address' => 'required|string|max:255',
            'employer1_city' => 'required|string|max:150',
            'employer1_state' => 'required|string|max:50',
            'employer1_zip_code' => 'required|string|max:50',
            'employment2_type' => 'nullable|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employer2_name' => 'nullable|string|max:150',
            'employment2_rank' => 'nullable|string|max:150',
            'employer2_phone' => 'nullable|string|max:50',
            'time_at_employment2_years' => 'required|string',
            'time_at_employment2_months' => 'string',
            'income2_type' => 'nullable|string',
            'income2' => 'nullable|numeric',
            'employer2_address' => 'nullable|string|max:255',
            'employer2_city' => 'nullable|string|max:150',
            'employer2_state' => 'nullable|string|max:50',
            'employer2_zip_code' => 'nullable|string|max:50',
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
            'first_name' => 'First Name',
            'middle_name' => 'Middle Name',
            'last_name' => 'Last Name',
            'email' => 'Email Address',
            'ssn_itin' => 'SSN',
            'date_of_birth' => 'Date of Birth',
            'driver_license_number' => "Driver's license #",
            'phone' => 'Phone',
            'address_line_1' => 'Address Line 1',
            'address_line_2' => 'Address Line 2',
            'apt_unit' => 'Apt Unit',
            'city' => 'City',
            'county' => 'County',
            'state' => 'State',
            'zip_code' => 'Zip Code',
            'time_at_current_address_years' => 'Time at current address',
            'time_at_current_address_months' => 'Time at current address',
            'current_residence_type' => 'Current residence type',
            'rent_mortgage_payment' => 'Rent mortgage payment',
            'employment1_type' => 'Employment type',
            'employment1_rank' => 'Employment rank',
            'employer1_name' => "Employer name",
            'employer1_phone' => "Employer phone",
            'time_at_employment1_years' => 'Time at employment',
            'time_at_employment1_months' => 'Time at employment',
            'income1_type' => 'Income type',
            'income1' => 'Income',
            'employer1_address' => "Employer address",
            'employer1_city' => "Employer city",
            'employer1_state' => "Employer state",
            'employer1_zip_code' => 'Employer zip code',
            'employment2_type' => 'Employment type',
            'employer2_name' => 'Employer name',
            'employment2_rank' => 'Employment rank',
            'employer2_phone' => 'Employer phone',
            'time_at_employment2_years' => 'Time at employment',
            'time_at_employment2_months' => 'Time at employment',
            'income2_type' => 'Income type',
            'income2' => 'Income',
            'employer2_address' => 'Employer address',
            'employer2_city' => 'Employer city',
            'employer2_state' => 'Employer state',
            'employer2_zip_code' => 'Employer zip code',
            'income2_description' => 'Income description',
            'status' => 'Status',
            'car_id' => 'required|exists:cars,id'
        ];
    }
}
