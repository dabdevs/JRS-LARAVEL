import React from 'react'

export default function Filter() {
    return (
        <aside className="w-1/5 h-[1400px] bg-white p-4 rounded-lg shadow-md hidden md:block">
            <h2 className="text-lg font-bold mb-4">Filters</h2>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Make</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Toyota</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Honda</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Ford</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Model</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Corolla</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Civic</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> F-150</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Body Type</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Sedan</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> SUV</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Truck</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Year</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> 2021</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 2020</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 2019</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Price</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> $0 - $10,000</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> $10,001 - $20,000</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> $20,001 - $30,000</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Mileage</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> 0 - 10,000 miles</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 10,001 - 50,000 miles</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 50,001 - 100,000 miles</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Fuel Type</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Gasoline</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Diesel</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Electric</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Size</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Compact</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Mid-size</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Full-size</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Doors</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> 2</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 4</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 6</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Transmission</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> Automatic</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> Manual</label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold mb-2">Cylinders</h3>
                <div>
                    <label className="block"><input type="checkbox" className="mr-2" /> 4</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 6</label>
                    <label className="block"><input type="checkbox" className="mr-2" /> 8</label>
                </div>
            </div>

        </aside>
    )
}
