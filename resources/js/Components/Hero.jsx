import { Link } from 'react-scroll'
import { Link as InertiaLink } from '@inertiajs/react'
import { motion } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

export default function Hero() {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <RevealOnScroll>
            <div
                style={{
                    backgroundImage: "url('img/car-1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
                className="hero-bg w-full h-screen flex items-center justify-center relative"
            >
                <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
                <div className="relative text-center text-white">
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="text-4xl lg:text-5xl font-extrabold"
                    >
                        JRS AUTO CORP
                    </motion.h1>

                    <motion.div
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                    >
                        <p className="text-xl lg:text-2xl font-extralight ">Vehicule Sales & Repair Shop</p>
                        <em className="font-light mb-4 ">Quality Service You Can Trust</em>
                    </motion.div>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        className="flex flex-wrap justify-center mt-4 gap-4"
                    >
                        <InertiaLink href="/listing" className=" bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-2 border-primary">Explore Deals</InertiaLink>
                        <Link
                            role="button"
                            className=" hover:text-primary hover:bg-white text-white font-bold py-2 px-6 rounded-lg border border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Explore Our Services
                        </Link>
                    </motion.div>
                </div>
            </div>
        </RevealOnScroll>
    )
}

