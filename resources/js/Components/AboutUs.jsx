import React from 'react'

export default function AboutUs() {
    return (
        <section id="about-us" class="py-20 bg-gray-100">
            <div class="max-w-7xl mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2">
                        <img src="img/about-us.webp" alt="About Us" class="rounded-lg shadow-lg" />
                    </div>
                    <div class="md:w-1/2 md:ml-12 mt-8 md:mt-0">
                        <h2 class="text-3xl font-bold">About Us</h2>
                        <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate culpa molestias velit, quam sit omnis totam atque nostrum dolorem necessitatibus incidunt voluptates in quaerat facilis rem, voluptas rerum veritatis</p>
                        <a href="#contact"
                            class="mt-8 inline-block bg-primary font-bold text-white py-2 px-4 rounded-lg hover:bg-white hover:text-primary hover:border hover:border-primary transition duration-300">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
