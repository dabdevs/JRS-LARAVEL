import { useForm } from "@inertiajs/react"
import { useState } from "react"

export default function Filter({ manufacturers }) {
    const [models, setModels] = useState([])
    const { data, setData, get} = useForm({
        state: [],
        make: [],
        model: [],
        body_type: [],
        minYear: '',
        maxYear: '',
        price: '',
        mileage: '',
        fuel_type: [],
        doors: [],
        transmission: [],
        cylinders: [],
    })

    const currentYear = new Date().getFullYear()

    const handleSubmit = (e) => {
        e.preventDefault()

        get(`/listing`)
    }

    const handleCheckbox = (e) => {
        const value = e.target.value
        const name = e.target.name

        if (e.target.checked) {
            if (name === "make" && value in manufacturers) {
                setData('make', [...data.make, value])

                // set car models list
                setModels([...models, ...manufacturers[value]])
            }

            switch (name) {
                case "model":
                    setData('model', [...data.model, value])
                    break;
                case "body_type":
                    setData('body_type', [...data.body_type, value])
                    break;
                case "fuel_type":
                    setData('fuel_type', [...data.fuel_type, value])
                    break;
                case "doors":
                    setData('doors', [...data.doors, value])
                    break;
                case "transmission":
                    setData('transmission', [...data.transmission, value])
                    break;
                case "cylinders":
                    setData('cylinders', [...data.cylinders, value])
                    break;
                case "state":
                    setData('state', [...data.state, value])
                    break;

                default:
                    break;
            }

        } else {
            if (name === "make" && value in manufacturers) {
                // update car models list
                const updatedModels = models.filter(model => !manufacturers[value].includes(model))

                setModels(updatedModels)
                setData('make', data.make.filter(filter => filter !== value))
            }

            switch (name) {
                case "model":
                    setData('model', data.model.filter(filter => filter !== value))
                    break;
                case "body_type":
                    setData('body_type', data.body_type.filter(filter => filter !== value))
                    break;
                case "fuel_type":
                    setData('fuel_type', data.fuel_type.filter(filter => filter !== value))
                    break;
                case "doors":
                    setData('doors', data.doors.filter(filter => filter !== value))
                    break;
                case "transmission":
                    setData('transmission', data.transmission.filter(filter => filter !== value))
                    break;
                case "cylinders":
                    setData('cylinders', data.cylinders.filter(filter => filter !== value))
                    break;
                case "state":
                    setData('state', data.state.filter(filter => filter !== value))
                    break;

                default:
                    break;
            }
        }
    }
    
    return (
        <aside className="w-1/2 md:w-1/5 p-2 md:p-4 shadow-sm md:shadow-none absolute top-32 md:top-0 hidden md:block opacity-0 md:opacity-100 transition-opacity duration-500 ease-in-out md:relative bg-white md:bg-transparent rounded-lg" id="filter">
            <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">Filters</h2>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">State</h3>
                    <div className="pl-1">
                        <label className="block"><input onClick={handleCheckbox} name="state" value={'New'} type="checkbox" className="mr-2" /> New</label>
                        <label className="block"><input onClick={handleCheckbox} name="state" value={'Used'} type="checkbox" className="mr-2" /> Used</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Make</h3>
                    <div className="h-auto pl-1 overflow-y-scroll">
                        {
                            Object.keys(manufacturers)?.map((make) => (
                                <label className="block" key={make}>
                                    <input onClick={handleCheckbox} name="make" value={make} type="checkbox" className="mr-2" />
                                    {make}
                                </label>
                            ))
                        }
                    </div>
                </div>

                {models.length > 0 && <div className="mb-4">
                    <h3 className="font-semibold mb-2">Model</h3>
                    <div className="h-auto pl-1 overflow-y-scroll">
                        {
                            models?.map(model => (
                                <label key={model} className="block">
                                    <input onClick={handleCheckbox} name="model" value={model} type="checkbox" className="mr-2" />
                                    {model}
                                </label>
                            ))
                        }
                    </div>
                </div>
                }

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Body Type</h3>
                    <div>
                        <label className="block"><input onClick={handleCheckbox} name="body_type" value={"Sedan"} type="checkbox" className="mr-2" /> Sedan</label>
                        <label className="block"><input onClick={handleCheckbox} name="body_type" value={"SUV"} type="checkbox" className="mr-2" /> SUV</label>
                        <label className="block"><input onClick={handleCheckbox} name="body_type" value={"Truck"} type="checkbox" className="mr-2" /> Truck</label>
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <h3 className="font-semibold mb-2">Year</h3>
                    <div className="mb-2">
                        <label className="block">From</label>
                        <input onChange={(e) => setData('minYear', e.target.value)} value={data.minYear} min={"1980"} max={currentYear} type="number" placeholder={`min. 1980`} className="border rounded-lg p-1 w-full" />
                    </div>
                    <div className="mt-2">
                        <label className="block">To</label>
                        <input onChange={(e) => setData('maxYear', e.target.value)} value={data.maxYear} min={"1980"} max={currentYear} type="number" placeholder={`max. ${currentYear}`} className="border rounded-lg p-1 w-full" />
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Price</h3>
                    <div>
                        <label className="block"><input onClick={(e) => setData('price', e.target.value)} type="radio" name="price" value={'5000-10000'} className="mr-2" /> $ 5000 - $ 10,000</label>
                        <label className="block"><input onClick={(e) => setData('price', e.target.value)} type="radio" name="price" value={'10001-20000'} className="mr-2" /> $ 10,001 - $ 20,000</label>
                        <label className="block"><input onClick={(e) => setData('price', e.target.value)} type="radio" name="price" value={'20001-30000'} className="mr-2" /> $ 20,001 - $ 30,000</label>
                        <label className="block"><input onClick={(e) => setData('price', e.target.value)} type="radio" name="price" value={'30001-50000'} className="mr-2" /> $ 30,001 - $ 50,000</label>
                        <label className="block"><input onClick={(e) => setData('price', e.target.value)} type="radio" name="price" value={'50000-50000000000'} className="mr-2" /> Over $ 50,000</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Mileage</h3>
                    <div>
                        <label className="block"><input onClick={(e) => setData('mileage', e.target.value)} type="radio" name="mileage" value={'0-10000'} className="mr-2" /> 0 - 10,000 miles</label>
                        <label className="block"><input onClick={(e) => setData('mileage', e.target.value)} type="radio" name="mileage" value={'10001-50000'} className="mr-2" /> 10,001 - 50,000 miles</label>
                        <label className="block"><input onClick={(e) => setData('mileage', e.target.value)} type="radio" name="mileage" value={'50001-100000'} className="mr-2" /> 50,001 - 100,000 miles</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Fuel Type</h3>
                    <div>
                        <label className="block"><input onClick={handleCheckbox} name="fuel_type" value={'Gasoline'} type="checkbox" className="mr-2" /> Gasoline</label>
                        <label className="block"><input onClick={handleCheckbox} name="fuel_type" value={'Diesel'} type="checkbox" className="mr-2" /> Diesel</label>
                        <label className="block"><input onClick={handleCheckbox} name="fuel_type" value={'Electric'} type="checkbox" className="mr-2" /> Electric</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Doors</h3>
                    <div>
                        <label className="block"><input onClick={handleCheckbox} name="doors" value={'2'} type="checkbox" className="mr-2" /> 2</label>
                        <label className="block"><input onClick={handleCheckbox} name="doors" value={'4'} type="checkbox" className="mr-2" /> 4</label>
                        <label className="block"><input onClick={handleCheckbox} name="doors" value={'6'} type="checkbox" className="mr-2" /> 6</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Transmission</h3>
                    <div>
                        <label className="block"><input onClick={handleCheckbox} name="transmission" value={'Automatic'} type="checkbox" className="mr-2" /> Automatic</label>
                        <label className="block"><input onClick={handleCheckbox} name="transmission" value={'Manual'} type="checkbox" className="mr-2" /> Manual</label>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold mb-2">Cylinders</h3>
                    <div>
                        <label className="block"><input onClick={handleCheckbox} name="cylinders" value={'4'} type="checkbox" className="mr-2" /> 4</label>
                        <label className="block"><input onClick={handleCheckbox} name="cylinders" value={'6'} type="checkbox" className="mr-2" /> 6</label>
                        <label className="block"><input onClick={handleCheckbox} name="cylinders" value={'8'} type="checkbox" className="mr-2" /> 8</label>
                    </div>
                </div>

                <div className="mb-4">
                    <button type="submit" className='bg-gray-700 border-gray-700 w-full font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white border-2 hover:border-primary hover:text-primary transition duration-300'>Filter</button>
                </div>
            </form>
        </aside>
    )
}
