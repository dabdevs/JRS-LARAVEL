import InputLabel from '@/Components/InputLabel';
import { Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EditICon from '@/Components/EditICon';
import useUtils from '@/Hooks/useUtils';
import { format } from 'date-fns';

export default function Show({ auth, application }) {
  const { formatPrice } = useUtils()

  function Content() {
    return (
      <section className="px-4 mx-auto">
        <div className="p-4 rounded-md shadow-sm bg-white text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="mb-2 w-full grid grid-cols-6 gap-4">
            <p className='col-span-6 mt-2 text-2xl border-b-2 py-2 text-gray-500 text-bold'>PERSONAL INFORMATION</p>
            <div className="mb-2">
              <InputLabel htmlFor="name" value="Name" />
              <p id="name" className='text-xl'>{application.first_name} {application.middle_name} {application.last_name}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="email" value="Email" />
              <p id="email" className='text-xl'>{application.email}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="ssn_itin" value="SSN/ITIN" />
              <p id="ssn_itin" className='text-xl'>{application.ssn_itin}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="date_of_birth" value="Date of Birth" />
              <p id="date_of_birth" className='text-xl'>{application.date_of_birth}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="driver_license_number" value="Driver's License #" />
              <p id="driver_license_number" className='text-xl'>{application.driver_license_number ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="phone" value="Phone" />
              <p id="phone" className='text-xl'>{application.phone}</p>
            </div>
          </div>

          <div className='mb-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 mt-2 text-2xl border-b-2 py-2 text-gray-500 text-bold'>ADDRESS</p>
            <div className="mb-2">
              <InputLabel htmlFor="address_line_1" value="Address Line 1" />
              <p id="address_line_1" className='text-xl'>{application.address_line_1}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="address_line_2" value="Address Line 2" />
              <p id="address_line_2" className='text-xl'>{application.address_line_2 ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="apt_unit" value="Apt Unit" />
              <p id="apt_unit" className='text-xl'>{application.apt_unit ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="city" value="City" />
              <p id="city" className='text-xl'>{application.city ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="county" value="County" />
              <p id="county" className='text-xl'>{application.county ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="state" value="State" />
              <p id="state" className='text-xl'>{application.state ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="zip_code" value="zip_code" />
              <p id="zip_code" className='text-xl'>{application.zip_code}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="time_at_current_address" value="Time At Current Address" />
              <p id="time_at_current_address" className='text-xl'>{application.time_at_current_address}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="current_residence_type" value="Current Residence Type" />
              <p id="current_residence_type" className='text-xl'>{application.current_residence_type}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="rent_mortgage_payment" value="Rent Mortgage Payment" />
              <p id="rent_mortgage_payment" className='text-xl'>{formatPrice(application.rent_mortgage_payment)}</p>
            </div>
          </div>

          <div className='mb-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 mt-2 text-2xl border-b-2 py-2 text-gray-500 text-bold'>EMPLOYMENT 1</p>
            <div className="mb-2">
              <InputLabel htmlFor="employment1_type" value="Employment Type" />
              <p id="employment1_type" className='text-xl'>{application.employment1_type}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer1_name" value="Employer" />
              <p id="employer1_name" className='text-xl'>{application.employer1_name}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="employment1_rank" value="Job Title" />
              <p id="employment1_rank" className='text-xl'>{application.employment1_rank}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer1_phone" value="Phone" />
              <p id="employer1_phone" className='text-xl'>{application.employer1_phone ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="time_at_employment1" value="Time At Employment" />
              <p id="time_at_employment1" className='text-xl'>{application.time_at_employment1 ?? 'N/A'}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="employer1_address" value="Address" />
              <p id="employer1_address" className='text-xl'>{application.employer1_address ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer1_city" value="City" />
              <p id="employer1_city" className='text-xl'>{application.employer1_city ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer1_state" value="State" />
              <p id="employer1_state" className='text-xl'>{application.employer1_state ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer1_zip_code" value="Zip Code" />
              <p id="employer1_zip_code" className='text-xl'>{application.employer1_zip_code ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="income1" value="Monthly Income" />
              <p id="income1" className='text-xl'>{formatPrice(application.income1) ?? 'N/A'}</p>
            </div>
          </div>

          <div className='mb-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 mt-2 text-2xl border-b-2 py-2 text-gray-500 text-bold'>EMPLOYMENT 2</p>
            <div className="mb-2">
              <InputLabel htmlFor="employment2_type" value="Employment Type" />
              <p id="employment2_type" className='text-xl'>{application.employment2_type ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer2_name" value="Employer" />
              <p id="employer2_name" className='text-xl'>{application.employer2_name ?? 'N/A'}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="employment2_rank" value="Job Title" />
              <p id="employment2_rank" className='text-xl'>{application.employment2_rank ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer2_phone" value="Phone" />
              <p id="employer2_phone" className='text-xl'>{application.employer2_phone ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="time_at_employment2" value="Time At Employment" />
              <p id="time_at_employment2" className='text-xl'>{application.time_at_employment2 ?? 'N/A'}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="employer2_address" value="Address" />
              <p id="employer2_address" className='text-xl'>{application.employer2_address ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer2_city" value="City" />
              <p id="employer2_city" className='text-xl'>{application.employer2_city ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer2_state" value="State" />
              <p id="employer2_state" className='text-xl'>{application.employer2_state ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="employer2_zip_code" value="Zip Code" />
              <p id="employer2_zip_code" className='text-xl'>{application.employer2_zip_code ?? 'N/A'}</p>
            </div>
            <div className="mb-2">
              <InputLabel htmlFor="income2" value="Monthly Income" />
              <p id="income2" className='text-xl'>{formatPrice(application.income2) ?? 'N/A'}</p>
            </div>
            <div className="mb-2 col-span-6">
              <InputLabel htmlFor="income2_description" value="Monthly Income Description" />
              <p id="income2_description" className='text-xl'>{application.income2_description ?? 'N/A'}</p>
            </div>
          </div>

          <div className='mb-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 mt-2 text-2xl border-b-2 py-2 text-gray-500 text-bold'>APPLICATION INFORMATION</p>
            <div className="mb-2">
              <InputLabel htmlFor="status" value="Status" />
              <p id="status" className={`text-xl ${application.status === 'Approved' && 'text-green-600'} ${application.status === 'Denied' && 'text-primary'} ${application.status === 'Pending' && 'text-orange-600'}`}>{application.status}</p>
            </div>
            {application.date_approved && <div className="mb-2">
              <InputLabel htmlFor="date_approved" value="Date Approved" />
              <p id="date_approved" className='text-xl'>{format(new Date(application.date_approved), 'MM-dd-yyyy')}</p>
            </div>}
            {application.date_denied && <div className="mb-2">
              <InputLabel htmlFor="date_denied" value="Date Denied" />
              <p id="date_denied" className='text-xl'>{format(new Date(application.date_denied), 'MM-dd-yyyy')}</p>
            </div>}
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="created_at" value="Date Created" />
              <p id="created_at" className='text-xl'>{format(new Date(application.created_at), 'MM-dd-yyyy HH:mm:ss')}</p>
            </div>
            <div className="mb-2 col-span-2">
              <InputLabel htmlFor="last_updated" value="Last Updated" />
              <p id="last_updated" className='text-xl'>{(application.updated_at && format(new Date(), 'MM-dd-yyyy HH:mm:ss')) ?? 'N/A'}</p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Link href={route('applications.index')} className='font-bold py-2 px-6 '>Go Back</Link>
            <Link href={route('applications.edit', application.id)} className='inline-flex gap-2 px-2 py-1 items-center bg-primary border border-transparent rounded-md font-bold text-xs text-white uppercase tracking-widest hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150'>
              <EditICon />
              Edit
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
