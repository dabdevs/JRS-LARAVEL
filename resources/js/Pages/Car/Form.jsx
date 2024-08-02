import React, { useCallback, useState } from 'react'
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
import useUtils from '@/Hooks/useUtils';

export default function Form({car, models}) {
    let initialState = {
        id: '',
        vin: '',
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
        seats: '',
        seat_rows: '',
        status: 'Unpublished',
        description: '',
        deleteImgId: ''
    }

    if (car) {
        initialState = car
        if (car.description === null) initialState.description = ''
    }

    const { data, setData, post, put, setError, errors } = useForm(initialState);
    const [apiData, setApiData] = useState(null)
    const { capitalize } = useUtils()

    const maxImages = 25

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

    const fuelTypes = [
        'Gasoline',
        'Diesel',
        'Electric'
    ]

    const bodyTypes = [
        'Sedan',
        'SUV',
        'Truck',
        'Coupe'
    ]

    // Searh vehicule by vin
    const searchByVin = (e) => {
        e.preventDefault()
        const vin = e.target.value
        if (vin === '') {
            setData(initialState)
            return
        }

        setData('vin', vin)
        let url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vin}?format=json`

        axios.get(url)
            .then(function ({ data }) {
                setApiData(data.Results[0])

                let { Make, Model, ModelYear, BodyClass, FuelTypePrimary, EngineCylinders, Seats, Doors, VIN, SeatRows } = data.Results[0]
                
                if (BodyClass.includes('SUV')) BodyClass = 'SUV'

                setData(prevData => ({
                    ...prevData,
                    make: capitalize(Make),
                    model: capitalize(Model),
                    year: ModelYear,
                    body_type: BodyClass,
                    fuel_type: FuelTypePrimary,
                    cylinders: EngineCylinders,
                    seats: Seats,
                    seat_rows: SeatRows,
                    doors: Doors,
                    vin: VIN
                }))

                if (!fuelTypes.includes(FuelTypePrimary)) {
                    fuelTypes.push(FuelTypePrimary)
                }

                if (!bodyTypes.includes(BodyClass)) {
                    bodyTypes.push(BodyClass)
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
        } else {
            setError(name, '')
        }

        setData(name, value)
    }
    
    return (
        <section className="px-4 mx-auto">
            <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h1 className="text-2xl font-semibold mb-4">{car ? `${car?.make} ${car?.model}` : 'New Car'}</h1>
                <div className="my-2 w-full grid grid-cols-6 gap-4">
                    <div className="my-2">
                        <InputLabel htmlFor="vin" value="Vin" />
                        <input
                            value={data.vin}
                            onChange={searchByVin}
                            name="vin"
                            id="vin"
                            type='text'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.vin} className="mt-2" />
                    </div>
                    <div className="my-2 col-span-1">
                        <InputLabel htmlFor="make" value="Make*" />
                        <select
                            required
                            value={data.make}
                            onChange={handleChange}
                            name="make"
                            id="make"
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        >
                            <option value="">Select</option>
                            {Object.keys(models)?.map(make => 
                                <option key={make} value={make}>{make}</option>
                            )}
                            {apiData && !(capitalize(apiData.Make) in models) && <option value={data.make} key={data.make}>{data.make}</option>}
                        </select>
                        <InputError message={errors.make} className="mt-2" />
                    </div>
                    {data.make && <div className="my-2 col-span-1">
                        <InputLabel htmlFor="model" value="Model*" />
                        <select
                            required
                            value={data.model}
                            onChange={handleChange}
                            name="model"
                            id="model"
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        >
                            <option value="">Select</option>
                            {models[data.make]?.map(model => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                            {apiData && !(models[data.make].includes(capitalize(apiData.Model))) && <option value={data.model} key={data.model}>{data.model}</option>}
                        </select>
                        <InputError message={errors.model} className="mt-2" />
                    </div>}
                    <div className="my-2 w-full">
                        <InputLabel htmlFor="year" value="Year*" />
                        <select
                            required
                            value={data.year}
                            onChange={handleChange}
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
                    <div className="my-2 w-full">
                        <InputLabel htmlFor="state" value="State*" />
                        <select required onChange={handleChange} className='w-full mt-1 rounded border border-gray-400 py-1' value={data.state} name="state" id="state">
                            <option value="">Select</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>
                        <InputError message={errors.state} className="mt-2" />
                    </div>
                </div>
                <div className="my-2 w-full grid grid-cols-6 gap-4">
                    <div className="my-2 w-full">
                        <InputLabel htmlFor="color" value="Color*" />
                        <select
                            required
                            value={data.color}
                            onChange={handleChange}
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
                        <InputLabel htmlFor="body_type" value="Body Type*" />
                        <select
                            required
                            value={data.body_type}
                            onChange={handleChange}
                            name="body_type"
                            id="body_type"
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        >
                            <option value="">Select</option>
                            {bodyTypes.map(bodyType => <option key={bodyType} value={bodyType}>{bodyType}</option>)}
                            {apiData && <option value={data.body_type}>{data.body_type}</option>}
                        </select>
                        <InputError message={errors.body_type} className="mt-2" />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="doors" value="Doors*" />
                        <select
                            required
                            value={data.doors}
                            onChange={handleChange}
                            name="doors"
                            id="doors"
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        >
                            <option value="">Select</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <InputError message={errors.doors} className="mt-2" />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="seats" value="Seats" />
                        <input
                            value={data.seats}
                            onChange={handleChange}
                            name="seats"
                            id="seats"
                            type='number'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.seats} className="mt-2" />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="seat_rows" value="Seat Rows" />
                        <input
                            value={data.seat_rows}
                            onChange={handleChange}
                            name="seat_rows"
                            id="seat_rows"
                            type='number'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.seat_rows} className="mt-2" />
                    </div>
                    {data.state === 'Used' && <div className="my-2">
                        <InputLabel htmlFor="mileage" value="Mileage" />
                        <input
                            value={data.mileage}
                            onChange={handleChange}
                            name="mileage"
                            id="mileage"
                            type='number'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.mileage} className="mt-2" />
                    </div>}
                    <div className="my-2 col-span-1">
                        <InputLabel className='text-center' htmlFor="transmission" value="Transmission" />
                        <select required onChange={handleChange} className='w-full mt-1 rounded border border-gray-400 py-1' value={data.transmission} name="transmission" id="transmission">
                            <option value="">Select</option>
                            <option value="Automatic">Automatic</option>
                            <option value="Manual">Manual</option>
                        </select>
                        <InputError message={errors.transmission} className="mt-2" />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="fuel_type" value="Fuel Type" />
                        <select
                            required
                            value={data.fuel_type}
                            onChange={handleChange}
                            name="fuel_type"
                            id="fuel_type"
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        >
                            <option value="">Select</option>
                            {fuelTypes.map(fuelType => <option key={fuelType} value={fuelType}>{fuelType}</option>)}
                            {apiData && <option value={data.fuel_type}>{data.fuel_type}</option>}
                        </select>
                        <InputError message={errors.fuel_type} className="mt-2" />
                    </div>
                    <div className="my-2">
                        <InputLabel htmlFor="engine_size" value="Engine Size" />
                        <select
                            required
                            value={data.engine_size}
                            onChange={handleChange}
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
                            required
                            value={data.cylinders}
                            onChange={handleChange}
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
                            required
                            value={data.status}
                            onChange={handleChange}
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
                            required
                            value={data.price}
                            onChange={handleChange}
                            name="price"
                            id="price"
                            type='number'
                            min="100"
                            placeholder='Ex.: 1999.99'
                            className="w-full mt-1 rounded border border-gray-400 py-1"
                        />
                        <InputError message={errors.price} className="mt-2" />
                    </div>
                </div>
                {showDescription && <div className="my-2">
                    <InputLabel htmlFor="description" value="Description" />
                    <Textarea value={data.description} onChange={handleChange} className="w-full mt-1 rounded border border-gray-400 py-1" rows={5} name='description' id='description' />
                    <InputError message={errors.description} className="mt-2" />
                </div>}

                {car && <div>
                    <h4 className='text-xl font-bold my-2'>Images (Up to 25) <span className="text-sm">Extensions: jpg, jpeg or png</span> </h4>

                    {car.images?.length > 0 && <div className='grid grid-cols-5 gap-2 mb-3'>
                        {car?.images?.map(img => (
                            <div className='flex gap-2' key={img.id}>
                                <img width={'150px'} src={`/storage/${img.url}`} alt={img.id} />
                                <button onClick={() => deleteImage(img.id)} className='bg-primary rounded-md p-2 h-[30px] my-auto'><DeleteIcon /></button>
                            </div>
                        ))}
                    </div>}

                    {car && car.images?.length < maxImages && <ImageUpload maxImages={maxImages} model={'Car'} modelId={car.id} url={route('upload.images')} images={car.images} />}
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
