import { usePage } from '@inertiajs/react'
import { Link } from 'react-scroll'
import { Link as InertiaLink } from '@inertiajs/react';
import Logo from './Logo'
import SearchForm from './SearchForm'
import { useState } from 'react'

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    const { url } = usePage()

    return (
        <header className="bg-white shadow-md">
            <div className={`${url.includes('/listing') ? 'px-4' : 'container mx-auto px-4'} py-2 flex justify-between items-center`}>
                <Logo />

                {(url.includes('/cars/') || url.includes('/listing')) && 
                    <div className='hidden md:block w-1/3'>
                        <SearchForm />
                    </div>
                }

                {url === '/' && <nav className="space-x-8 hidden md:block">
                    <Link role="button" to="/" className="text-primary font-bold hover:text-gray-500">Home</Link>
                    <Link
                        role="button"
                        className="text-primary font-bold hover:text-gray-500"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About Us
                    </Link>

                    <Link
                        role="button"
                        className="text-primary font-bold hover:text-gray-500"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Services
                    </Link>

                    <Link
                        role="button"
                        className="text-primary font-bold hover:text-gray-500"
                        to="contact-us"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact Us
                    </Link>
                </nav>
                }

                <div className="md:hidden flex items-center" onClick={() => setShowMenu(!showMenu)}>
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500 hover:text-primary " x-show="!showMenu" fill="none"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {showMenu && <div className="mobile-menu w-full absolute end-0 top-12 z-50 bg-white opacity-100 md:opacity-0 transition duration-500 ease-in-out">
                    <ul className="">
                        <li>
                            <InertiaLink
                                className="block text-sm border-t px-2 py-4 text-whit font-semibold"
                                href="/"
                            >
                                Home
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                className="block text-sm border-t px-2 py-4 text-whit font-semibold"
                                href="/#services"
                            >
                                Services
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                className="block text-sm border-t px-2 py-4 text-whit font-semibold"
                                href="/#about-us"
                            >
                                About Us
                            </InertiaLink>
                        </li>
                        <li>
                            <InertiaLink
                                className="block text-sm border-t px-2 py-4 text-whit font-semibold"
                                href="/#contact-us"
                            >
                                Contact Us
                            </InertiaLink>
                        </li>
                    </ul>
                </div>}
            </div>
        </header>
    )
}
