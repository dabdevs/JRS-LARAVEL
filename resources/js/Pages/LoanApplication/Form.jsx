import React, { useCallback } from 'react'
import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import SaveIcon from '@/Components/SaveIcon';
import PlusIcon from '@/Components/PlusIcon';
import usePermissions from '@/Components/hooks/usePermissions';
import Header from './ApplicationHeader';

export default function Form({ application, car, states, storeUrl }) {
    if (!car) throw new Error('No car selected for application')

    const { data, setData, post, put, setError, errors } = useForm(application || {
        car_id: car.id,
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        ssn_itin: '',
        date_of_birth: '',
        driver_license_number: '',
        phone: '',
        address_line_1: '',
        address_line_2: '',
        apt_unit: '',
        city: '',
        county: '',
        state: '',
        zip_code: '',
        time_at_current_address_years: '',
        time_at_current_address_months: '',
        current_residence_type: '',
        rent_mortgage_payment: '',
        employment1_type: '',
        employment1_rank: '',
        employer1_name: '',
        employer1_phone: '',
        time_at_employment1_years: '',
        time_at_employment1_months: '',
        income1_type: '',
        income1: '',
        employer1_address: '',
        employer1_city: '',
        employer1_state: '',
        employer1_zip_code: '',
        employment2_type: '',
        employer2_name: '',
        employment2_rank: '',
        employer2_phone: '',
        time_at_employment2_years: '',
        time_at_employment2_months: '',
        income2_type: '',
        income2: '',
        income2_description: '',
        employer2_address: '',
        employer2_city: '',
        employer2_state: '',
        employer2_zip_code: '',
        status: 'Pending',
        date_approved: '',
        date_denied: '',
    });

    const { can } = usePermissions()

    const personalInfoCheck = data.first_name !== '' && data.last_name !== '' && data.date_of_birth !== '' &&
        data.ssn_itin !== '' && data.phone !== '' && data.email !== ''

    const addressCheck = data.address_line_1 !== '' && data.city !== '' && data.state !== '' &&
        data.zip_code !== '' && data.time_at_current_address_years !== '' && data.current_residence_type !== '' && data.rent_mortgage_payment !== ''

    const employment1Check = data.employment1_type !== '' && data.employer1_rank !== '' && data.employer1_name !== '' &&
        data.employer1_phone !== '' && data.time_at_employment1_years !== '' && data.income1_type !== '' && data.income1 !== '' &&
        data.employer1_city !== '' && data.employer1_state !== '' && data.employer1_zip_code !== ''

    const today = new Date();
    const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const maxDate = minDate.toISOString().split('T')[0]

    const years = Array.from({ length: 65 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleUpdate = useCallback((e) => {
        e.preventDefault()

        put(route('applications.update', application.id))
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()

        post(storeUrl);
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const required = e.target.required
        const type = e.target.type
        setData(name, '')

        if (type === "number" && value === '') {
            e.target.value = ''
            return
        }

        if (required && value === '') {
            setError(name, `${name} is required`)
            return
        }

        if (type === "email" && !validateEmail(value)) {
            setError(name, 'The Email Address field is required.')
        } else {
            setError(name, '')
        }

        setData(name, value)
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <section className="px-4 mx-auto">
            <div className="p-6 rounded-md shadow-sm bg-white">
                <Header car={car} />
                <form>
                    <div className="grid grid-cols-6 gap-4">
                        <p className='col-span-6 my-2 text-xl lg:text-2xl text-gray-500 text-bold border-b-2 py-2'>PERSONAL INFORMATION</p>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="first_name" className="block font-medium text-sm text-gray-700">First Name*</label>
                            <input required value={data.first_name} onInput={handleChange} type="text" id="first_name" name="first_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.first_name} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="middle_name" className="block font-medium text-sm text-gray-700">Middle Name</label>
                            <input value={data.middle_name} onInput={handleChange} type="text" id="middle_name" name="middle_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.middle_name} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="last_name" className="block font-medium text-sm text-gray-700">Last Name*</label>
                            <input required value={data.last_name} onInput={handleChange} type="text" id="last_name" name="last_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.last_name} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="date_of_birth" className="block font-medium text-sm text-gray-700">Date of Birth*</label>
                            <input required value={data.date_of_birth} onInput={handleChange} max={maxDate} type="date" id="date_of_birth" name="date_of_birth" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.date_of_birth} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="phone" className="block font-medium text-sm text-gray-700">Phone*</label>
                            <input required value={data.phone} onInput={handleChange} type='number' id="phone" name="phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.phone} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email*</label>
                            <input required value={data.email} onInput={handleChange} type="email" id="email" name="email" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="ssn_itin" className="block font-medium text-sm text-gray-700">SSN/ITIN*</label>
                            <input required value={data.ssn_itin} onInput={handleChange} type="text" id="ssn_itin" name="ssn_itin" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.ssn_itin} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="driver_license_number" className="block font-medium text-sm text-gray-700">Driver License Number</label>
                            <input value={data.driver_license_number} onInput={handleChange} type="text" id="driver_license_number" name="driver_license_number" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.driver_license_number} className="mt-2" />
                        </div>
                    </div>

                    {personalInfoCheck && <div className="mt-6 grid grid-cols-6 gap-4">
                        <p className='col-span-6 my-2 text-xl lg:text-2xl text-gray-500 text-bold border-b-2 py-2'>ADDRESS</p>
                        <div className="col-span-6 sm:col-span-2 lg:col-span-3">
                            <label htmlFor="address_line_1" className="block font-medium text-sm text-gray-700">Address Line 1*</label>
                            <input required value={data.address_line_1} onInput={handleChange} type="text" id="address_line_1" name="address_line_1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.address_line_1} className="mt-2" />
                        </div>
                        <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                            <label htmlFor="address_line_2" className="block font-medium text-sm text-gray-700">Address Line 2</label>
                            <input value={data.address_line_2} onInput={(e) => setData('address_line_2', e.target.value)} type="text" id="address_line_2" name="address_line_2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.address_line_2} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="apt_unit" className="block font-medium text-sm text-gray-700">Apt/Unit</label>
                            <input value={data.apt_unit} onInput={handleChange} type="text" id="apt_unit" name="apt_unit" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.apt_unit} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="state" className="block font-medium text-sm text-gray-700">State*</label>
                            <select required value={data.state} onInput={handleChange} id="state" name="state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </select>
                            <InputError message={errors.state} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="city" className="block font-medium text-sm text-gray-700">City*</label>
                            <input value={data.city} onInput={handleChange} type="text" id="city" name="city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.city} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="county" className="block font-medium text-sm text-gray-700">County</label>
                            <input value={data.county} onInput={handleChange} type="text" id="county" name="county" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.county} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="zip_code" className="block font-medium text-sm text-gray-700">Zip Code*</label>
                            <input required value={data.zip_code} onInput={handleChange} type="number" id="zip_code" name="zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.zip_code} className="mt-2" />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2" id='time_at_current_address'>
                            <label htmlFor="time_at_current_address" className="block font-medium text-sm text-gray-700">Time at Current Address*</label>
                            <div className="flex gap-1">
                                <div className="w-1/2">
                                    <select required value={data.time_at_current_address_years} onInput={handleChange} id="time_at_current_address_years" name="time_at_current_address_years" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                        <option value="">Select Years</option>
                                        {years.map(year => <option>{`${year} year${year > 1 ? 's' : ''}`}</option>)}
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <select value={data.time_at_current_address_months} onInput={handleChange} id="time_at_current_address_months" name="time_at_current_address_months" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                        <option value="">Select Months</option>
                                        {months.map(month => <option>{`${month} month${month > 1 ? 's' : ''}`}</option>)}
                                    </select>
                                </div>
                            </div>
                            <InputError message={errors.time_at_current_address_years} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="current_residence_type" className="block font-medium text-sm text-gray-700">Current Residence Type*</label>
                            <select required value={data.current_residence_type} onInput={handleChange} id="current_residence_type" name="current_residence_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                <option value="Own">Own</option>
                                <option value="Rent">Rent</option>
                                <option value="Other">Other</option>
                            </select>
                            <InputError message={errors.current_residence_type} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="rent_mortgage_payment" className="block font-medium text-sm text-gray-700">Rent/Mortgage Payment*</label>
                            <input required value={data.rent_mortgage_payment} onInput={handleChange} type="number" min={100} id="rent_mortgage_payment" name="rent_mortgage_payment" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            <InputError message={errors.rent_mortgage_payment} className="mt-2" />
                        </div>
                    </div>}

                    {personalInfoCheck && addressCheck &&
                        <div className="mt-6 grid grid-cols-6 gap-4">
                            <p className='col-span-6 my-2 text-xl lg:text-2xl text-gray-500 text-bold border-b-2 py-2'>EMPLOYMENT 1</p>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employment1_type" className="block font-medium text-sm text-gray-700">Employment Type*</label>
                                <select required value={data.employment1_type} onInput={handleChange} id="employment1_type" name="employment1_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                    <option value="">Select</option>
                                    <option value="Employed Full-time">Employed Full-time</option>
                                    <option value="Employed Part-time">Employed Part-time</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Military">Military</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                    <option value="Other">Other</option>
                                </select>
                                <InputError message={errors.employment1_type} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-2'>
                                <label htmlFor="employer1_name" className="block font-medium text-sm text-gray-700">Employer Name*</label>
                                <input required value={data.employer1_name} onInput={handleChange} type="text" id="employer1_name" name="employer1_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employer1_name} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employment1_rank" className="block font-medium text-sm text-gray-700">Occupation/Rank*</label>
                                <input required value={data.employment1_rank} onInput={handleChange} type="text" id="employment1_rank" name="employment1_rank" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employment1_rank} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employer1_phone" className="block font-medium text-sm text-gray-700">Employer Phone*</label>
                                <input required value={data.employer1_phone} onInput={handleChange} type="number" id="employer1_phone" name="employer1_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employer1_phone} className="mt-2" />
                            </div>
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2" id='time_at_employment1'>
                                <label htmlFor="time_at_employment1" className="block font-medium text-sm text-gray-700">Time at Employment 1*</label>
                                <div className="flex gap-1">
                                    <div className="w-1/2">
                                        <select required value={data.time_at_employment1_years} onInput={handleChange} id="time_at_employment1_years" name="time_at_employment1_years" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                            <option value="">Select Years</option>
                                            {years.map(year => <option>{`${year} year${year > 1 ? 's' : ''}`}</option>)}
                                        </select>
                                    </div>
                                    <div className="w-1/2">
                                        <select value={data.time_at_employment1_months} onInput={handleChange} id="time_at_employment1_months" name="time_at_employment1_months" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                            <option value="">Select Months</option>
                                            {months.map(month => <option>{`${month} month${month > 1 ? 's' : ''}`}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <InputError message={errors.time_at_employment1_years} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="income1_type" className="block font-medium text-sm text-gray-700">Income Type*</label>
                                <select required value={data.income1_type} onInput={handleChange} id="income1_type" name="income1_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                    <option value="">Select</option>
                                    <option value="Comp Paystub w/YTD">Comp Paystub w/YTD</option>
                                    <option value="Printed Paystub - No YTD">Printed Paystub - No YTD</option>
                                    <option value="Self Emp - TurboPass">Self Emp - TurboPass</option>
                                    <option value="Self Emp - Bus Bank Stmt">Self Emp - Bus Bank Stmt</option>
                                    <option value="Self Emp - Pers Bank Stmt">Self Emp - Pers Bank Stmt</option>
                                    <option value="Job Letter">Job Letter</option>
                                    <option value="SSI - Buyer">SSI - Buyer</option>
                                </select>
                                <InputError message={errors.income1_type} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="income1" className="block font-medium text-sm text-gray-700">Monthly Income*</label>
                                <input required value={data.income1} onInput={handleChange} type="number" min={100} id="income1" name="income1" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                                <InputError message={errors.income1} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-2'>
                                <label htmlFor="employer1_address" className="block font-medium text-sm text-gray-700">Employer Address</label>
                                <input value={data.employer1_address} onInput={handleChange} type="text" id="employer1_address" name="employer1_address" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employer1_address} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employer1_state" className="block font-medium text-sm text-gray-700">Employer State*</label>
                                <select required value={data.employer1_state} onInput={handleChange} id="employer1_state" name="employer1_state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                    <option value="">Select</option>
                                    {states.map(state => <option key={state} value={state}>{state}</option>)}
                                </select>
                                <InputError message={errors.employer1_state} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employer1_city" className="block font-medium text-sm text-gray-700">Employer City*</label>
                                <input value={data.employer1_city} onInput={handleChange} type="text" id="employer1_city" name="employer1_city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employer1_city} className="mt-2" />
                            </div>
                            <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                                <label htmlFor="employer1_zip_code" className="block font-medium text-sm text-gray-700">Employer Zip Code*</label>
                                <input required value={data.employer1_zip_code} onInput={handleChange} type="number" id="employer1_zip_code" name="employer1_zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                                <InputError message={errors.employer1_zip_code} className="mt-2" />
                            </div>
                        </div>
                    }

                    {personalInfoCheck && addressCheck && employment1Check && <div className="mt-6 grid grid-cols-6 gap-4">
                        <p className='col-span-6 my-2 text-xl lg:text-2xl text-gray-500 text-bold border-b-2 py-2'>EMPLOYMENT 2</p>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employment2_type" className="block font-medium text-sm text-gray-700">Employment Type</label>
                            <select value={data.employment2_type} onInput={handleChange} id="employment2_type" name="employment2_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                <option value="Employed Full-time">Employed Full-time</option>
                                <option value="Employed Part-time">Employed Part-time</option>
                                <option value="Retired">Retired</option>
                                <option value="Military">Military</option>
                                <option value="Self-Employed">Self-Employed</option>
                                <option value="Other">Other</option>
                            </select>
                            <InputError message={errors.employment2_type} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-2'>
                            <label htmlFor="employer2_name" className="block font-medium text-sm text-gray-700">Employer Name</label>
                            <input value={data.employer2_name} onInput={handleChange} type="text" id="employer2_name" name="employer2_name" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer2_name} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employment2_rank" className="block font-medium text-sm text-gray-700">Occupation/Rank</label>
                            <input value={data.employment2_rank} onInput={handleChange} type="text" id="employment2_rank" name="employment2_rank" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employment2_rank} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employer2_phone" className="block font-medium text-sm text-gray-700">Employer Phone</label>
                            <input value={data.employer2_phone} onInput={handleChange} type="number" id="employer2_phone" name="employer2_phone" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer2_phone} className="mt-2" />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2" id='time_at_employment2'>
                            <label htmlFor="time_at_employment2" className="block font-medium text-sm text-gray-700">Time at Employment 2</label>
                            <div className="flex gap-1">
                                <div className="w-1/2">
                                    <select value={data.time_at_employment2_years} onInput={handleChange} id="time_at_employment2_years" name="time_at_employment2_years" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                        <option value="">Select Years</option>
                                        {years.map(year => <option>{`${year} year${year > 1 ? 's' : ''}`}</option>)}
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <select value={data.time_at_employment2_months} onInput={handleChange} id="time_at_employment2_months" name="time_at_employment2_months" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                        <option value="">Select Months</option>
                                        {months.map(month => <option>{`${month} month${month > 1 ? 's' : ''}`}</option>)}
                                    </select>
                                </div>
                            </div>
                            <InputError message={errors.time_at_employment2_years} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="income2_type" className="block font-medium text-sm text-gray-700">Income Type</label>
                            <select value={data.income2_type} onInput={handleChange} id="income2_type" name="income2_type" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                <option value="Comp Paystub w/YTD">Comp Paystub w/YTD</option>
                                <option value="Printed Paystub - No YTD">Printed Paystub - No YTD</option>
                                <option value="Self Emp - TurboPass">Self Emp - TurboPass</option>
                                <option value="Self Emp - Bus Bank Stmt">Self Emp - Bus Bank Stmt</option>
                                <option value="Self Emp - Pers Bank Stmt">Self Emp - Pers Bank Stmt</option>
                                <option value="Job Letter">Job Letter</option>
                                <option value="SSI - Buyer">SSI - Buyer</option>
                            </select>
                            <InputError message={errors.income2_type} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="income2" className="block font-medium text-sm text-gray-700">Monthly Income</label>
                            <input value={data.income2} onInput={handleChange} type="number" min={100} id="income2" name="income2" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" step="0.01" />
                            <InputError message={errors.income2} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-2'>
                            <label htmlFor="employer2_address" className="block font-medium text-sm text-gray-700">Employer Address</label>
                            <input value={data.employer2_address} onInput={handleChange} type="text" id="employer2_address" name="employer2_address" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer2_address} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employer2_state" className="block font-medium text-sm text-gray-700">Employer State</label>
                            <select required value={data.employer2_state} onInput={handleChange} id="employer2_state" name="employer2_state" className="w-full mt-1 rounded border border-gray-400 py-1 px-2">
                                <option value="">Select</option>
                                {states.map(state => <option key={state} value={state}>{state}</option>)}
                            </select>
                            <InputError message={errors.employer2_state} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employer2_city" className="block font-medium text-sm text-gray-700">Employer City</label>
                            <input value={data.employer2_city} onInput={handleChange} type="text" id="employer2_city" name="employer2_city" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer2_city} className="mt-2" />
                        </div>
                        <div className='col-span-6 sm:col-span-2 lg:col-span-1'>
                            <label htmlFor="employer2_zip_code" className="block font-medium text-sm text-gray-700">Employer Zip Code</label>
                            <input value={data.zip_code} onInput={handleChange} type="number" id="employer2_zip_code" name="employer2_zip_code" className="w-full mt-1 rounded border border-gray-400 py-1 px-2" />
                            <InputError message={errors.employer2_zip_code} className="mt-2" />
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="income2_description" className="block font-medium text-sm text-gray-700">Income 2 Description</label>
                            <textarea value={data.income2_description} onInput={handleChange} id="income2_description" name="income2_description" rows="4" className="w-full mt-1 rounded border border-gray-400 py-1 px-2"></textarea>
                            <InputError message={errors.income2_description} className="mt-2" />
                        </div>
                    </div>}

                    <div className="flex gap-1 lg:gap-2 justify-end my-2">
                        {application ?
                            <Link href={route('applications.show', application?.id)} className='font-bold py-2 px-6 '>Cancel</Link>
                            : <Link href={route().current().includes('get_qualified') ? route('listing.car', car.slug) : route('cars.show', car.slug)} className='font-bold py-2 px-6 '>Go Back</Link>
                        }

                        <button id='application-submit-btn' onClick={application ? handleUpdate : handleCreate} type='button' className='inline-flex gap-2 p-2 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <SaveIcon />
                            {route().current('get_qualified') ? 'Submit' : 'Save'}
                        </button>
                        {can('create applications') && !route().current().includes('get_qualified') && <Link href={route('applications.create', car.id)} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
                            <PlusIcon />
                            New
                        </Link>}
                    </div>
                </form>
            </div>
        </section>
    )
}
