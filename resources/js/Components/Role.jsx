import React, { useCallback } from 'react'
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import SuccessButton from './SuccessButton';
import Permissions from './Permissions';
import PlusIcon from './PlusIcon';

const Role = React.memo(({ role }) => {
    const { data, setData, post, put, setError, errors } = useForm(role || {
        id: 0,
        name: ''
    });

    const handleUpdate = useCallback((e) => {
        e.preventDefault();
        setError('name', '')

        // Validate name field
        if (data.name === '' || typeof data.name === 'undefined') {
            setError('name', 'Field is required')
            return
        }

        // Send update request
        put(route('roles.update', data.id))

        setData('name', data.name)
    });

    const handleCreate = useCallback((e) => {
        e.preventDefault()
        setError('name', '')

        if (data.name === '' || typeof data.name === 'undefined') {
            setError('name', 'Field is required')
            return
        }

        // Send post request
        post(route('roles.store'), {
            onSuccess: (page) => {
                // Get new created ID
                const roleId = page.props.flash.extraData.roleId;

                // Set new data ID
                setData('id', roleId)

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
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Role</h3>
            <div className="mt-2 w-full">
                <InputLabel htmlFor="name" value="Name" />
                <div className="flex gap-2">
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 border py-2 block w-full"
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    {
                        data.id ? <SuccessButton
                            onClick={handleUpdate}
                            className='btn-sm'
                        >
                            Update
                        </SuccessButton> :
                            <SuccessButton
                                onClick={handleCreate}
                                className='btn-sm'
                                disabled={data.name === ''}
                            >
                                <PlusIcon />
                                Create
                            </SuccessButton>
                    }
                </div>

                <InputError message={errors.name} className="mt-2" />
            </div>
            {data.id && <Permissions role={data} />}
        </div>
    )
})

export default Role
