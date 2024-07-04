import { usePage } from '@inertiajs/react'
import { Link } from 'react-scroll'
import Logo from './Logo'

export default function Navbar() {
    const { url } = usePage()

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Logo />

                {url !== '/' &&
                    <div className="gap-2 w-1/3 justify-end hidden md:inline-block">
                        <input type="text" placeholder="Search cars..." className="border rounded-lg p-2 w-3/4" />
                        <button type="submit" className='bg-primary font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white hover:border hover:border-primary hover:text-primary transition duration-300'>Search</button>
                    </div>
                }

                {url === '/' && <nav className="space-x-8">
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

                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                        <svg className=" w-6 h-6 text-gray-500 hover:text-primary " x-show="!showMenu" fill="none"
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden mobile-menu">
                    <ul className="">
                        <li><a href="index.html" className="block text-sm px-2 py-4 text-white bg-primary font-semibold">Home</a>
                        </li>
                        <li><a href="#services"
                            className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Services</a></li>
                        <li><a href="#about"
                            className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">About</a></li>
                        <li><a href="#contact"
                            className="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
