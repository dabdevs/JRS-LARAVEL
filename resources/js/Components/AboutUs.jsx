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
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-dark-grey-900">About Us</h2>
                        <p className="my-4 text-gray-600">
                            With years of experience serving the area, our dealership is dedicated to offering high-quality, pre-owned vehicles to our customers.
                            From the moment you walk through our door, we're committed to providing you with a great car-buying experience. With our skilled sales staff and financing options, we'll help you get the vehicle you want, at the great price you deserve.
                        </p>

                        <p className="my-4 text-gray-600">
                            Our goal is for you to be so delighted with your vehicle purchase that you'll come see us when you need your next car and will happily recommend us to friends and family. 
                        </p>

                        <p className="my-4 text-gray-600">
                            Customer referrals are the ultimate compliment.
                            With many vehicle shopping options available, we differentiate ourselves by understanding our local car-buying community and satisfying its needs; helping valued local customers like you, find the vehicle that's the "right fit".
                        </p>

                        <p className="my-4 text-gray-600">
                            Feel free to browse our inventory online and check out the Featured Vehicles section on our homepage. If you see a vehicle you like, submit an online quote request, or contact us to schedule a test drive.
                            To learn more about our dealership and how we can help with your next vehicle purchase, please call or stop by in person. We look forward to meeting you.
                        </p>

                
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
