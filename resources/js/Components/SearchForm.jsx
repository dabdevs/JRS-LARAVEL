import { useForm } from '@inertiajs/react'

export default function SearchForm() {
    const { data, setData, get, reset } = useForm({
        search: '',
    })

    const handleSearch = (e) => {
        e.preventDefault()

        if (data.search === '') return
        
        get(`/listing`)

        reset('search')
    }

    return (
        <div className="gap-2 w-1/3 justify-end hidden md:inline-block">
            <input onChange={(e) => setData('search', e.target.value)} value={data.search} id='search' type="text" placeholder="Search cars..." className="border rounded-lg p-2 w-3/4" />
            <button onClick={handleSearch} type="button" className='bg-primary font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white border-2 border-primary hover:text-primary transition duration-300'>Search</button>
        </div>
    )
}
