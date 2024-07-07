import React, { useCallback, useState } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import SuccessButton from './SuccessButton';
import PlusIcon from './PlusIcon';
import { Select } from '@headlessui/react';

const Car = React.memo(({ car, manufacturers }) => {
    const [model, setModel] = useState('')
    const { data, setData, post, put, setError, errors } = useForm(car || {
        id: 0,
        state: [],
        make: [],
        model: [],
        body_type: [],
        minYear: '',
        maxYear: '',
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

    return (
        <div className="mt-3 pr-3 py-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Car</h3>
            <div className="mt-2 grid grid-cols-4 gap-2">
                <div>
                    <div>
                        <InputLabel htmlFor="make" value="Make" />
                        <Select value={model} onChange={setModel}>
                            <Select.Button>{'Select'}</Select.Button>
                            <Select.Options>
                                {Object.keys(manufacturers)?.map(model => console.log(model) && (
                                    <Select.Option key={model} value={model}>
                                        {model}
                                    </Select.Option>
                                ))}
                            </Select.Options>
                        </Select>

                        {/* <TextInput
                            id="make"
                            type="text"
                            name="make"
                            value={data.make}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('make', e.target.value)}
                            onKeyDown={handleKeyDown}
                        /> */}
                    </div>
                    <InputError message={errors.make} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Model" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Make" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Make" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Make" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Make" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
                <div>
                    <div>
                        <InputLabel htmlFor="model" value="Make" />
                        <TextInput
                            id="model"
                            type="text"
                            name="model"
                            value={data.model}
                            className="mt-1 border py-2 block w-full"
                            autoFocus
                            onChange={(e) => setData('model', e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <InputError message={errors.model} className="mt-2" />
                </div>
            </div>
            <div className='mt-2 w-full'>
                {
                    data.id ? <SuccessButton
                        onClick={handleUpdate}
                        className=''
                    >
                        Update
                    </SuccessButton> :
                        <SuccessButton
                            onClick={handleCreate}
                            className=''
                            disabled={data.make === ''}
                        >
                            <PlusIcon />
                            Create
                        </SuccessButton>
                }
            </div>
        </div>
    )
})

export default Car
