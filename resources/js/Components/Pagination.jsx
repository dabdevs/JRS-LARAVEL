import { Link, usePage } from '@inertiajs/react';

export default function Pagination() {
    const { cars } = usePage().props;

    return (
        <div className="flex justify-center">
            <ul className="flex list-none lg:mt-6">
                {cars.links.map((page, i) => (
                    <li key={i} className="mx-1">
                        <Link
                            className="px-4 py-2 bg-white text-bold text-primary rounded hover:border hover:border-primary"
                            href={page.url}
                        >
                            {page.label.includes('Previous') ? 'Previous' : (page.label.includes('Next') ? 'Next' : page.label)} 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
