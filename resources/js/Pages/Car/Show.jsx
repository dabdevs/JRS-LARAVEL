import InputLabel from '@/Components/InputLabel';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EditICon from '@/Components/EditICon';
import useUtils from '@/Hooks/useUtils';
import { format } from 'date-fns';

export default function Show({ auth, car }) {
    const { formatPrice } = useUtils()

    function Content() {
        return (
            <section className="px-4 mx-auto">
                <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h1 className="text-2xl font-semibold mb-4">{car.make} {car.model}</h1>
                    <div className="my-2 w-full grid grid-cols-6 gap-4">
                        <div className="my-2">
                            <InputLabel htmlFor="state" value="State" />
                            <p id="state" className='text-xl'>{car.state}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="make" value="Make" />
                            <p id="make" className='text-xl'>{car.make}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="model" value="Model" />
                            <p id="model" className='text-xl'>{car.model}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="year" value="Year" />
                            <p id="year" className='text-xl'>{car.year}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="color" value="Color" />
                            <p id="color" className='text-xl'>{car.color}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="body_type" value="Body Type" />
                            <p id="body_type" className='text-xl'>{car.body_type}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="doors" value="Doors" />
                            <p id="doors" className='text-xl'>{car.doors}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="mileage" value="Mileage" />
                            <p id="mileage" className='text-xl'>{car.mileage ?? 'N/A'}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="transmission" value="Transmission" />
                            <p id="transmission" className='text-xl'>{car.transmission}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="fuel_type" value="Fuel Type" />
                            <p id="fuel_type" className='text-xl'>{car.fuel_type}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="engine_size" value="Engine Size" />
                            <p id="engine_size" className='text-xl'>{car.engine_size}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="cylinders" value="Cylinders" />
                            <p id="cylinders" className='text-xl'>{car.cylinders}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="status" value="Status" />
                            <p id="status" className={`text-xl ${car.status === 'Published' && 'text-green-600'} ${car.status === 'Unpublished' && 'text-primary'} ${car.status === 'Sold' && 'text-orange-600'}`}>{car.status}</p>
                        </div>
                        {car.date_sold && <div className="my-2">
                            <InputLabel htmlFor="date_sold" value="Date Sold" />
                            <p id="date_sold" className='text-xl'>{format(new Date(car.date_sold), 'MM-dd-yyyy')}</p>
                        </div>}
                        {car.date_published && <div className="my-2">
                            <InputLabel htmlFor="date_published" value="Date Published" />
                            <p id="date_published" className='text-xl'>{format(new Date(car.date_published), 'MM-dd-yyyy')}</p>
                        </div>}
                        <div className="my-2">
                            <InputLabel htmlFor="price" value="Price" />
                            <p id="price" className='text-xl'>{formatPrice(car.price)}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="created_at" value="Date Created" />
                            <p id="created_at" className='text-xl'>{format(new Date(car.created_at), 'MM-dd-yyyy HH:mm:ss')}</p>
                        </div>
                        <div className="my-2">
                            <InputLabel htmlFor="last_updated" value="Last Updated" />
                            <p id="last_updated" className='text-xl'>{(car.updated_at && format(new Date(), 'MM-dd-yyyy HH:mm:ss')) ?? 'N/A'}</p>
                        </div>
                        {car.description && <div className="my-2 col-span-6">
                            <InputLabel htmlFor="description" value="Description" />
                            <p id="description" className='text-xl'>{car.description}</p>
                        </div>}
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Link href={route('cars.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                        <Link href={route('cars.edit', car.slug)} className='inline-flex gap-2 px-2 py-1 items-center bg-primary border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <EditICon />
                            Edit
                        </Link>
                        <Link href={route('applications.create', car.id)} className='inline-flex gap-2 px-2 py-1 items-center bg-gray-400 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            Create application
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Content />
        </AuthenticatedLayout>
    )
}
