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
                        {car.date_sold && <div className="my-2 col-span-2">
                            <InputLabel htmlFor="date_sold" value="Date Sold" />
                            <p id="date_sold" className='text-xl'>{format(new Date(car.date_sold), 'MM-dd-yyyy HH:mm:ss')}</p>
                        </div>}
                        {car.date_published && <div className="my-2 col-span-2">
                            <InputLabel htmlFor="date_published" value="Date Published" />
                            <p id="date_published" className='text-xl'>{format(new Date(car.date_published), 'MM-dd-yyyy HH:mm:ss')}</p>
                        </div>}
                        <div className="my-2">
                            <InputLabel htmlFor="price" value="Price" />
                            <p id="price" className='text-xl'>{formatPrice(car.price)}</p>
                        </div>
                        <div className="my-2 col-span-2">
                            <InputLabel htmlFor="created_at" value="Date Created" />
                            <p id="created_at" className='text-xl'>{format(new Date(car.created_at), 'MM-dd-yyyy HH:mm:ss')}</p>
                        </div>
                        <div className="my-2 col-span-2">
                            <InputLabel htmlFor="last_updated" value="Last Updated" />
                            <p id="last_updated" className='text-xl'>{(car.updated_at && format(new Date(), 'MM-dd-yyyy HH:mm:ss')) ?? 'N/A'}</p>
                        </div>
                        {car.description && <div className="my-2 col-span-6">
                            <InputLabel htmlFor="description" value="Description" />
                            <p id="description" className='text-xl'>{car.description}</p>
                        </div>}
                    </div>

                    {car.images.length > 0 && <div>
                        <h4 className='text-xl font-bold my-2'>Images</h4>

                        <div className='grid grid-cols-5 gap-2 mb-3'>
                            {car.images?.map(img => <img width={'200px'} src={`/storage/${img.url}`} alt={img.id} />)}
                        </div>
                    </div>}

                    <div className="flex gap-2 justify-end">
                        <Link href={route('cars.index')} className='font-bold py-2 px-6 '>Go Back</Link>
                        <Link href={route('cars.edit', car.slug)} className='inline-flex gap-2 px-2 py-1 items-center bg-gray-600 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <EditICon />
                            Edit
                        </Link>
                        {car.status === 'Published' && <Link href={route('applications.create', car.id)} className='inline-flex gap-2 px-2 py-1 items-center bg-green-600 border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <svg fill="#fff" className="w-6 h-6" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
                                <path d="m8.266 2.549 2.893 2.893v10.69a.476.476 0 0 1-.475.474H1.316a.476.476 0 0 1-.475-.475V3.024a.476.476 0 0 1 .475-.475zM1.95 3.657v11.84h8.102v-9.29H8.058a.576.576 0 0 1-.574-.574V3.657zm3.573 3.478a1.033 1.033 0 0 1 .256.678 1.009 1.009 0 0 1-.506.872 1.602 1.602 0 0 1-.487.206V9.1a.396.396 0 1 1-.792 0v-.204a1.813 1.813 0 0 1-.31-.099 1.143 1.143 0 0 1-.44-.322.396.396 0 1 1 .598-.518.373.373 0 0 0 .136.105 1.016 1.016 0 0 0 .19.062 1.537 1.537 0 0 0 .208.025.918.918 0 0 0 .466-.128c.145-.094.145-.171.145-.208a.243.243 0 0 0-.06-.157.58.58 0 0 0-.153-.123.787.787 0 0 0-.19-.069.907.907 0 0 0-.19-.019 1.985 1.985 0 0 1-.329-.026 1.514 1.514 0 0 1-.426-.137 1.239 1.239 0 0 1-.406-.327 1.052 1.052 0 0 1-.242-.66 1.065 1.065 0 0 1 .53-.9 1.583 1.583 0 0 1 .473-.196V5a.396.396 0 0 1 .792 0v.21a1.856 1.856 0 0 1 .316.112 1.318 1.318 0 0 1 .386.265.396.396 0 1 1-.56.561.529.529 0 0 0-.15-.104 1.037 1.037 0 0 0-.197-.069l-.021-.004a1.015 1.015 0 0 0-.16-.028.901.901 0 0 0-.457.122.283.283 0 0 0-.16.232.272.272 0 0 0 .064.16.454.454 0 0 0 .146.118.736.736 0 0 0 .202.064 1.197 1.197 0 0 0 .2.016 1.695 1.695 0 0 1 .357.037 1.584 1.584 0 0 1 .391.141 1.372 1.372 0 0 1 .38.303zm3.391 3.436H3.091v1.108h5.822zm0 2.499H3.091v1.108h5.822zm0-4.997H6.501V9.18h2.412z" />
                            </svg>
                            Create application
                        </Link>}
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
