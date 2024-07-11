import { Link } from '@inertiajs/react'
import React from 'react'

export default function ClearFilters({data, admin}) {
    return window.location.search && (
        <div className='flex gap-2'>
            <Link href={`${admin ? '/dashboard/cars' : '/listing'}`} className='flex align-middle p-1 rounded-lg border-2 text-primary border-primary bg-white transition duration-300'>
                Clear filters
            </Link>
        </div>
    )
}
