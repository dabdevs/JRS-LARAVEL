import useUtils from "@/Hooks/useUtils"
import { Link } from "@inertiajs/react"

export default function CarInfo({car}) {
    const {formatPrice} = useUtils()
    const whatsappMessage = `Hello! I'm interested in the ${car.year} ${car.make} ${car.model}. Can you provide more information ?`

    return (
        <div className="specs h-full w-full md:w-1/2 py-5 lg:py-1 lg:px-10">
            <h2 className="text-2xl font-bold mb-4">{`${car.year} ${car.make} ${car.model}`}</h2>
            <div className="grid md:grid-cols-2">
                <ul className="list-none mb-2">
                    <li className="mb-2"><strong>Condition:</strong> {car.state}</li>
                    <li className="mb-2"><strong>Make:</strong> {car.make}</li>
                    <li className="mb-2"><strong>Model:</strong> {car.model}</li>
                    <li className="mb-2"><strong>Year:</strong> {car.year}</li>
                    <li className="mb-2"><strong>Color:</strong> {car.color}</li>
                    <li className="mb-2"><strong>Mileage:</strong> {car.mileage} miles</li>
                </ul>
                <ul className="list-none mb-2">
                    <li className="mb-2"><strong>Transmission:</strong> {car.transmission}</li>
                    <li className="mb-2"><strong>Fuel Type:</strong> {car.fuel_type}</li>
                    <li className="mb-2"><strong>Body Type:</strong> {car.body_type}</li>
                    <li className="mb-2"><strong>Engine Size:</strong> {car.engine_size}</li>
                    <li className="mb-2"><strong>Cylinders:</strong> {car.cylinders}</li>
                    <li className="mb-2"><strong>Doors:</strong> {car.doors}</li>
                </ul>
            </div>
            
            {car.description && <div className="border p-3 mb-2 bg-gray-100">
                <strong>Description:</strong>
                <p className="mb-2">{car.description}</p>
            </div>}
            <p className="font-bold text-3xl lg:text-4xl text-primary lg:py-5 lg:mb-2">{formatPrice(car.price)}</p> 
            <div className="flex gap-2">
                <a target="_blank" href={`https://wa.me/${'+16316235427'}?text=${encodeURIComponent(whatsappMessage)}`} className="w-full lg:w-36 mr-auto align-middle flex gap-2 items-center bg-primary text-white font-bold mt-2 py-2 px-4 rounded-lg border-2 border-primary hover:bg-red-800 hover:border-red-800 transition duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#fff" />
                    </svg>
                    Contact Us
                </a>
                <Link href={route('loan-applications.index')} className="w-full lg:w-36 mr-auto align-middle flex gap-2 items-center bg-primary text-white font-bold mt-2 py-2 px-4 rounded-lg border-2 border-primary hover:bg-red-800 hover:border-red-800 transition duration-300">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#fff" />
                    </svg>
                    Contact Us
                </Link>
            </div>
        </div>
    )
}
