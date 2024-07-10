
import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react';
import Filter from '@/Components/Filter';
import CarsList from '@/Components/CarsList';

export default function Listing({ cars, manufacturers }) {
    console.log(cars)
    return (
        <GuestLayout>

            <Head title="Car deals" />

            <div className="py-5 flex min-h-screen">
                {cars.data.length > 0 && <Filter manufacturers={manufacturers} />}

                <CarsList cars={cars} />
            </div>

        </GuestLayout>
    );
}
