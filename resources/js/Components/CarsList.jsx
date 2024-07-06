import Card from './Card'
import { Link, useForm, usePage } from '@inertiajs/react';
import Pagination from './Pagination';
import { useRef } from 'react';

export default function CarsList() {
    const { cars } = usePage().props;
    const { data, setData, get } = useForm({
        sortBy: 'best-match',
    }) 

    const submitBtnRef = useRef(null) 

    const handleTriggerClick = () => {
        if (submitBtnRef.current) {
            submitBtnRef.current.click();
        }
    };

    const handleSortBy = (e) => {
        setData('sortBy', e.target.value)
      
        setTimeout(() => {
            console.log('click submit button')
            handleTriggerClick()
        }, 10);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        get(`/listing`, {preserveState: true})
    }

    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="flex justify-between py-2 gap-2 mb-3">
                <div className='flex gap-2'>
                    {cars.total > 0 && <p className='text-lg mt-1'>{cars.total} results</p>}

                    {window.location.search && 
                        <Link href='/listing' className='flex p-1 rounded-lg border-2 border-gray-900 transition duration-300'>
                            <svg width="26px" height="26px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" /></svg>
                            <p className='font-bold'>Clear filters</p>
                        </Link>}
                </div>

                <form onSubmit={handleSubmit} id='filter-form'>
                    <select 
                        onChange={handleSortBy}
                        value={data.sortBy} 
                        name="sortBy" 
                        id="sortBy"
                        className='inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'
                        >
                        <option value="best-match">Best match</option>
                        <option value="lowest-price">Lowest price</option>
                        <option value="highest-price">Highest price</option>
                        <option value="newest">Newest</option>
                    </select>
                    <button ref={submitBtnRef} onClick={handleTriggerClick} type="submit" className='hidden'>submit</button>
                </form>
            </div>

            <div className="mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {cars?.data?.map(car => <Card  key={car.id} car={car} /> )}
            </div>

            {
                cars?.data?.length == 0 ? <p className="p-8 mt-8 text-center font-bold text-2xl text-gray-600">
                    No data found.
                </p>
                    : <Pagination links={cars.links} />
            }
        </section>
    )
}
