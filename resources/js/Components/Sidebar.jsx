import { Link } from '@inertiajs/react'
import usePermissions from './hooks/usePermissions'
import Logo from './Logo'
import { useState } from 'react';

export default function Sidebar() {
    const { can } = usePermissions()
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setToggled(!expanded)
    }

    return (
        <aside className={`flex min-h-screen ${expanded ? 'w-64' : 'w-12'} transition-width duration-300`}>
            <div className="h-full w-full px-2 py-2 bg-white shadow-md">
                <div className="px-8">
                    <Logo admin={true} />
                </div>

                <div className='flex flex-col items-start space-y-8 mt-8'>
                    <button onClick={() => setExpanded(!expanded)} className="outline-none mobile-menu-button">
                        <svg className="w-8 h-8 text-gray-900 hover:text-primary" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                            stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" />
                        </svg>
                    </button>

                    {expanded && <div className="links w-full">
                        {/* <Link href="/dashboard" className={`${route().current('dashboard') ? 'bg-red-100 text-primary' : 'hover:bg-gray-100 text-gray-500'} flex gap-2 p-2 w-full focus:outline-nones transition-colors duration-200 rounded-lg`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            Home
                        </Link> */}

                        {/* {can('read roles') &&
                            <Link href={route('roles.index')} className={`${route().current('roles.index') ? 'bg-red-100 text-primary' : 'hover:bg-gray-100 text-gray-500'} flex gap-2 p-2 w-full focus:outline-nones transition-colors duration-200 rounded-lg`}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Roles
                            </Link>
                        } */}

                        {can('read cars') && <Link href={route('cars.index')} className={`${route().current().includes('car') ? 'bg-red-100 text-primary' : 'hover:bg-gray-100 text-gray-500'} flex gap-2 p-2 w-full focus:outline-nones transition-colors duration-200 rounded-lg`}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Cars
                        </Link>}

                        {/* {can('read contacts') && <Link href="#" className={`${route().current('contacts.index') ? 'bg-red-100 text-primary' : 'hover:bg-gray-100 text-gray-500'} flex gap-2 p-2 w-full focus:outline-nones transition-colors duration-200 rounded-lg`}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path d="M10 12L12 14M12 14L14 12M12 14V8M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Contacts
                        </Link>} */}
                    </div>}
                </div>
            </div>
        </aside>
    )
}
