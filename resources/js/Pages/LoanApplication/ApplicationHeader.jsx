import useUtils from "@/Hooks/useUtils"

export default function ApplicationHeader({ car }) {
    const { formatPrice } = useUtils()
    return (
        <div className='flex gap-2 justify-center mb-2 hide application'>
            <img className='w-[80px] lg:w-[100px]' src={car?.images.length > 0 ? `/storage/${car?.images[0].url}` : 'https://placehold.co/600x400'} alt={'car image'} />
            <h1 className="text-xl lg:text-2xl my-auto font-semibold text-center">{car.state} {car.make} {car.model} {car.year} <span className="px-2 lg:text-3xl text-primary">{formatPrice(car.price)}</span></h1>
        </div>
    )
}
