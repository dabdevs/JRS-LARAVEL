<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarRequest extends FormRequest
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
            'state' => 'required|string',
            'make' => 'required|string',
            'model' => 'required|string',
            'year' => 'required|numeric|digits:4|min:1980|max:' . date('Y'),
            'color' => 'required|string',
            'body_type' => 'required|string',
            'doors' => 'required|integer',
            'transmission' => 'required|string',
            'mileage' => 'nullable|integer',
            'fuel_type' => 'required|string',
            'engine_size' => 'required|string',
            'cylinders' => 'required|integer',
            'status' => 'required|in:Published,Unpublished,Sold',
            'price' => 'required|decimal:2',
        ];

        if ($this->state === 'New') {
            $rules['mileage'] = 'nullable|integer';
        } else {
            $rules['mileage'] = 'required|integer';
        }

        return $rules;
    }
}
