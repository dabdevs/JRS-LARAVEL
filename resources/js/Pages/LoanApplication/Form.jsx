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

export default function Form({ application, states }) {
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
        additional_information: ''
    });

    // const showDescription = data.state !== '' && data.make !== '' && data.model !== '' && data.year !== '' &&
    //     data.color !== '' && data.body_type !== '' && data.price !== '' && data.fuel_type !== '' &&
    //     data.doors !== '' && data.transmission !== '' && data.cylinders !== ''

    const handleUpdate = useCallback((e) => {
        e.preventDefault();
        setError('name', '')

        // if (data.make === '' || typeof data.make === 'undefined') {
        //     setError('name', 'Field is required')
        //     return
        // }

        // Send update request
        put(route('loan-applications.update', application.id))
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()

        // Send post request
        post(route('loan-applications.store'));
    })

    // // Options for year Select element
    // const startYear = 1980;
    // const currentYear = new Date().getFullYear();
    // const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index)

    // // application colors
    // const applicationColors = [
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
    //                                 post(route('loan-applications.images.delete', id), {
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
    console.log(data)

    return (
        <section className="px-4 mx-auto">
            <div className="p-6 rounded-md shadow-sm bg-white">
                <h1 className="text-2xl font-semibold mb-6 text-center">Get Approved</h1>
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                        <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>PERSONAL INFORMATION</p>
                        <div className='col-span-2'>
                            <label htmlFor="first_name" className="block font-medium text-sm text-gray-700">First Name*</label>
                            <input onChange={(e) => setData('first_name', e.target.value) } type="text" id="first_name" name="first_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="middle_name" className="block font-medium text-sm text-gray-700">Middle Name</label>
                            <input onChange={(e) => setData('middle_name', e.target.value)} type="text" id="middle_name" name="middle_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="last_name" className="block font-medium text-sm text-gray-700">Last Name*</label>
                            <input onChange={(e) => setData('last_name', e.target.value)} type="text" id="last_name" name="last_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="ssn_itin" className="block font-medium text-sm text-gray-700">SSN/ITIN</label>
                            <input onChange={(e) => setData('ssn_itin', e.target.value)} type="text" id="ssn_itin" name="ssn_itin" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="date_of_birth" className="block font-medium text-sm text-gray-700">Date of Birth</label>
                            <input onChange={(e) => setData('date_of_birth', e.target.value)} type="date" id="date_of_birth" name="date_of_birth" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="driver_license_number" className="block font-medium text-sm text-gray-700">Driver License Number</label>
                            <input onChange={(e) => setData('driver_license_number', e.target.value)} type="text" id="driver_license_number" name="driver_license_number" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="phone" className="block font-medium text-sm text-gray-700">Phone*</label>
                            <input onChange={(e) => setData('phone', e.target.value)} type="number" id="phone" name="phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="mobile_phone" className="block font-medium text-sm text-gray-700">Mobile Phone</label>
                            <input onChange={(e) => setData('mobile_phone', e.target.value)} type="number" id="mobile_phone" name="mobile_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <divb className='col-span-2'>
                            <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email*</label>
                            <input onChange={(e) => setData('email', e.target.value)} type="email" id="email" name="email" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </divb>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <p className='col-span-3 my-2 text-2xl text-gray-500 text-bold'>ADDRESS</p>
                        <div className="col-span-4">
                            <label htmlFor="address_line_1" className="block font-medium text-sm text-gray-700">Address Line 1*</label>
                            <input onChange={(e) => setData('address_line_1', e.target.value)} type="text" id="address_line_1" name="address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="address_line_2" className="block font-medium text-sm text-gray-700">Address Line 2</label>
                            <input onChange={(e) => setData('address_line_2', e.target.value)} type="text" id="address_line_2" name="address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="apt_unit" className="block font-medium text-sm text-gray-700">Apt/Unit*</label>
                            <input onChange={(e) => setData('apt_unit', e.target.value)} type="text" id="apt_unit" name="apt_unit" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="city" className="block font-medium text-sm text-gray-700">City*</label>
                            <input onChange={(e) => setData('city', e.target.value)} type="text" id="city" name="city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="county" className="block font-medium text-sm text-gray-700">County</label>
                            <input onChange={(e) => setData('county', e.target.value)} type="text" id="county" name="county" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="state" className="block font-medium text-sm text-gray-700">State*</label>
                            <input onChange={(e) => setData('state', e.target.value)} type="text" id="state" name="state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="zip_code" className="block font-medium text-sm text-gray-700">Zip Code*</label>
                            <input onChange={(e) => setData('zip_code', e.target.value)} type="text" id="zip_code" name="zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="time_at_current_address" className="block font-medium text-sm text-gray-700">Time at Current Address (months)</label>
                            <input onChange={(e) => setData('time_at_current_address', e.target.value)} type="number" id="time_at_current_address" name="time_at_current_address" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="current_residence_type" className="block font-medium text-sm text-gray-700">Current Residence Type*</label>
                            <select onChange={(e) => setData('current_residence_type', e.target.value)} id="current_residence_type" name="current_residence_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="Own">Own</option>
                                <option value="Rent">Rent</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="rent_mortgage_payment" className="block font-medium text-sm text-gray-700">Rent/Mortgage Payment*</label>
                            <input onChange={(e) => setData('rent_mortgage_payment', e.target.value)} type="number" id="rent_mortgage_payment" name="rent_mortgage_payment" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <p className='col-span-5 my-2 text-2xl text-gray-500 text-bold'>EMPLOYMENT</p>
                        <div>
                            <label htmlFor="employment_type" className="block font-medium text-sm text-gray-700">Employment Type*</label>
                            <select onChange={(e) => setData('employment_type', e.target.value)} id="employment_type" name="employment_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Retired">Retired</option>
                                <option value="Military">Military</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="employer_name" className="block font-medium text-sm text-gray-700">Employer Name*</label>
                            <input onChange={(e) => setData('employer_name', e.target.value)} type="text" id="employer_name" name="employer_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="occupation_rank" className="block font-medium text-sm text-gray-700">Occupation/Rank*</label>
                            <input type="text" id="occupation_rank" name="occupation_rank" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="work_phone" className="block font-medium text-sm text-gray-700">Work Phone*</label>
                            <input onChange={(e) => setData('work_phone', e.target.value)} type="text" id="work_phone" name="work_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="employment_length" className="block font-medium text-sm text-gray-700">Employment Length (months)*</label>
                            <input onChange={(e) => setData('employment_length', e.target.value)} type="number" id="employment_length" name="employment_length" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                        </div>
                        <div>
                            <label htmlFor="monthly_income" className="block font-medium text-sm text-gray-700">Monthly Income*</label>
                            <input onChange={(e) => setData('monthly_income', e.target.value)} type="number" id="monthly_income" name="monthly_income" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                        </div>
                        <div className='col-span-4'>
                            <label htmlFor="employer_address_line_1" className="block font-medium text-sm text-gray-700">Employer Address Line 1*</label>
                            <input onChange={(e) => setData('employer_address_line_1', e.target.value)} type="text" id="employer_address_line_1" name="employer_address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"/>
                        </div>
                        <div className='col-span-4'>
                            <label htmlFor="employer_address_line_2" className="block font-medium text-sm text-gray-700">Employer Address Line 2*</label>
                            <input onChange={(e) => setData('employer_address_line_2', e.target.value)} type="text" id="employer_address_line_2" name="employer_address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"/>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="city" className="block font-medium text-sm text-gray-700">Employer City*</label>
                            <input onChange={(e) => setData('city', e.target.value)} type="text" id="city" name="city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"/>
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="state" className="block font-medium text-sm text-gray-700">Employer State*</label>
                            <input onChange={(e) => setData('state', e.target.value)} type="text" id="state" name="state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"/>
                        </div>
                        <div>
                            <label htmlFor="zip_code" className="block font-medium text-sm text-gray-700">Employer Zip Code*</label>
                            <input onChange={(e) => setData('zip_code', e.target.value)} type="text" id="zip_code" name="zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"/>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="additional_information" className="block font-medium text-sm text-gray-700">Additional Information</label>
                        <textarea onChange={(e) => setData('additional_information', e.target.value)} id="additional_information" name="additional_information" rows="4" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"></textarea>
                    </div>

                    <div className="flex gap-2 justify-end">
                        {application ?
                            <Link href={route('loan-applications.show', application?.slug)} className='font-bold py-2 px-6 '>Cancel</Link>
                            : <Link href={route('loan-applications.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                        }
                        <button id='application-submit-btn' onClick={application ? handleUpdate : handleCreate} type='button' className='inline-flex gap-2 p-2 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <SaveIcon />
                            Save
                        </button>
                        <Link href={route('loan-applications.create')} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
                            <PlusIcon />
                            New
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
