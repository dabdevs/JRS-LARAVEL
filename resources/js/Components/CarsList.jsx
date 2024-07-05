import Card from './Card'
import { Link, usePage } from '@inertiajs/react';
import Pagination from './Pagination';

export default function CarsList() {
    const { cars } = usePage().props;

    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="flex py-2 gap-2 mb-3">
                {cars.total > 0 && <p className='text-lg mt-1'>{cars.total} results</p>}
                {window.location.search && 
                    <Link href='/listing' className='flex p-1 rounded-lg border-2 border-gray-900 transition duration-300'>
                        <svg width="26px" height="26px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" /></svg>
                        <p className='font-bold'>Clear filters</p>
                    </Link>}
            </div>

            <div className="mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {cars?.data?.map(car => <Card  key={car.id} car={car} /> )}
            </div>

            {
                cars?.data?.length == 0 ? <p className="p-8 mt-8 text-center font-bold text-2xl text-gray-600">
                    No data found.
                </p>
                    : <Pagination links={cars.links} />
            }
        </section>
    )
}
