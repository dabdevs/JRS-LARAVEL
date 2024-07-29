import GuestLayout from '@/Layouts/GuestLayout'
import Form from './LoanApplication/Form'
import { Head } from '@inertiajs/react';

export default function GetQualified({ car, states }) {

    return (
        <GuestLayout>

            <Head title="Get Qualified" />

            <div className="py-5 container mx-auto min-h-screen">
                <Form car={car} states={states} storeUrl={route('store_application')}/>
            </div>

        </GuestLayout>
    )
}
