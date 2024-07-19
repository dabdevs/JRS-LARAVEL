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
          <h1 className="text-2xl font-semibold mb-4">{application.make} {application.model}</h1>
          <div className="my-2 w-full grid grid-cols-6 gap-4">
            <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>PERSONAL INFORMATION</p>
            <div className="my-2">
              <InputLabel htmlFor="name" value="Name" />
              <p id="name" className='text-xl'>{application.first_name} {application.middle_name} {application.last_name}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="email" value="Email" />
              <p id="email" className='text-xl'>{application.email}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="ssn_itin" value="SSN/ITIN" />
              <p id="ssn_itin" className='text-xl'>{application.ssn_itin}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="date_of_birth" value="Date of Birth" />
              <p id="date_of_birth" className='text-xl'>{application.date_of_birth}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="driver_license_number" value="Driver's License #" />
              <p id="driver_license_number" className='text-xl'>{application.driver_license_number ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="phone" value="Phone" />
              <p id="phone" className='text-xl'>{application.phone}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="mobile_phone" value="Mobile Phone" />
              <p id="mobile_phone" className='text-xl'>{application.mobile_phone ?? 'N/A'}</p>
            </div>
          </div>

          <div className='my-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>ADDRESS</p>
            <div className="my-2">
              <InputLabel htmlFor="address_line_1" value="Address Line 1" />
              <p id="address_line_1" className='text-xl'>{application.address_line_1}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="address_line_2" value="Address Line 2" />
              <p id="address_line_2" className='text-xl'>{application.address_line_2 ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="apt_unit" value="Apt Unit" />
              <p id="apt_unit" className='text-xl'>{application.apt_unit ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="city" value="City" />
              <p id="city" className='text-xl'>{application.city ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="county" value="County" />
              <p id="county" className='text-xl'>{application.county ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="state" value="State" />
              <p id="state" className='text-xl'>{application.state ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="zip_code" value="zip_code" />
              <p id="zip_code" className='text-xl'>{application.zip_code}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="time_at_current_address" value="Time At Current Address" />
              <p id="time_at_current_address" className='text-xl'>{application.time_at_current_address}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="current_residence_type" value="Current Residence Type" />
              <p id="current_residence_type" className='text-xl'>{application.current_residence_type}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="rent_mortgage_payment" value="Rent Mortgage Payment" />
              <p id="rent_mortgage_payment" className='text-xl'>{formatPrice(application.rent_mortgage_payment)}</p>
            </div>
          </div>

          <div className='my-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>EMPLOYMENT</p>
            <div className="my-2">
              <InputLabel htmlFor="employment_type" value="Employment Type" />
              <p id="employment_type" className='text-xl'>{application.employment_type}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="employer_name" value="Employer" />
              <p id="employer_name" className='text-xl'>{application.employer_name}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="occupation_rank" value="Occupation Rank" />
              <p id="occupation_rank" className='text-xl'>{application.occupation_rank}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="work_phone" value="Work Phone" />
              <p id="work_phone" className='text-xl'>{application.work_phone ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="time_at_employment" value="Time At Employment" />
              <p id="time_at_employment" className='text-xl'>{application.time_at_employment ?? 'N/A'}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="employer_address_line_1" value="Employer Address Line 1" />
              <p id="employer_address_line_1" className='text-xl'>{application.employer_address_line_1 ?? 'N/A'}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="employer_address_line_2" value="Employer Address Line 2" />
              <p id="employer_address_line_2" className='text-xl'>{application.employer_address_line_2 ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="employer_apt_unit" value="Apt Unit" />
              <p id="employer_apt_unit" className='text-xl'>{application.employer_apt_unit ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="employer_city" value="Employer City" />
              <p id="employer_city" className='text-xl'>{application.employer_city ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="employer_state" value="Employer State" />
              <p id="employer_state" className='text-xl'>{application.employer_state ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="employer_zip_code" value="Employer Zip Code" />
              <p id="employer_zip_code" className='text-xl'>{application.employer_zip_code ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="gross_monthly_income" value="Monthly Income" />
              <p id="gross_monthly_income" className='text-xl'>{formatPrice(application.gross_monthly_income) ?? 'N/A'}</p>
            </div>
          </div>

          <div className='my-2 w-full grid grid-cols-6 gap-4'>
            <p className='col-span-6 my-2 text-2xl text-gray-500 text-bold'>SECOND EMPLOYMENT</p>
            <div className="my-2">
              <InputLabel htmlFor="second_employer_name" value="Employer" />
              <p id="second_employer_name" className='text-xl'>{application.second_employer_name}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="second_occupation_rank" value="Occupation Rank" />
              <p id="second_occupation_rank" className='text-xl'>{application.second_occupation_rank}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_work_phone" value="Work Phone" />
              <p id="second_work_phone" className='text-xl'>{application.second_work_phone ?? 'N/A'}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="second_employer_address_line_1" value="Employer Address Line 1" />
              <p id="second_employer_address_line_1" className='text-xl'>{application.second_employer_address_line_1 ?? 'N/A'}</p>
            </div>
            <div className="my-2 col-span-2">
              <InputLabel htmlFor="second_employer_address_line_2" value="Employer Address Line 2" />
              <p id="second_employer_address_line_2" className='text-xl'>{application.second_employer_address_line_2 ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_employer_apt_unit" value="Apt Unit" />
              <p id="second_employer_apt_unit" className='text-xl'>{application.second_employer_apt_unit ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_employer_city" value="Employer City" />
              <p id="second_employer_city" className='text-xl'>{application.second_employer_city ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_employer_state" value="Employer State" />
              <p id="second_employer_state" className='text-xl'>{application.second_employer_state ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_employer_zip_code" value="Employer Zip Code" />
              <p id="second_employer_zip_code" className='text-xl'>{application.second_employer_zip_code ?? 'N/A'}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="second_monthly_income" value="Monthly Income" />
              <p id="second_monthly_income" className='text-xl'>{formatPrice(application.second_monthly_income) ?? 'N/A'}</p>
            </div>
          </div>

          <div className='my-2 w-full grid grid-cols-6 gap-4'>
            <div className="my-2">
              <InputLabel htmlFor="status" value="Status" />
              <p id="status" className={`text-xl ${application.status === 'Approved' && 'text-green-600'} ${application.status === 'Denied' && 'text-primary'} ${application.status === 'Pending' && 'text-orange-600'}`}>{application.status}</p>
            </div>
            {application.date_published && <div className="my-2">
              <InputLabel htmlFor="date_published" value="Date Published" />
              <p id="date_published" className='text-xl'>{format(new Date(application.date_published), 'MM-dd-yyyy')}</p>
            </div>}
            <div className="my-2">
              <InputLabel htmlFor="created_at" value="Date Created" />
              <p id="created_at" className='text-xl'>{format(new Date(application.created_at), 'MM-dd-yyyy HH:mm:ss')}</p>
            </div>
            <div className="my-2">
              <InputLabel htmlFor="last_updated" value="Last Updated" />
              <p id="last_updated" className='text-xl'>{(application.updated_at && format(new Date(), 'MM-dd-yyyy HH:mm:ss')) ?? 'N/A'}</p>
            </div>
            {application.description && <div className="my-2 col-span-6">
              <InputLabel htmlFor="description" value="Description" />
              <p id="description" className='text-xl'>{application.description}</p>
            </div>}
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
