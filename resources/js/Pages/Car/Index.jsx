import DeleteButton from '@/Components/DeleteButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SuccessButton from '@/Components/SuccessButton';
import { Link, useForm } from '@inertiajs/react';
import PlusIcon from '@/Components/PlusIcon';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DangerButton from '@/Components/DangerButton';
import Pagination from '@/Components/Pagination';
import SearchForm from '@/Components/SearchForm';
import ClearFilters from '@/Components/ClearFilters';
import Sort from '@/Components/Sort';
import EditICon from '@/Components/EditICon';

export default function Index({ auth, cars }) {
    const { data, setData, delete: destroy } = useForm({
        id: ''
    });

    const handleDelete = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='bg-white shadow-md'>
                        <div className="p-5">
                            <h1 className='text-2xl'>Are you sure?</h1>
                            <p>You want to delete this car?</p>
                        </div>
                        <div className="flex gap-2 p-2 bg-gray-50">
                            <DangerButton onClick={onClose}>No</DangerButton>
                            <SuccessButton
                                onClick={() => {
                                    destroy(route('cars.destroy', id), {
                                        onSuccess: () => {
                                            setData('id', '')
                                            onClose();
                                        }
                                    })
                                }}
                            >
                                yes
                            </SuccessButton>
                        </div>
                    </div>
                );
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <section className="w-full px-4 container mx-auto">
                <div className="flex justify-between">
                    <div className='w-1/3'>
                        <SearchForm admin={true} />
                    </div>
                    <Link href={route('cars.create')} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
                        <PlusIcon />
                        New
                    </Link>
                </div>

                <div className="flex flex-col pb-5">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <div className="p-2 flex justify-between">
                                    <ClearFilters admin={true} data={cars} />
                                    <Sort admin={true} />
                                </div>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"></th>

                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                State
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Make
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Model
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Body Type
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Year
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Price
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Mileage
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Fuel Type
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Doors
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Transmission
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Cylinders
                                            </th>

                                            <th scope="col" className="relative py-3.5 px-4">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {cars?.data?.map(car => (
                                            <tr key={car.id}>
                                                <td className="h-[100px] p-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                    <img className='w-[120px] h-full' src={`${car?.images.length > 0 ? '../' + car?.images[0]?.url : 'https://placehold.co/600x400'}`} alt={car?.images[0]?.url} />
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.state} {car.id}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.make}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.model}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.body_type}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.year}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.price}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.mileage}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.fuel_type}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.doors}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.transmission}
                                                </td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                                                    {car.cylinders}
                                                </td>
                                                {/* <td className="p-2 text-sm text-gray-500 whitespace-nowrap">{format(new Date(car.created_at.toIso8601String()), 'MMMM dd, yyyy')}</td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">{formatDistanceToNow(parseISO(car.updated_at.toIso8601String()))} ago</td> */}
                                                <td className="p-2 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-3">
                                                        <Link href={route('cars.show', car.slug)} className='inline-flex px-2 py-1 items-center bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                                                            <EditICon />
                                                        </Link>
                                                        <DeleteButton onClick={() => handleDelete(car.id)} className='btn-sm' />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                        {
                                            cars?.data?.length === 0 && <tr className="p-8 mt-8 text-center font-bold text-2xl text-gray-600">
                                                <td className='py-5' colSpan={13}>No data found.</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {cars?.data?.length > 0 && <div className="py-2">
                            <Pagination links={cars.links} />
                        </div>}
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    )
}

