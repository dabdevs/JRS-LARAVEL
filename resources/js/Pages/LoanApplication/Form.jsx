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
import { format } from 'date-fns';
import { Textarea } from '@headlessui/react';

export default function Form({ application }) {
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
        date_approved: '',
        date_denied: '',
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

        second_occupation_rank: '',
        second_employer_address_line_1: '',
        second_employer_address_line_2: '',
        second_employer_apt_unit: '',
        second_employer_city: '',
        second_employer_state: '',
        second_employer_zip_code: '',
        second_monthly_income: '',
        second_monthly_income_description: ''
    });

    const personalInfoCheck = data.first_name !== '' && data.last_name !== '' && data.date_of_birth !== '' &&
        data.ssn_itin !== '' && data.phone !== '' && data.email !== ''

    const addressCheck = data.address_line_1 !== '' && data.city !== '' && data.state !== '' &&
        data.zip_code !== '' && data.time_at_current_address !== '' && data.current_residence_type !== '' && data.rent_mortgage_payment !== ''

    const today = new Date();
    const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const maxDate = minDate.toISOString().split('T')[0]

    const handleUpdate = useCallback((e) => {
        e.preventDefault()

        put(route('applications.update', application.id))
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()

        post(route('applications.store'));
    })

    console.log(application, data, errors)

    return (
        <section className="px-4 mx-auto">
            <div className="p-6 rounded-md shadow-sm bg-white">
                <h1 className="text-2xl font-semibold mb-6 text-center">Get Approved</h1>
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
                        <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>PERSONAL INFORMATION</p>
                        <div className='col-span-2'>
                            <label htmlFor="first_name" className="block font-medium text-sm text-gray-700">First Name*</label>
                            <input value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} type="text" id="first_name" name="first_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.first_name} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="middle_name" className="block font-medium text-sm text-gray-700">Middle Name</label>
                            <input value={data.middle_name} onChange={(e) => setData('middle_name', e.target.value)} type="text" id="middle_name" name="middle_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.middle_name} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="last_name" className="block font-medium text-sm text-gray-700">Last Name*</label>
                            <input value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} type="text" id="last_name" name="last_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="ssn_itin" className="block font-medium text-sm text-gray-700">SSN/ITIN*</label>
                            <input value={data.ssn_itin} onChange={(e) => setData('ssn_itin', e.target.value)} type="text" id="ssn_itin" name="ssn_itin" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.ssn_itin} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="date_of_birth" className="block font-medium text-sm text-gray-700">Date of Birth</label>
                            <input value={data.date_of_birth} onChange={(e) => setData('date_of_birth', e.target.value)} max={maxDate} type="date" id="date_of_birth" name="date_of_birth" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.date_of_birth} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="driver_license_number" className="block font-medium text-sm text-gray-700">Driver License Number</label>
                            <input value={data.driver_license_number} onChange={(e) => setData('driver_license_number', e.target.value)} type="text" id="driver_license_number" name="driver_license_number" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.driver_license_number} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="phone" className="block font-medium text-sm text-gray-700">Phone*</label>
                            <input value={data.phone} onChange={(e) => setData('phone', e.target.value)} type="number" id="phone" name="phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.phone} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="mobile_phone" className="block font-medium text-sm text-gray-700">Mobile Phone</label>
                            <input value={data.mobile_phone} onChange={(e) => setData('mobile_phone', e.target.value)} type="number" id="mobile_phone" name="mobile_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.mobile_phone} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email*</label>
                            <input value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" id="email" name="email" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                    </div>

                    {personalInfoCheck && <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <p className='col-span-3 my-2 text-2xl text-gray-500 text-bold'>ADDRESS</p>
                        <div className="col-span-4">
                            <label htmlFor="address_line_1" className="block font-medium text-sm text-gray-700">Address Line 1*</label>
                            <input value={data.address_line_1} onChange={(e) => setData('address_line_1', e.target.value)} type="text" id="address_line_1" name="address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.address_line_1} className="mt-2" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="address_line_2" className="block font-medium text-sm text-gray-700">Address Line 2</label>
                            <input value={data.address_line_2} onChange={(e) => setData('address_line_2', e.target.value)} type="text" id="address_line_2" name="address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.address_line_2} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="apt_unit" className="block font-medium text-sm text-gray-700">Apt/Unit</label>
                            <input value={data.apt_unit} onChange={(e) => setData('apt_unit', e.target.value)} type="text" id="apt_unit" name="apt_unit" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.apt_unit} className="mt-2" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="city" className="block font-medium text-sm text-gray-700">City*</label>
                            <input value={data.city} onChange={(e) => setData('city', e.target.value)} type="text" id="city" name="city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.city} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="county" className="block font-medium text-sm text-gray-700">County</label>
                            <input value={data.county} onChange={(e) => setData('county', e.target.value)} type="text" id="county" name="county" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.county} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="state" className="block font-medium text-sm text-gray-700">State*</label>
                            <input value={data.state} onChange={(e) => setData('state', e.target.value)} type="text" id="state" name="state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.state} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="zip_code" className="block font-medium text-sm text-gray-700">Zip Code*</label>
                            <input value={data.zip_code} onChange={(e) => setData('zip_code', e.target.value)} type="text" id="zip_code" name="zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.zip_code} className="mt-2" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="time_at_current_address" className="block font-medium text-sm text-gray-700">Time at Current Address (months)*</label>
                            <input value={data.time_at_current_address} onChange={(e) => setData('time_at_current_address', e.target.value)} type="number" id="time_at_current_address" name="time_at_current_address" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.time_at_current_address} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="current_residence_type" className="block font-medium text-sm text-gray-700">Current Residence Type*</label>
                            <select value={data.current_residence_type} onChange={(e) => setData('current_residence_type', e.target.value)} id="current_residence_type" name="current_residence_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                <option value="Own">Own</option>
                                <option value="Rent">Rent</option>
                                <option value="Other">Other</option>
                            </select>
                            <InputError message={errors.current_residence_type} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="rent_mortgage_payment" className="block font-medium text-sm text-gray-700">Rent/Mortgage Payment*</label>
                            <input value={data.rent_mortgage_payment} onChange={(e) => setData('rent_mortgage_payment', e.target.value)} type="number" min={100} id="rent_mortgage_payment" name="rent_mortgage_payment" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            <InputError message={errors.rent_mortgage_payment} className="mt-2" />
                        </div>
                    </div>}

                    {addressCheck && <><div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-4">
                        <p className='col-span-5 my-2 text-2xl text-gray-500 text-bold'>EMPLOYMENT</p>
                        <div>
                            <label htmlFor="employment_type" className="block font-medium text-sm text-gray-700">Employment Type*</label>
                            <select value={data.employment_type} onChange={(e) => setData('employment_type', e.target.value)} id="employment_type" name="employment_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                <option value="Employed Full-time">Employed Full-time</option>
                                <option value="Employed Part-time">Employed Part-time</option>
                                <option value="Retired">Retired</option>
                                <option value="Military">Military</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Other">Other</option>
                            </select>
                            <InputError message={errors.employment_type} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="employer_name" className="block font-medium text-sm text-gray-700">Employer Name*</label>
                            <input value={data.employer_name} onChange={(e) => setData('employer_name', e.target.value)} type="text" id="employer_name" name="employer_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_name} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="occupation_rank" className="block font-medium text-sm text-gray-700">Occupation/Rank*</label>
                            <input value={data.occupation_rank} onChange={(e) => setData('occupation_rank', e.target.value)} type="text" id="occupation_rank" name="occupation_rank" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.occupation_rank} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="work_phone" className="block font-medium text-sm text-gray-700">Work Phone*</label>
                            <input value={data.work_phone} onChange={(e) => setData('work_phone', e.target.value)} type="text" id="work_phone" name="work_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.work_phone} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="time_at_employment" className="block font-medium text-sm text-gray-700">Employment Length (months)*</label>
                            <input value={data.time_at_employment} onChange={(e) => setData('time_at_employment', e.target.value)} type="number" min={1} id="time_at_employment" name="time_at_employment" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.time_at_employment} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="gross_monthly_income" className="block font-medium text-sm text-gray-700">Monthly Income*</label>
                            <input value={data.gross_monthly_income} onChange={(e) => setData('gross_monthly_income', e.target.value)} type="number" min={1000} id="gross_monthly_income" name="gross_monthly_income" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            <InputError message={errors.gross_monthly_income} className="mt-2" />
                        </div>
                        <div className='col-span-4'>
                            <label htmlFor="employer_address_line_1" className="block font-medium text-sm text-gray-700">Employer Address Line 1*</label>
                            <input value={data.employer_address_line_1} onChange={(e) => setData('employer_address_line_1', e.target.value)} type="text" id="employer_address_line_1" name="employer_address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_address_line_1} className="mt-2" />
                        </div>
                        <div className='col-span-4'>
                            <label htmlFor="employer_address_line_2" className="block font-medium text-sm text-gray-700">Employer Address Line 2</label>
                            <input value={data.employer_address_line_2} onChange={(e) => setData('employer_address_line_2', e.target.value)} type="text" id="employer_address_line_2" name="employer_address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_address_line_2} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="employer_apt_unit" className="block font-medium text-sm text-gray-700">Employer Apt Unit</label>
                            <input value={data.employer_apt_unit} onChange={(e) => setData('employer_apt_unit', e.target.value)} type="text" id="employer_apt_unit" name="employer_apt_unit" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_apt_unit} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="employer_city" className="block font-medium text-sm text-gray-700">Employer City*</label>
                            <input value={data.employer_city} onChange={(e) => setData('employer_city', e.target.value)} type="text" id="employer_city" name="employer_city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_city} className="mt-2" />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="employer_state" className="block font-medium text-sm text-gray-700">Employer State*</label>
                            <input value={data.employer_state} onChange={(e) => setData('employer_state', e.target.value)} type="text" id="employer_state" name="employer_state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_state} className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="employer_zip_code" className="block font-medium text-sm text-gray-700">Employer Zip Code*</label>
                            <input value={data.zip_code} onChange={(e) => setData('employer_zip_code', e.target.value)} type="text" id="employer_zip_code" name="employer_zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer_zip_code} className="mt-2" />
                        </div>
                    </div>

                        <div className="mt-6">
                            <label htmlFor="second_monthly_income_description" className="block font-medium text-sm text-gray-700">Additional Information</label>
                            <textarea value={data.second_monthly_income_description} onChange={(e) => setData('second_monthly_income_description', e.target.value)} id="second_monthly_income_description" name="second_monthly_income_description" rows="4" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"></textarea>
                            <InputError message={errors.second_monthly_income_description} className="mt-2" />
                        </div>
                    </>}

                    <div className="flex gap-2 justify-end my-2">
                        {application ?
                            <Link href={route('applications.show', application?.id)} className='font-bold py-2 px-6 '>Cancel</Link>
                            : <Link href={route('applications.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                        }
                        <button id='application-submit-btn' onClick={application ? handleUpdate : handleCreate} type='button' className='inline-flex gap-2 p-2 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <SaveIcon />
                            Save
                        </button>
                        <Link href={route('applications.create')} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
                            <PlusIcon />
                            New
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}
