import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Filter from '@/Components/Filter';
import Footer from '@/Components/Footer';
import CarsList from '@/Components/CarsList';

export default function Index({ cars, manufacturers }) {
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
