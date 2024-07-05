export default function Card({car}) {
    const url = car?.images[0]?.url

    return (
        <div role="button" onClick={() => window.location.href = `/cars/${car.slug}`} className="bg-white p-3 rounded-lg shadow-md">
            <img
                src={`/${url}`}
                alt={url}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
                <h3 className="text-xl text-primary font-bold mb-2">{`${car?.year} ${car?.make} ${car?.model}`}</h3>
                <p className="text-gray-600 text-sm mb-2">$ {car.price}</p>
                <p className="text-gray-600 text-sm mb-4 w-full">{car.mileage} miles</p>
                <a
                    href="#"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    View Details
                </a>
            </div>
        </div>
    )
}
