import { Link } from '@inertiajs/react'
import React from 'react'

export default function ClearFilters({data, admin}) {
    return (
        <div className='flex gap-2'>
            {data.total > 0 && <p className='text-lg mt-1'>{data.total} result{data.total > 1 && 's'}</p>}

            {window.location.search &&
                <Link href={`${admin ? '/dashboard/cars' : '/listing'}`} className='flex p-1 rounded-lg border-2 border-gray-900 transition duration-300'>
                    <svg width="26px" height="26px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" /></svg>
                    <p className='font-bold'>Clear filters</p>
                </Link>}
        </div>
    )
}
