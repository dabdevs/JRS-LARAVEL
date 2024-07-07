import Card from './Card'
import { usePage } from '@inertiajs/react';
import Pagination from './Pagination';
import ClearFilters from './ClearFilters';
import Sort from './Sort';

export default function CarsList() {
    const { cars } = usePage().props

    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="flex justify-between py-2 gap-2 mb-3">

                <ClearFilters data={cars} />

                <Sort />
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
