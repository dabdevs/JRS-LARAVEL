import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SaveIcon from '@/Components/SaveIcon';
import ImageUpload from '@/Components/ImageUpload';
import DeleteIcon from '@/Components/DeleteIcon';
import { confirmAlert } from 'react-confirm-alert';
import DangerButton from '@/Components/DangerButton';
import SuccessButton from '@/Components/SuccessButton';
import PlusIcon from '@/Components/PlusIcon';
import { Textarea } from '@headlessui/react';

export default function Form({ auth, application, states }) {
    const { data, setData, post, put, setError, errors } = useForm(application || {
        id: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        ssn_itin: '',
        date_of_birth: '',
        driver_license_number: '',
        phone: '',
        mobile_phone: '',
        email: '',
        address_line_1: '',
        address_line_2: '',
        apt_unit: '',
        city: '',
        county: '',
        state: '',
        zip_code: '',
        time_at_current_address: '',
        current_residence_type: '',
        rent_mortgage_payment: '',
        employment_type: '',
        employer_name: '',
        occupation_rank: '',
        work_phone: '',
        work_phone_extension: '',
        time_at_employment: '',
        employer_address_line_1: '',
        employer_address_line_2: '',
        employer_apt_unit: '',
        employer_city: '',
        employer_state: '',
        employer_zip_code: '',
        gross_monthly_income: '',
        other_monthly_income: '',
        other_monthly_income_description: ''
    });

    // const showDescription = data.state !== '' && data.make !== '' && data.model !== '' && data.year !== '' &&
    //     data.color !== '' && data.body_type !== '' && data.price !== '' && data.fuel_type !== '' &&
    //     data.doors !== '' && data.transmission !== '' && data.cylinders !== ''

    // const handleUpdate = useCallback((e) => {
    //     e.preventDefault();
    //     setError('name', '')

    //     // Validate name field
    //     if (data.make === '' || typeof data.make === 'undefined') {
    //         setError('name', 'Field is required')
    //         return
    //     }

    //     // Send update request
    //     put(route('cars.update', car.id))
    // });

    // const handleCreate = useCallback((e) => {
    //     e.preventDefault()

    //     // Send post request
    //     post(route('cars.store'));
    // })

    // // Options for year Select element
    // const startYear = 1980;
    // const currentYear = new Date().getFullYear();
    // const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index)

    // // Car colors
    // const carColors = [
    //     'White',
    //     'Black',
    //     'Silver',
    //     'Gray',
    //     'Red',
    //     'Blue',
    //     'Brown',
    //     'Yellow',
    //     'Green',
    //     'Beige',
    //     'Orange',
    //     'Pink'
    // ];

    // // Engine sizes
    // const engineSizes = [
    //     '1.0L',
    //     '1.2L',
    //     '1.4L',
    //     '1.6L',
    //     '1.8L',
    //     '2.0L',
    //     '2.2L',
    //     '2.4L',
    //     '2.5L',
    //     '2.7L',
    //     '3.0L',
    //     '3.3L',
    //     '3.5L',
    //     '3.6L',
    //     '3.8L',
    //     '4.0L',
    //     '4.2L',
    //     '4.4L',
    //     '4.6L',
    //     '5.0L'
    // ]

    // const deleteImage = (id) => {
    //     setData('deleteImgId', id)
    //     confirmAlert({
    //         customUI: ({ onClose }) => {
    //             return (
    //                 <div className='bg-white shadow-md'>
    //                     <div className="p-5">
    //                         <h1 className='text-2xl'>Are you sure?</h1>
    //                         <p>You want to delete this image?</p>
    //                     </div>
    //                     <div className="flex gap-2 p-2 bg-gray-50">
    //                         <DangerButton onClick={onClose}>No</DangerButton>
    //                         <SuccessButton
    //                             onClick={() => {
    //                                 post(route('cars.images.delete', id), {
    //                                     onSuccess: () => {
    //                                         onClose()
    //                                     },
    //                                     onError: (error) => {
    //                                         onClose()
    //                                     }
    //                                 })
    //                             }}
    //                         >
    //                             yes
    //                         </SuccessButton>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //     })
    // }

    function Form() {
        return (
            <section className="px-4 mx-auto w-full max-w-3xl">
                <div className="p-6 rounded-md shadow-sm bg-white">
                    <h1 className="text-2xl font-semibold mb-6 text-center">Get Approved</h1>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Personal Information */}
                            <div>
                                <label htmlFor="first_name" className="block font-medium text-sm text-gray-700">First Name</label>
                                <input type="text" id="first_name" name="first_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="middle_name" className="block font-medium text-sm text-gray-700">Middle Name</label>
                                <input type="text" id="middle_name" name="middle_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block font-medium text-sm text-gray-700">Last Name</label>
                                <input type="text" id="last_name" name="last_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="ssn_itin" className="block font-medium text-sm text-gray-700">SSN/ITIN</label>
                                <input type="text" id="ssn_itin" name="ssn_itin" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="date_of_birth" className="block font-medium text-sm text-gray-700">Date of Birth</label>
                                <input type="date" id="date_of_birth" name="date_of_birth" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="driver_license_number" className="block font-medium text-sm text-gray-700">Driver License Number</label>
                                <input type="text" id="driver_license_number" name="driver_license_number" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block font-medium text-sm text-gray-700">Phone</label>
                                <input type="text" id="phone" name="phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="mobile_phone" className="block font-medium text-sm text-gray-700">Mobile Phone</label>
                                <input type="text" id="mobile_phone" name="mobile_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Address Information */}
                            <div className="col-span-2">
                                <label htmlFor="address_line_1" className="block font-medium text-sm text-gray-700">Address Line 1</label>
                                <input type="text" id="address_line_1" name="address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="address_line_2" className="block font-medium text-sm text-gray-700">Address Line 2</label>
                                <input type="text" id="address_line_2" name="address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="apt_unit" className="block font-medium text-sm text-gray-700">Apt/Unit</label>
                                <input type="text" id="apt_unit" name="apt_unit" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="city" className="block font-medium text-sm text-gray-700">City</label>
                                <input type="text" id="city" name="city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="county" className="block font-medium text-sm text-gray-700">County</label>
                                <input type="text" id="county" name="county" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="state" className="block font-medium text-sm text-gray-700">State</label>
                                <input type="text" id="state" name="state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="zip_code" className="block font-medium text-sm text-gray-700">Zip Code</label>
                                <input type="text" id="zip_code" name="zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="time_at_current_address" className="block font-medium text-sm text-gray-700">Time at Current Address (months)</label>
                                <input type="number" id="time_at_current_address" name="time_at_current_address" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="current_residence_type" className="block font-medium text-sm text-gray-700">Current Residence Type</label>
                                <select id="current_residence_type" name="current_residence_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                    <option value="Own">Own</option>
                                    <option value="Rent">Rent</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="rent_mortgage_payment" className="block font-medium text-sm text-gray-700">Rent/Mortgage Payment</label>
                                <input type="number" id="rent_mortgage_payment" name="rent_mortgage_payment" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Employment Information */}
                            <div>
                                <label htmlFor="employment_type" className="block font-medium text-sm text-gray-700">Employment Type</label>
                                <select id="employment_type" name="employment_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                    <option value="Employed Full-time">Employed Full-time</option>
                                    <option value="Employed Part-time">Employed Part-time</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Military">Military</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="employer_name" className="block font-medium text-sm text-gray-700">Employer Name</label>
                                <input type="text" id="employer_name" name="employer_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="occupation_rank" className="block font-medium text-sm text-gray-700">Occupation/Rank</label>
                                <input type="text" id="occupation_rank" name="occupation_rank" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="work_phone" className="block font-medium text-sm text-gray-700">Work Phone</label>
                                <input type="text" id="work_phone" name="work_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="employment_length" className="block font-medium text-sm text-gray-700">Employment Length (months)</label>
                                <input type="number" id="employment_length" name="employment_length" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            </div>
                            <div>
                                <label htmlFor="monthly_income" className="block font-medium text-sm text-gray-700">Monthly Income</label>
                                <input type="number" id="monthly_income" name="monthly_income" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            </div>
                        </div>

                        <div className="mt-6">
                            {/* Additional Information */}
                            <label htmlFor="additional_information" className="block font-medium text-sm text-gray-700">Additional Information</label>
                            <textarea id="additional_information" name="additional_information" rows="4" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"></textarea>
                        </div>

                        <div className="mt-6 text-center">
                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Form />
        </AuthenticatedLayout>
    )
}
