import { Link } from 'react-scroll'

export default function Hero() {
    return (
        <div style={{
            backgroundImage: "url('img/car-1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }} className="hero-bg w-full h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
            <div className="relative text-center text-white">
                <h1 className="text-5xl font-extrabold">JRS AUTO CORP</h1>
                <p className="text-2xl font-extralight">Car Sales & Repair Shop</p>
                <em className="font-light mb-4">Quality Service You Can Trust</em>
                <div className="flex flex-wrap justify-center mt-4 gap-4">
                    <a href="/listing" className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-primary border-2border-primary transition duration-300">Car Deals</a>
                    <Link
                        role="button"
                        className="hover:text-primary hover:bg-white text-white font-bold py-2 px-6 rounded-lg transition duration-300 border border-white"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    )
}

