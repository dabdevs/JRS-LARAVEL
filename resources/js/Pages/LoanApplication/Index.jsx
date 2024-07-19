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
import ViewIcon from '@/Components/ViewIcon';
import useUtils from '@/Hooks/useUtils';
import { format } from 'date-fns';

export default function Index({ auth, applications }) {
  const { setData, delete: destroy } = useForm({
    id: ''
  });

  const { formatPrice } = useUtils()

  const handleDelete = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='bg-white shadow-md'>
            <div className="p-5">
              <h1 className='text-2xl'>Are you sure?</h1>
              <p>You want to delete this application?</p>
            </div>
            <div className="flex gap-2 p-2 bg-gray-50">
              <DangerButton onClick={onClose}>No</DangerButton>
              <SuccessButton
                onClick={() => {
                  destroy(route('applications.destroy', id), {
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

  function Table({ sidebarExpanded }) {
    return (
      <section className="px-4 mx-auto">
        <div className="flex justify-between">
          <div className='w-1/3'>
            <SearchForm admin={true} />
          </div>
          <Link href={route('applications.create')} className='flex gap-2 bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-green-600 border-2 border-green-600 transition duration-300'>
            <PlusIcon />
            New
          </Link>
        </div>

        <div className="w-full">
          <div className="py-2 align-middle">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <div className="p-2 flex justify-between">
                <div className='flex gap-2'>
                  {applications.total > 0 && <p className='text-lg mt-1'> {applications.total} result{applications.total > 1 && 's'}</p>}
                  <ClearFilters url={'/dashboard/applications'} />
                </div>
                {applications.data.length > 0 && <Sort admin={true} />}
              </div>
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Email
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      SSN/ITIN
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      City
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Phone
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Monthly Income
                    </th>
                    {!sidebarExpanded && <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Employment Type
                    </th>}
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Date Created
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications?.data?.map(application => (
                    <tr key={application.id}>
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.first_name} {application.last_name}
                      </td>
                      <td role='button' onClick={() => window.open(`applications/${application.id}`, '_self')} className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.email}
                      </td>
                      <td role='button' onClick={() => window.open(`applications/${application.id}`, '_self')} className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.ssn_itin}
                      </td>
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.city}
                      </td>
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.phone}
                      </td>
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        <b>{formatPrice(application.income1)}</b>
                      </td>
                      {!sidebarExpanded && <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.employment_type}
                      </td>}
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        <button disabled className={`w-24 p-1 ${application.status === 'Approved' && 'bg-green-600'} ${application.status === 'Denied' && 'bg-primary'} ${application.status === 'Pending' && 'bg-orange-600'} rounded-md text-white`}>
                          {application.status}
                        </button>
                      </td>
                      <td className="p-2 text-sm text-gray-500 whitespace-nowrap">
                        {application.created_at ? format(new Date(application.created_at), 'MM-dd-yyyy HH:mm:ss') : 'N/A'}
                      </td>
                      {/* <td className="p-2 text-sm text-gray-500 whitespace-nowrap">{format(new Date(application.created_at.toIso8601String()), 'MMMM dd, yyyy')}</td>
                                                <td className="p-2 text-sm text-gray-500 whitespace-nowrap">{formatDistanceToNow(parseISO(application.updated_at.toIso8601String()))} ago</td> */}
                      <td className="p-2 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-3">
                          <Link href={route('applications.show', application.id)} className='inline-flex px-2 py-1 items-center bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
                            <ViewIcon />
                          </Link>
                          <DeleteButton onClick={() => handleDelete(application.id)} className='btn-sm' />
                        </div>
                      </td>
                    </tr>
                  ))}

                  {
                    applications?.data?.length === 0 && <tr className="p-8 mt-8 text-center font-bold text-2xl text-gray-600">
                      <td className='py-5' colSpan={13}>No data found.</td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          </div>

          {applications?.data?.length > 0 && <div className="py-2">
            <Pagination links={applications.links} />
          </div>}
        </div>
      </section>
    )
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Table />
    </AuthenticatedLayout>
  )
}

