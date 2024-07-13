import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { Link, useForm } from '@inertiajs/react';
import SaveIcon from '@/Components/SaveIcon';
import ImageUpload from '@/Components/ImageUpload';
import DeleteIcon from '@/Components/DeleteIcon';
import { confirmAlert } from 'react-confirm-alert';
import DangerButton from '@/Components/DangerButton';
import SuccessButton from '@/Components/SuccessButton';
import PlusIcon from '@/Components/PlusIcon';
import { Textarea } from '@headlessui/react';

export default function Form({car, models}) {
    let initialState = {
        id: '',
        state: '',
        make: '',
        model: '',
        year: '',
        color: '',
        body_type: '',
        price: '',
        mileage: '',
        fuel_type: '',
        doors: '',
        transmission: '',
        cylinders: '',
        status: 'Unpublished',
        description: '',
        deleteImgId: ''
    }

    if (car) {
        initialState = car
        if (car.description === null) initialState.description = ''
    }
    
    const { data, setData, post, put, setError, errors } = useForm(initialState);

    const showDescription = data.state !== '' && data.make !== '' && data.model !== '' && data.year !== '' &&
        data.color !== '' && data.body_type !== '' && data.price !== '' && data.fuel_type !== '' &&
        data.doors !== '' && data.transmission !== '' && data.cylinders !== ''

    const handleUpdate = useCallback((e) => {
        e.preventDefault();
        setError('name', '')

        // Validate name field
        if (data.make === '' || typeof data.make === 'undefined') {
            setError('name', 'Field is required')
            return
        }

        // Send update request
        put(route('cars.update', car.id))
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()

        // Send post request
        post(route('cars.store'));
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
    ]

    const deleteImage = (id) => {
        setData('deleteImgId', id)
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='bg-white shadow-md'>
                        <div className="p-5">
                            <h1 className='text-2xl'>Are you sure?</h1>
                            <p>You want to delete this image?</p>
                        </div>
                        <div className="flex gap-2 p-2 bg-gray-50">
                            <DangerButton onClick={onClose}>No</DangerButton>
                            <SuccessButton
                                onClick={() => {
                                    post(route('cars.images.delete', id), {
                                        onSuccess: () => {
                                            onClose()
                                        },
                                        onError: (error) => {
                                            onClose()
                                        }
                                    })
                                }}
                            >
                                yes
                            </SuccessButton>
                        </div>
                    </div>
                );
            }
        })
    }

    return (
        <section className="px-4 mx-auto">
            <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h1 className="text-2xl font-semibold mb-4">{car ? `${car?.make} ${car?.model}` : 'New Car'}</h1>
                <div className="my-2 w-full grid grid-cols-6 gap-4">
                    <div className="my-2">
                        <InputLabel htmlFor="state" value="State" className='text-center' />
                        <div className="flex justify-around gap-3" id='state'>
                            <div className="flex gap-2">
                                <input
                                    value={'New'}
                                    onChange={() => setData('state', 'New')}
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
                                    onChange={() => setData('state', 'Used')}
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
                                <option key={make} value={make}>{make}</option>
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
                                <option key={model} value={model}>{model}</option>
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
                            <option value={''}>Select</option>
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
                    {data.state === 'Used' && <div className="my-2">
                        <InputLabel htmlFor="mileage" value="Mileage" />
                        <input
                            readOnly={data.state === 'New'}
                            value={data.mileage}
                            onChange={(e) => setData('mileage', e.target.value)}
                            name="mileage"
                            id="mileage"
                            type='number'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.mileage} className="mt-2" />
                    </div>}
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
                    {car && <div className="my-2">
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
                    </div>}
                    <div className="my-2">
                        <InputLabel htmlFor="price" value="Price" />
                        <input
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            name="price"
                            id="price"
                            type='number'
                            placeholder='ex: 4750.99'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.price} className="mt-2" />
                    </div>
                </div>
                {showDescription && <div className="my-2">
                    <InputLabel htmlFor="description" value="Description" />
                    <Textarea value={data.description} onChange={(e) => setData('description', e.target.value)} className="w-full mt-1 rounded border border-gray-400 py-1" rows={5} name='description' id='description' />
                    <InputError message={errors.description} className="mt-2" />
                </div>}

                {car && <div>
                    <h4 className='text-xl font-bold my-2'>Images (Up to 10) <span className="text-sm">Extensions: jpg, jpeg or png</span> </h4>

                    {car.images?.length > 0 && <div className='grid grid-cols-5 gap-2 mb-3'>
                        {car?.images?.map(img => (
                            <div className='flex gap-2' key={img.id}>
                                <img width={'150px'} src={`/storage/${img.url}`} alt={img.id} />
                                <button onClick={() => deleteImage(img.id)} className='bg-primary rounded-md p-2 h-[30px] my-auto'><DeleteIcon /></button>
                            </div>
                        ))}
                    </div>}

                    {car && car.images?.length < 10 && <ImageUpload model={'Car'} modelId={car.id} url={route('upload.images')} images={car.images} />}
                </div>}

                <div className="flex gap-2 justify-end">
                    {car ?
                        <Link href={route('cars.show', car?.slug)} className='font-bold py-2 px-6 '>Cancel</Link>
                        : <Link href={route('cars.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                    }
                    <button id='car-submit-btn' onClick={car ? handleUpdate : handleCreate} type='button' className='inline-flex gap-2 p-2 items-center bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                        <SaveIcon />
                        Save
                    </button>
                    <Link href={route('cars.create')} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
                        <PlusIcon />
                        New
                    </Link>
                </div>
            </div>
        </section>
    )
}
