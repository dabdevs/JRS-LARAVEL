import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';
import Services from '@/Components/Services';
import AboutUs from '@/Components/AboutUs';
import ContactUs from '@/Components/ContactUs';

export default function Index() {
    return (
        <GuestLayout>

            <Head title="Home" />

            <Hero />

            <Services />

            <AboutUs />

            <ContactUs />

        </GuestLayout>
    )
}
