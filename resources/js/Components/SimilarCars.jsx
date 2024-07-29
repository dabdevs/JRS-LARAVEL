import Card from "./Card";

export default function SimilarCars({ cars }) {
    return (
        <section className="mt-5 lg:mt-8">
            <h3 className="text-2xl font-bold mb-4">Similar Vehicules</h3>
            <div className="mb-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {cars.map((car, index) => <Card key={index} car={car} />)}
            </div>
        </section>
    )
}
