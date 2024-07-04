import { useForm } from '@inertiajs/react';
import { useCallback } from 'react'
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import InputError from './InputError';
import PlusIcon from './PlusIcon';
import DeleteButton from './DeleteButton';

export default function Permissions({ role }) {
  const { data, setData, post, setError, errors } = useForm({
    name: '',
    permissions: role.permissions || [],
    toRemove: []
  });

  const handleCreate = useCallback((e) => {
    e.preventDefault()

    if (data.name === '') {
      setError('name', 'Field is required')
      return
    }

    // Send create request
    post(route('roles.permissions.add', role.id), {
      onSuccess: (page) => {
        const newPermission = page.props.flash.extraData.newPermission
        const permissions = data.permissions.push(newPermission)
        setData('permissions', permissions)
        setData('name', '')
      },
      onError: (errors) => {
        console.error(errors);
      },
    });
  })

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value
    setData('name', value)
    setError('name', '')

    if (value === '') {
      setError('name', 'Field is required')
      return
    }
  }

  const handleCheckboxClick = (e) => {
    if (e.target.checked) {
      // Add permission Id to be removed
      setData('toRemove', [...data.toRemove, e.target.value])
    } else {
      // Remove id from array of ids to be removed
      setData('toRemove', [...data.toRemove.filter(id => id !== e.target.value)])
    }
  }

  const handleRemove = (e) => {
    e.target.value

    if (confirm('Confirm action?')) {
      // Remove multiple permissions
      post(route('roles.permissions.remove', role.id), {
        onSuccess: (page) => {
          const updatedPermissions = data.permissions.filter(permission => !data.toRemove.includes(String(permission.id)))
          setData('permissions', updatedPermissions)
          setData('toRemove', [])
          const checkedInputs = document.querySelectorAll('.role')
          checkedInputs.forEach(input => {
            if (input.checked) input.parentNode.remove()
          })
        },
        onError: (errors) => {
          console.error(errors);
        },
      })
    }
  }

  return (
    <div className="mt-2 w-full">
      <InputLabel value="Permissions" />
      <div className='flex gap-2'>
        <TextInput
          type="text"
          className="mt-1 border py-2 block w-full"
          autoFocus
          value={data.name}
          onChange={handleChange}
        />
        <button
          type='button'
          onClick={handleCreate}
          className='inline-flex items-center px-2 gap-1 bg-white text-green-600 border border-green-600 rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-green-700 hover:text-white focus:bg-white-700 active:bg-white-900 focus:outline-none transition ease-in-out duration-150'
        >
          <PlusIcon />
          Add
        </button>
      </div>
      <InputError message={errors.name} className="mt-2" />
      <div id="permissions" className="mt-1 px-2 w-full h-60 overflow-y-scroll">
        {
          data.permissions?.map(permission => (
            <div className='flex gap-2 mb-2' key={permission.id}>
              <input id={`permision-${permission.id}`} type='checkbox' className='mt-1 role' value={permission.id} onClick={handleCheckboxClick} />
              <label role='button' htmlFor={permission.id}>{permission.name}</label>
            </div>
          ))
        }
        {data.toRemove.length > 0 && <DeleteButton onClick={handleRemove}>Delete</DeleteButton>}
      </div>
    </div>
  )
}
