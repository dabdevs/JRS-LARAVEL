import React from 'react'

export default function Card() {
    return (
        <div className="bg-white p-3 rounded-lg shadow-md">
            <img
                src="img/default-car.jpg"
                alt="Car"
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="text-center">
                <h3 className="text-xl text-primary font-bold mb-2">2019 Toyota Camry</h3>
                <p className="text-gray-600 text-sm mb-2">$22,000</p>
                <p className="text-gray-600 text-sm mb-4">45,000 miles</p>
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
