import GuestLayout from '@/Layouts/GuestLayout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Head } from '@inertiajs/react';
import Carousel from '@/Components/Carousel';
import CarInfo from '@/Components/CarInfo';
import SimilarCars from '@/Components/SimilarCars';

export default function DisplayCar({ car, similarCars }) {
    return (
        <GuestLayout >
            <Head title={car.slug} />

            <div className="bg-gray-100 text-gray-800 min-h-screen">

                <section className="flex-column lg:flex lg:flex-wrap p-6 lg:h-[500px]">

                    <Carousel images={car?.images} />

                    <CarInfo car={car} />
                </section>

                {similarCars.length > 0 && <SimilarCars cars={similarCars} />}

            </div>
        </GuestLayout>
    )
}
