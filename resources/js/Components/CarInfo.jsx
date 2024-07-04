export default function CarInfo({car}) {
    return (
        <div className="specs h-full w-full md:w-1/2 py-4 px-10">
            <h2 className="text-2xl font-bold mb-4">{`${car.year} ${car.make} ${car.model}`}</h2>
            <ul className="list-none mb-4">
                <li className="mb-2"><strong>Make:</strong> {car.make}</li>
                <li className="mb-2"><strong>Model:</strong> {car.model}</li>
                <li className="mb-2"><strong>Year:</strong> {car.year}</li>
                <li className="mb-2"><strong>Color:</strong> {car.color}</li>
                <li className="mb-2"><strong>Mileage:</strong> {car.mileage} miles</li>
                <li className="mb-2"><strong>Price:</strong> ${car.price}</li>
                <li className="mb-2"><strong>Transmission:</strong> {car.transmission}</li>
                <li className="mb-2"><strong>Fuel Type:</strong> {car.fuelType}</li>
                <li className="mb-2"><strong>Body Type:</strong> {car.bodyType}</li>
                <li className="mb-2"><strong>Engine Size:</strong> {car.engineSize}L</li>
                <li className="mb-2"><strong>Doors:</strong> {car.doors}</li>
                <li className="mb-2"><strong>Condition:</strong> {car.isUsed ? 'Used' : 'New'}</li>
            </ul>
            <button className="w-full mt-1 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:border hover:border-primary hover:text-primary transition duration-300">Contact Us</button>
        </div>
    )
}
