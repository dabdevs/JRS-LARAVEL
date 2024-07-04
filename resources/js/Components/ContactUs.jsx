import useBusinessInfo from '@/Hooks/useBusinessInfo';
import { useForm } from '@inertiajs/react'

export default function ContactUs() {
    const {address, phone, email} = useBusinessInfo()
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    }); 

    return (
        <section id="contact-us" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <p className="text-gray-600 mt-4">We would love to hear from you</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold">Get In Touch</h3>
                        <p className="mt-4 text-gray-600">Feel free to reach out to us for any inquiries or to schedule a
                            service appointment.</p>
                        <div className="mt-8">
                            <p className="text-gray-600"><strong>Address:</strong> {address}</p>
                            <p className="mt-4 text-gray-600"><strong>Phone:</strong> {phone}</p>
                            <p className="mt-4 text-gray-600"><strong>Email:</strong> {email}</p>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-600">Name</label>
                                <input type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Email</label>
                                <input type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <div>
                                <button type="submit"
                                    className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition duration-300">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
