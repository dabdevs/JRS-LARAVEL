import { usePage } from '@inertiajs/react'
import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
    const { url } = usePage()

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-primary">
                    <img width="130" src="img/logo.png" alt="" />
                </a>
                
                {url !== '/' && 
                    <div className="flex gap-2 w-1/3 justify-end hidden md:inline-block">
                        <input type="text" placeholder="Search cars..." className="border rounded-lg p-2 w-3/4" />
                        <button type="submit" className='bg-primary font-bold text-white ml-1 py-2 px-4 rounded-lg hover:bg-white hover:border hover:border-primary hover:text-primary transition duration-300'>Search</button>
                    </div>
                }
                
                {url === '/' &&<nav className="space-x-4">
                    <Link role="button" to="/" className="text-gray-600 hover:text-primary">Home</Link>
                    <Link
                        role="button"
                        className="text-gray-600 hover:text-primary"
                        activeClass="active"
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
                        className="text-gray-600 hover:text-primary"
                        activeClass="active"
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
                        className="text-gray-600 hover:text-primary"
                        activeClass="active"
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

                <div class="md:hidden flex items-center">
                    <button class="outline-none mobile-menu-button">
                        <svg class=" w-6 h-6 text-gray-500 hover:text-primary " x-show="!showMenu" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div class="hidden mobile-menu">
                    <ul class="">
                        <li><a href="index.html" class="block text-sm px-2 py-4 text-white bg-primary font-semibold">Home</a>
                        </li>
                        <li><a href="#services"
                            class="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Services</a></li>
                        <li><a href="#about"
                            class="block text-sm px-2 py-4 hover:bg-primary transition duration-300">About</a></li>
                        <li><a href="#contact"
                            class="block text-sm px-2 py-4 hover:bg-primary transition duration-300">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
