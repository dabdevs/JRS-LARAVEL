import useBusinessInfo from "@/Hooks/useBusinessInfo"
import { Link } from 'react-scroll'

export default function AboutUs() {
    const {about_us} = useBusinessInfo()

    return (
        <section id="about-us" className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="img/about-us.webp" alt="About Us" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2 md:ml-12 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold">About Us</h2>
                        <p className="my-4 text-gray-600">{about_us}</p>
                        <Link
                            role="button"
                            className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary border-2 hover:border-primary transition duration-300"
                            to="contact-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact Us
                        </Link> 
                    </div>
                </div>
            </div>
        </section>
    )
}
