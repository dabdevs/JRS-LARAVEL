import { useState } from "react";
import Modal from "./Modal";
import PrivacyAndPolicy from "./PrivacyAndPolicy"; 
import { Link } from '@inertiajs/react';

export default function Footer() {
    const [modal, setModal] = useState(false)

    return (
        <footer className="bg-white align-bottom shadow-md border-t-2 border-primary">
            <div className="container mx-auto p-4 text-center">
                <p className="text-gray-600">© {new Date().getFullYear()} JRS AUTO CORP. All rights reserved.</p>
                <nav className="space-x-4">
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
                    <a href="#" className="text-primary font-bold hover:text-gray-500" onClick={() => setModal(true)}>Privacy Policy</a>
                    { }
                </nav>
            </div>
            <Modal isOpen={modal} setIsOpen={setModal} >
                <PrivacyAndPolicy />
            </Modal>
        </footer>
    )
}
