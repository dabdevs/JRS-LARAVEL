import { useForm } from '@inertiajs/react'

export default function SearchForm() {
    const { data, setData, get, reset } = useForm({
        search: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (data.search === '') return
        
        get(`/search/${data.search}`)

        reset('search')
    }

    return (
        <form onSubmit={handleSubmit} className="gap-2 w-1/3 justify-end hidden md:inline-block">
            <input onChange={(e) => setData('search', e.target.value)} value={data.search} id='search' type="text" placeholder="Search cars..." className="border rounded-lg p-2 w-3/4" />
            <button type="submit" className='bg-primary font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white hover:border-2 hover:border-primary hover:text-primary transition duration-300'>Search</button>
        </form>
    )
}
