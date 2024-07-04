import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Filter from '@/Components/Filter';
import Hero from '@/Components/Hero';
import Services from '@/Components/Services';
import AboutUs from '@/Components/AboutUs';
import ContactUs from '@/Components/ContactUs';

export default function Index({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    return (
        <GuestLayout>
            <Head title="Index" />

            <main className="bg-blue-500 w-full mx-auto">
                <Hero />

                <Services />

                <AboutUs />

                <ContactUs />
            </main>

        </GuestLayout>
    );
}
