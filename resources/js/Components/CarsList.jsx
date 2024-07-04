import Card from './Card'
import { usePage } from '@inertiajs/react';
import Pagination from './Pagination';

export default function CarsList() {
    const { cars } = usePage().props;

    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {cars?.data?.map(car => <Card  key={car.id} car={car} /> )}
            </div>

            <Pagination />
        </section>
    )
}
