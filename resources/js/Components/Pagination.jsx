import { Link } from '@inertiajs/react';

export default function Pagination({links}) {
    return (
        <div className="flex justify-center">
            <ul className="flex list-none lg:mt-6">
                {links.map((page, i) => (
                    <li key={i} className='mx-1'>
                        {page.url ? (
                            <Link
                                className={`px-4 py-2 ${page.active ? 'bg-primary text-white hover:bg-white hover:text-primary' : 'bg-white text-primary'} hover:border-primary text-bold rounded hover:border-2`}
                                href={page.url}
                            >
                                {page.label.includes('Previous') ? 'Previous' : (page.label.includes('Next') ? 'Next' : page.label)}
                            </Link>
                        ) : (
                            <span
                                className={`px-4 py-2 bg-gray-200 text-gray-500 text-bold rounded cursor-not-allowed`}
                            >
                                {page.label.includes('Previous') ? 'Previous' : (page.label.includes('Next') ? 'Next' : page.label)}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
