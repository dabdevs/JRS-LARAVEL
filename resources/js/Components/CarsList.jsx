import React from 'react'
import Card from './Card'

export default function CarsList() {
    return (
        <section className="w-full px-2 md:px-4 mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                {Array.from({ length: 50 }).map((_, index) => <Card key={index} /> )}
            </div>
        </section>
    )
}
