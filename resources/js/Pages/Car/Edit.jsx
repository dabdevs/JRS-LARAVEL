import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SaveIcon from '@/Components/SaveIcon';

export default function Edit({ auth, car, models }) {
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
        cylinders: [],
        status: ''
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
    console.log(data.make)

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <section className="px-4 container mx-auto">
                <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
                   <h1 className="text-2xl font-semibold mb-4">{car.make} {car.model}</h1>
                    <div className="my-2 w-full grid grid-cols-6 gap-4">
                        <div className="my-2">
                            <InputLabel htmlFor="state" value="State" className='text-center' />
                            <div className="flex justify-around gap-3" id='state'>
                                <div className="flex gap-2">
                                    <input
                                        value={'New'}
                                        onChange={(e) => setData('state', 'New')}
                                        name="state"
                                        type='radio'
                                        id='New'
                                        checked={data.state === 'New'}
                                        className="mt-3 rounded border border-gray-400 py-1"
                                    />
                                    <InputLabel className='py-2 text-black' htmlFor="New" value="New" />
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        value={'Used'}
                                        onChange={(e) => setData('state', 'Used')}
                                        name="state"
                                        type='radio'
                                        id='Used'
                                        checked={data.state === 'Used'}
                                        className="mt-3 rounded border border-gray-400 py-1"
                                    />
                                    <InputLabel className='py-2 text-black' htmlFor="Used" value="Used" />
                                </div>
                            </div>
                            <InputError message={errors.state} className="mt-2" />
                        </div>
                        <div className="my-2 col-span-2">
                            <InputLabel htmlFor="make" value="Make" />
                            <select
                                value={data.make}
                                onChange={(e) => setData('make', e.target.value)}
                                name="make"
                                id="make"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                {Object.keys(models)?.map(make => (
                                    <option value={make}>{make}</option>
                                ))}
                            </select>
                            <InputError message={errors.make} className="mt-2" />
                        </div>
                        {data.make && <div className="my-2 col-span-2">
                            <InputLabel htmlFor="model" value="Model" />
                            <select
                                value={data.model}
                                onChange={(e) => setData('model', e.target.value)}
                                name="model"
                                id="model"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                {models[data.make]?.map(model => (
                                    <option value={model}>{model}</option>
                                ))}
                            </select>
                            <InputError message={errors.model} className="mt-2" />
                        </div>}
                        <div className="my-2 w-full">
                            <InputLabel htmlFor="year" value="Year" />
                            <select
                                value={data.year}
                                onChange={(e) => setData('year', e.target.value)}
                                name="year"
                                id="year"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value={0}>Select</option>
                                {years.map(year => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.year} className="mt-2" />
                        </div>
                    </div>
                    <div className="my-2 w-full grid grid-cols-6 gap-4">
                        <div className="my-2 w-full">
                            <InputLabel htmlFor="color" value="Color" />
                            <select
                                value={data.color}
                                onChange={(e) => setData('color', e.target.value)}
                                name="color"
                                id="color"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value={""}>Select</option>
                                {carColors.map(color => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.color} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="body_type" value="Body Type" />
                            <select
                                value={data.body_type}
                                onChange={(e) => setData('body_type', e.target.value)}
                                name="body_type"
                                id="body_type"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Truck">Truck</option>
                                <option value="Coupe">Coupe</option>
                            </select>
                            <InputError message={errors.body_type} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="doors" value="Doors" />
                            <select
                                value={data.doors}
                                onChange={(e) => setData('doors', e.target.value)}
                                name="doors"
                                id="doors"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <InputError message={errors.doors} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="mileage" value="Mileage" />
                            <input
                                value={data.mileage}
                                onChange={(e) => setData('mileage', e.target.value)}
                                name="mileage"
                                id="mileage"
                                type='number'
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            />
                            <InputError message={errors.mileage} className="mt-2" />
                        </div>
                        <div className="my-2 col-span-2">
                            <InputLabel className='text-center' htmlFor="transmission" value="Transmission" />
                            <div className="flex justify-around gap-4" id='transmission'>
                                <div className="flex gap-2">
                                    <input
                                        value={'Automatic'}
                                        onChange={(e) => setData('transmission', 'Automatic')}
                                        name="transmission"
                                        type='radio'
                                        id='Automatic'
                                        checked={data.transmission === 'Automatic'}
                                        className="mt-3 rounded border border-gray-400 py-1"
                                    />
                                    <InputLabel className='py-2 text-black' htmlFor="Automatic" value="Automatic" />
                                </div>
                                <div className="flex gap-2">
                                    <input
                                        value={'Manual'}
                                        onChange={(e) => setData('transmission', 'Manual')}
                                        name="transmission"
                                        type='radio'
                                        id='Manual'
                                        checked={data.transmission === 'Manual'}
                                        className="mt-3 rounded border border-gray-400 py-1"
                                    />
                                    <InputLabel className='py-2 text-black' htmlFor="Manual" value="Manual" />
                                </div>
                            </div>
                            <InputError message={errors.transmission} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="fuel_type" value="Fuel Type" />
                            <select
                                value={data.fuel_type}
                                onChange={(e) => setData('fuel_type', e.target.value)}
                                name="fuel_type"
                                id="fuel_type"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                <option value="Gasoline">Gasoline</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electric">Electric</option>
                            </select>
                            <InputError message={errors.fuel_type} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="engine_size" value="Engine Size" />
                            <select
                                value={data.engine_size}
                                onChange={(e) => setData('engine_size', e.target.value)}
                                name="engine_size"
                                id="engine_size"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value={""}>Select</option>
                                {engineSizes.map(size => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.engine_size} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="cylinders" value="Cylinders" />
                            <select
                                value={data.cylinders}
                                onChange={(e) => setData('cylinders', e.target.value)}
                                name="cylinders"
                                id="cylinders"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                                <option value="12">12</option>
                            </select>
                            <InputError message={errors.cylinders} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="status" value="Status" />
                            <select
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                name="status"
                                id="status"
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            >
                                <option value="">Select</option>
                                <option value="Published">Published</option>
                                <option value="Unpublished">Unpublished</option>
                                <option value="Sold">Sold</option>
                            </select>
                            <InputError message={errors.status} className="mt-2" />
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="price" value="Price" />
                            <input
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                name="price"
                                id="price"
                                type='number'
                                className="w-full mt-1 rounded border border-gray-400 py-1"
                            />
                            <InputError message={errors.price} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Link href={route('cars.show', car.slug)} className='font-bold py-2 px-6 '>Cancel</Link>
                        <button onClick={handleUpdate} type='button' className='inline-flex gap-2 px-2 py-1 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <SaveIcon />
                            Save
                        </button>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}
