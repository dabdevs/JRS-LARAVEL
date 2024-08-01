import GuestLayout from '@/Layouts/GuestLayout'
import Form from './LoanApplication/Form'
import { Head } from '@inertiajs/react';
import RevealOnScroll from '@/Components/RevealOnScroll';

export default function GetQualified({ car, states }) {

    return (
        <GuestLayout>

            <Head title="Get Qualified" />

            <RevealOnScroll>
                <div className="py-5 container mx-auto min-h-screen transition ease-in-out delay-150 duration-300">
                    <Form car={car} states={states} storeUrl={route('store_application')} />
                </div>
            </RevealOnScroll>

        </GuestLayout>
    )
}
