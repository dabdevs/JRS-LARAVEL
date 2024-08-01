import useBusinessInfo from '@/Hooks/useBusinessInfo';
import useUtils from '@/Hooks/useUtils';
import { useForm } from '@inertiajs/react'
import { useState } from 'react';
import InputError from '@/Components/InputError';
import RevealOnScroll from './RevealOnScroll';

export default function ContactUs() {
    const { address, phone, email } = useBusinessInfo()
    const [success, setSuccess] = useState(false)
    const { data, setData, post, processing, setError, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const { validateEmail } = useUtils()

    const handleChange = (e) => {
        setSuccess(false)
        const name = e.target.name
        const value = e.target.value

        if (name === "email" && !validateEmail(value)) {
            setError(name, 'The email address field is not valid.')
        } else {
            setError(name, '')
        }

        setData(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        post(route('contact'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                setSuccess(true)
            }
        })

    }

    return (
        <section id="contact-us" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <RevealOnScroll>
                    <div className="text-center mb-16 ">
                        <h2 className="text-2xl lg:text-3xl font-extrabold text-dark-grey-900">Contact Us</h2>
                        <p className="text-gray-600 mt-4">We would love to hear from you</p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <RevealOnScroll>
                        <div className=''>
                            <h3 className="text-xl font-bold ">Get In Touch</h3>
                            <p className="mt-4 text-gray-600">Feel free to reach out to us for any inquiries or to schedule a
                                service appointment.</p>
                            <div className="mt-8">
                                <p className="text-gray-600"><strong>Address:</strong> {address}</p>
                                <p className="mt-4 text-gray-600"><strong>Phone:</strong> {phone}</p>
                                <p className="mt-4 text-gray-600"><strong>Email:</strong> {email}</p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className=''>
                        <RevealOnScroll>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-600">Name</label>
                                    <input
                                        onChange={handleChange}
                                        value={data.name}
                                        name="name"
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0"
                                        placeholder="Your Name" />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mb-4 ">
                                    <label className="block text-gray-600">Email</label>
                                    <input
                                        onChange={handleChange}
                                        value={data.email}
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0"
                                        placeholder="Your Email" />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="mb-4 ">
                                    <label className="block text-gray-600">Message</label>
                                    <textarea
                                        onChange={handleChange}
                                        value={data.message}
                                        name="message"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-0"
                                        rows="4" placeholder="Your Message"></textarea>
                                    <InputError message={errors.message} className="mt-2" />
                                    {success && <p className='font-bold text-green-600'>Message sent successfuly!</p>}
                                </div>
                                <div>
                                    <button
                                        disabled={processing}
                                        type="submit"
                                        className=" w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary border-2 hover:border-primary transition duration-300">
                                        {(processing && data.name && data.email && data.message) ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </section>
    )
}
