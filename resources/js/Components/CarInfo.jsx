import useUtils from "@/Hooks/useUtils"
import { Link } from "@inertiajs/react"

export default function CarInfo({ car }) {
    const { formatPrice } = useUtils()
    const whatsappMessage = `Hello! I'm interested in the ${car.year} ${car.make} ${car.model}. Can you provide more information ?`
    const phone = '+16316725509';

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
                <a target="_blank" href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`} className="align-middle flex gap-2 items-center bg-primary text-white font-bold mt-2 py-2 px-4 rounded-lg border-2 border-primary hover:bg-red-800 hover:border-red-800 transition duration-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#fff" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#fff" />
                    </svg>
                    Contact Us
                </a>
                <Link href={route('get_qualified', car.id)} className="align-middle flex gap-2 items-center bg-white text-primary font-bold mt-2 py-2 px-4 rounded-lg border-2 border-primary hover:border-white *:transition duration-300">
                    <svg fill="#bb2024" className="w-8 h-8" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
                        <path d="m8.266 2.549 2.893 2.893v10.69a.476.476 0 0 1-.475.474H1.316a.476.476 0 0 1-.475-.475V3.024a.476.476 0 0 1 .475-.475zM1.95 3.657v11.84h8.102v-9.29H8.058a.576.576 0 0 1-.574-.574V3.657zm3.573 3.478a1.033 1.033 0 0 1 .256.678 1.009 1.009 0 0 1-.506.872 1.602 1.602 0 0 1-.487.206V9.1a.396.396 0 1 1-.792 0v-.204a1.813 1.813 0 0 1-.31-.099 1.143 1.143 0 0 1-.44-.322.396.396 0 1 1 .598-.518.373.373 0 0 0 .136.105 1.016 1.016 0 0 0 .19.062 1.537 1.537 0 0 0 .208.025.918.918 0 0 0 .466-.128c.145-.094.145-.171.145-.208a.243.243 0 0 0-.06-.157.58.58 0 0 0-.153-.123.787.787 0 0 0-.19-.069.907.907 0 0 0-.19-.019 1.985 1.985 0 0 1-.329-.026 1.514 1.514 0 0 1-.426-.137 1.239 1.239 0 0 1-.406-.327 1.052 1.052 0 0 1-.242-.66 1.065 1.065 0 0 1 .53-.9 1.583 1.583 0 0 1 .473-.196V5a.396.396 0 0 1 .792 0v.21a1.856 1.856 0 0 1 .316.112 1.318 1.318 0 0 1 .386.265.396.396 0 1 1-.56.561.529.529 0 0 0-.15-.104 1.037 1.037 0 0 0-.197-.069l-.021-.004a1.015 1.015 0 0 0-.16-.028.901.901 0 0 0-.457.122.283.283 0 0 0-.16.232.272.272 0 0 0 .064.16.454.454 0 0 0 .146.118.736.736 0 0 0 .202.064 1.197 1.197 0 0 0 .2.016 1.695 1.695 0 0 1 .357.037 1.584 1.584 0 0 1 .391.141 1.372 1.372 0 0 1 .38.303zm3.391 3.436H3.091v1.108h5.822zm0 2.499H3.091v1.108h5.822zm0-4.997H6.501V9.18h2.412z" />
                    </svg>
                    Get Qualified
                </Link>
            </div>
        </div>
    )
}
