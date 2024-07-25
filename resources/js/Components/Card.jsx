import useUtils from "@/Hooks/useUtils"

export default function Card({car}) {
    const url = `/storage/${car?.images[0].url}`
    const {formatPrice} = useUtils()

    return (
        <div role="button" onClick={() => window.location.href = `/listing/${car.slug}`} className="bg-white p-3 rounded-lg shadow-md">
            <img
                src={url}
                alt={'car image'}
                className="w-full h-32 lg:h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
                <h3 className="text-xl text-primary font-bold mb-2">{`${car?.year} ${car?.make} ${car?.model}`}</h3>
                <p className="text-gray-600 text-lg font-bold mb-2">{formatPrice(car.price)}</p>
                <div className="flex gap-2 align-center justify-center">
                    <p className="text-gray-600 text-sm mb-4">{car.state}</p>
                    {car.state === 'Used' && <p className="text-gray-600 text-sm mb-4">{car.mileage} miles</p>}
                </div>
                <a
                    href="#"
                    className="inline-block bg-primary border-2 hover:bg-white hover:border-primary hover:text-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    View Details
                </a>
            </div>
        </div>
    )
}
