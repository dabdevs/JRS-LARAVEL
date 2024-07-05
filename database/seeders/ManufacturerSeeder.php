<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManufacturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $carManufacturers = [
            'Acura',
            'Alfa Romeo',
            'Aston Martin',
            'Audi',
            'Bentley',
            'BMW',
            'Bugatti',
            'Buick',
            'Cadillac',
            'Chevrolet',
            'Chrysler',
            'Citroën',
            'Dacia',
            'Daewoo',
            'Daihatsu',
            'Dodge',
            'Ferrari',
            'Fiat',
            'Ford',
            'Genesis',
            'GMC',
            'Honda',
            'Hummer',
            'Hyundai',
            'Infiniti',
            'Isuzu',
            'Jaguar',
            'Jeep',
            'Kia',
            'Lamborghini',
            'Lancia',
            'Land Rover',
            'Lexus',
            'Lincoln',
            'Maserati',
            'Mazda',
            'McLaren',
            'Mercedes-Benz',
            'Mini',
            'Mitsubishi',
            'Nissan',
            'Opel',
            'Pagani',
            'Peugeot',
            'Porsche',
            'RAM',
            'Renault',
            'Rolls-Royce',
            'Saab',
            'Seat',
            'Skoda',
            'Smart',
            'Subaru',
            'Suzuki',
            'Tesla',
            'Toyota',
            'Volkswagen',
            'Volvo',
        ];

        try {
            foreach ($carManufacturers as $manufacturer) {
                Manufacturer::create(["name" => $manufacturer]);
            }
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
