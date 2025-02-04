import GuestLayout from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';
import Services from '@/Components/Services';
import AboutUs from '@/Components/AboutUs';
import ContactUs from '@/Components/ContactUs';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

export default function Index() {

    return (
        <GuestLayout>

            <Head title="Home" />

            <Hero />

            <Services />

            <AboutUs />

            <ContactUs />

            <ScrollToTopButton />

        </GuestLayout>
    )
}
