import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import SuccessButton from '@/Components/SuccessButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Select } from '@headlessui/react';
import EditICon from '@/Components/EditICon';

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
            <section className="px-4 container mx-auto">
                <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
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
                        <Link href={route('cars.edit', car.slug)} className='inline-flex gap-2 px-2 py-1 items-center bg-primary border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <EditICon />
                            Edit
                        </Link>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
