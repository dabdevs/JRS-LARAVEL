import React from 'react'

export default function ContactUs() {
    return (
        <section id="contact-us" class="py-20 border-b-2 border-primary bg-white">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-bold">Contact Us</h2>
                    <p class="text-gray-600 mt-4">We would love to hear from you</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-xl font-bold">Get In Touch</h3>
                        <p class="mt-4 text-gray-600">Feel free to reach out to us for any inquiries or to schedule a
                            service appointment.</p>
                        <div class="mt-8">
                            <p class="text-gray-600"><strong>Address:</strong> 4025 Jericho Turnpike, East Northport, NY 11731</p>
                            <p class="mt-4 text-gray-600"><strong>Phone:</strong> (631) 623-5427</p>
                            <p class="mt-4 text-gray-600"><strong>Email:</strong> info@jrsautocorp.com</p>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-600">Name</label>
                                <input type="text"
                                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600">Email</label>
                                <input type="email"
                                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email" />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-600">Message</label>
                                <textarea
                                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <div>
                                <button type="submit"
                                    class="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary hover:border hover:border-primary transition duration-300">
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
