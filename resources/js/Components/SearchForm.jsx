import { useForm } from '@inertiajs/react'

export default function SearchForm({searchUrl, fields}) {
    const { data, setData, get, reset } = useForm({
        search: '',
    })

    const handleSearch = (e) => {
        e.preventDefault()

        if (data.search === '') return
        
        get(searchUrl)

        reset('search')
    }

    return (
        <form onSubmit={handleSearch} className="gap-1 w-full justify-between flex">
            <input onChange={(e) => setData('search', e.target.value)} value={data.search} id='search' type="text" placeholder={`Search by ${fields}`} className="border rounded-lg p-2 w-3/4" />
            <button type="submit" className='bg-primary font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white border-2 border-primary w-1/4 hover:text-primary transition duration-300'>
                Search
            </button>
        </form>
    )
}
