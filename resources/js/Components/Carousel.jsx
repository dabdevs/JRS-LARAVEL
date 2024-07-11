import Slider from 'react-slick'

export default function Carousel({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    }

    return (
        <div className="h-full w-full md:w-1/2">
            <Slider {...settings}>
                {images?.map(img => (
                    <div key={img.url} className='lg:h-[530px]'>
                        <img src={`/storage/${img.url}`} alt="Car Image" className="w-full h-full object-cover" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
