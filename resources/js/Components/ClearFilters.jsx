import { Link } from '@inertiajs/react'
import React from 'react'

export default function ClearFilters({data, admin}) {
    return (
        <div className='flex gap-2'>
            {data.total > 0 && <p className='text-lg mt-1'>{data.total} result{data.total > 1 && 's'}</p>}

            {window.location.search &&
                <Link href={`${admin ? '/dashboard/cars' : '/listing'}`} className='flex align-middle p-1 rounded-lg border-2 text-primary border-primary bg-white transition duration-300'>
                    Clear filters
                </Link>}
        </div>
    )
}
