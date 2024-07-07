import Card from './Card'
import { useForm, usePage } from '@inertiajs/react';
import Pagination from './Pagination';
import { useRef } from 'react';
import ClearFilters from './ClearFilters';

export default function CarsList() {
    const { cars } = usePage().props;
    const { data, setData, get } = useForm({
        sortBy: 'best-match',
    }) 
    const { url } = usePage();

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
        const currentQueryParams = new URLSearchParams(url.split('?')[1]);
        const newQueryParams = new URLSearchParams(currentQueryParams);
        newQueryParams.set('sortBy', data.sortBy);

        get(`/listing?${newQueryParams.toString()}`, { preserveState: true, preserveScroll: true });
    }

    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="flex justify-between py-2 gap-2 mb-3">

                <ClearFilters data={cars} />

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
