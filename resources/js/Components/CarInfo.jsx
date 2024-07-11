export default function CarInfo({car}) {
    return (
        <div className="specs h-full w-full md:w-1/2 lg:px-10">
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
            <p className="text-5xl text-primary lg:py-5">$ {car.price}</p> 
            <button className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white border-2 hover:border-primary hover:text-primary transition duration-300">Contact Us</button>
        </div>
    )
}
