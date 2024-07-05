
import GuestLayout from '@/Layouts/GuestLayout'
import { Head} from '@inertiajs/react';
import Filter from '@/Components/Filter';
import CarsList from '@/Components/CarsList';

export default function Index({ cars, manufacturers}) {
    return (
        <GuestLayout>

            <Head title="Car deals" />

            <div className="py-5 flex">
                <Filter manufacturers={manufacturers} />

                <CarsList cars={cars} />
            </div>

        </GuestLayout>
    );
}
