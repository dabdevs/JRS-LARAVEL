
import { useRef } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function Sort({ admin }) {
    const { data, setData, get } = useForm({
        sortBy: 'best-match',
    })
    const { url } = usePage()

    const submitBtnRef = useRef(null)

    const handleTriggerClick = () => {
        if (submitBtnRef.current) {
            submitBtnRef.current.click();
        }
    }

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

        get(`${admin ? '/dashboard/cars' : '/listing'}?${newQueryParams.toString()}`, { preserveState: true, preserveScroll: true });
    }

    return (
        <form onSubmit={handleSubmit} id='filter-form'>
            <select
                onChange={handleSortBy}
                value={data.sortBy}
                name="sortBy"
                id="sortBy"
                className='inline-flex items-center pr-8 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'
            >
                <option value="best-match">Best match</option>
                <option value="lowest-price">Lowest price</option>
                <option value="highest-price">Highest price</option>
                <option value="newest">Newest</option>
            </select>
            <button ref={submitBtnRef} onClick={handleTriggerClick} type="submit" className='hidden'>submit</button>
        </form>
    )
}
