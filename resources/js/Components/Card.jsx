import useUtils from "@/Hooks/useUtils"
import { motion } from 'framer-motion';

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

export default function Card({ car, i }) {
    const url = car?.images.length === 0 ? '/img/default_car.jpg' : `/storage/${car?.images[0].url}`
    const { formatPrice } = useUtils()

    return (
        <motion.div
            car={car}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
            role="button"
            onClick={() => window.location.href = `/listing/${car.slug}`}
            className="relative bg-white p-1 lg:p-3 rounded-lg shadow-md"
        >
            {car.status === 'Sold' && <p className="px-1 text-gray-800 bg-yellow-400 border-2 border-yellow-400 rounded-lg absolute flex justify-center items-center right-1 top-1"> 
                Sold
            </p>}
            <img
                src={url}
                alt={'car image'}
                className="w-full h-32 lg:h-48 object-cover rounded-lg mb-2 lg:mb-4"
            />
            <div className="text-center">
                <h3 className="text-lg lg:text-xl text-primary font-bold mb-2 w-full text-ellipsis overflow-hidden whitespace-nowrap">{`${car?.year} ${car?.make} ${car?.model}`}</h3>
                <p className="text-gray-600 text-lg font-bold mb-2">{formatPrice(car.price)}</p>
                <div className="flex gap-2 align-center justify-center">
                    <p className="text-gray-600 text-sm mb-4">{car.state}</p>
                    {car.state === 'Used' && <p className="text-gray-600 text-sm mb-4">{car.mileage} miles</p>}
                </div>
                <a
                    href="#"
                    className="inline-block bg-primary border-2 hover:bg-white border-primary hover:text-primary text-white font-bold py-1 px-2 lg:py-2 lg:px-4 rounded-lg transition duration-300"
                >
                    View Details 
                </a>
            </div>
        </motion.div>
    )
}
