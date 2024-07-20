import GuestLayout from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'

export default function Success() {
    return (
        <GuestLayout>
            <div className="bg-gray-100 p-2 md:p-6 text-gray-800 min-h-screen">
                <div className="bg-white p-6 md:w-1/3 md:mx-auto shadow-md rounded-md">
                    <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
                        <path
                            fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        />
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Application Submitted!</h3>
                        <p className="text-gray-600 my-2">Thank you for submitting your application.</p>
                        <p>We will review it and get back to you shortly.</p>
                        <div className="py-10 text-center">
                            <Link href={'/listing'} className="align-middle mx-auto w-28 text-center bg-primary text-white font-bold mt-2 py-2 px-4 rounded-lg border-2 border-primary hover:bg-red-800 hover:border-red-800 transition duration-300">
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
