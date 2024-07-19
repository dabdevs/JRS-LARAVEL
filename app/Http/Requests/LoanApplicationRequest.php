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
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'ssn_itin' => 'required|string|max:15',
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
            'time_at_current_address' => 'required|integer|min:1',
            'current_residence_type' => 'required|in:Own,Rent,Other',
            'rent_mortgage_payment' => 'required|numeric',
            'employment1_type' => 'required|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employment1_rank' => 'required|string|max:150',
            'employer1_name' => 'required|string|max:150',
            'employer1_phone' => 'required|string|max:100',
            'time_at_employment1' => 'required|integer|min:1',
            'income1_type' => 'required|string',
            'income1' => 'required|numeric|min:100',
            'employer1_address' => 'required|string|max:255',
            'employer1_city' => 'required|string|max:150',
            'employer1_state' => 'required|string|max:50',
            'employer1_zip_code' => 'required|string|max:50',
            'employment2_type' => 'nullable|in:Employed Full-time,Employed Part-time,Retired,Military,Self-Employed,Other',
            'employer2_name' => 'nullable|string|max:150',
            'employment2_rank' => 'nullable|string|max:150',
            'employer2_phone' => 'nullable|string|max:50',
            'time_at_employment2' => 'nullable|integer|min:1',
            'income2_type' => 'nullable|string',
            'income2' => 'nullable|numeric|min:100',
            'employer2_address' => 'nullable|string|max:255',
            'employer2_city' => 'nullable|string|max:150',
            'employer2_state' => 'nullable|string|max:50',
            'employer2_zip_code' => 'nullable|string|max:50',
            'income2_description' => 'nullable|string|max:255',
            'status' => 'required|in:Pending,Approved,Denied',
            'date_approved' => 'nullable|date',
            'date_denied' => 'nullable|date',
        ];
    }
}
