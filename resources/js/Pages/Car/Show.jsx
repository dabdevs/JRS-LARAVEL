import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import SuccessButton from '@/Components/SuccessButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Select } from '@headlessui/react';

export default function Show({ auth, car }) {
    const { data, setData, post, put, setError, errors } = useForm(car || {
        id: 0,
        state: [],
        make: [],
        model: [],
        year: '',
        color: '',
        body_type: [],
        price: '',
        mileage: '',
        fuel_type: [],
        doors: [],
        transmission: [],
        cylinders: []
    });

    const handleUpdate = useCallback((e) => {
        e.preventDefault();
        setError('name', '')

        // Validate name field
        if (data.make === '' || typeof data.make === 'undefined') {
            setError('name', 'Field is required')
            return
        }

        // Send update request
        put(route('cars.update', data.id))

        setData('name', data.make)
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()
        setError('name', '')

        if (data.make === '' || typeof data.make === 'undefined') {
            setError('name', 'Field is required')
            return
        }

        // Send post request
        post(route('cars.store'), {
            onSuccess: (page) => {
                // Get new created ID
                const carId = page.props.flash.extraData.carId;

                // Set new data ID
                setData('id', carId)

            }
        });
    })

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }

    // Options for year Select element
    const startYear = 1980;
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - startYear + 1 }, (_, index) => currentYear - index)

    // Car colors
    const carColors = [
        'White',
        'Black',
        'Silver',
        'Gray',
        'Red',
        'Blue',
        'Brown',
        'Yellow',
        'Green',
        'Beige',
        'Orange',
        'Pink'
    ];

    // Engine sizes
    const engineSizes = [
        '1.0L',
        '1.2L',
        '1.4L',
        '1.6L',
        '1.8L',
        '2.0L',
        '2.2L',
        '2.4L',
        '2.5L',
        '2.7L',
        '3.0L',
        '3.3L',
        '3.5L',
        '3.6L',
        '3.8L',
        '4.0L',
        '4.2L',
        '4.4L',
        '4.6L',
        '5.0L'
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <section className="w-3/4 px-4 container mx-auto bg-white rounded-md shadow-sm">
                <div className="mt-3 pr-3 py-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h1 className="text-2xl font-semibold mb-4">{car.make} {car.model}</h1>
                    <div className="my-2 w-full grid grid-cols-6 gap-4">
                        <div className="my-2">
                            <InputLabel htmlFor="state" value="State" />
                            <p id="state" className='text-xl'>{car.state}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="make" value="Make" />
                            <p id="make" className='text-xl'>{car.make}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="model" value="Model" />
                            <p id="model" className='text-xl'>{car.model}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="year" value="Year" />
                            <p id="year" className='text-xl'>{car.year}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="color" value="Color" />
                            <p id="color" className='text-xl'>{car.color}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="body_type" value="Body Type" />
                            <p id="body_type" className='text-xl'>{car.body_type}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="doors" value="Doors" />
                            <p id="doors" className='text-xl'>{car.doors}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="mileage" value="Mileage" />
                            <p id="mileage" className='text-xl'>{car.mileage}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="transmission" value="Transmission" />
                            <p id="transmission" className='text-xl'>{car.transmission}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="fuel_type" value="Fuel Type" />
                            <p id="fuel_type" className='text-xl'>{car.fuel_type}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="engine_size" value="Engine Size" />
                            <p id="engine_size" className='text-xl'>{car.engine_size}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="cylinders" value="Cylinders" />
                            <p id="cylinders" className='text-xl'>{car.cylinders}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="status" value="Status" />
                            <p id="status" className='text-xl'>{car.status}</p>
                        </div>
                        {car.status === 'Published' && <div className="my-2 col-span-2">
                            <InputLabel htmlFor="date_published" value="Date Published" />
                            <p id="date_published" className='text-xl'>{car.date_published}</p>
                        </div>}
                        {car.status === 'Sold' && <div className="my-2 col-span-2">
                            <InputLabel htmlFor="date_sold" value="Date Sold" />
                            <p id="date_sold" className='text-xl'>{car.date_published}</p>
                        </div>}
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Link href={route('cars.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                        <Link href={route('cars.edit', car.slug)} className='inline-flex gap-2 px-2 py-1 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className='w-4 h-4 text-white'>
                                <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Edit
                        </Link>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
