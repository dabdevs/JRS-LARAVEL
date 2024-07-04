<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PermissionRequest extends FormRequest
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
            'name' => 'sometimes|string|unique:permissions,name',
            'toRemove' => 'sometimes|array',
            'toRemove.*' => 'sometimes|numeric',
        ];

        if (empty($this->input('name'))) {
            $rules['name'] = 'nullable';
        }

        return $rules;
    }
}
