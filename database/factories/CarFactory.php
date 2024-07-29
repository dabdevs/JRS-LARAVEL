<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Car>
 */
class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $manufacturers = [
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
            'Volvo'
        ];

        $models = [
            'Acura' => ['ILX', 'MDX', 'NSX', 'RDX', 'TLX'],
            'Alfa Romeo' => ['Giulia', 'Stelvio', '4C Spider'],
            'Aston Martin' => ['DB11', 'Vantage', 'DBX'],
            'Audi' => ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'R8'],
            'Bentley' => ['Bentayga', 'Continental', 'Flying Spur'],
            'BMW' => ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series', '8 Series', 'X1', 'X3', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i8'],
            'Bugatti' => ['Chiron', 'Veyron'],
            'Buick' => ['Enclave', 'Encore', 'Envision', 'Regal'],
            'Cadillac' => ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6'],
            'Chevrolet' => ['Blazer', 'Bolt', 'Camaro', 'Colorado', 'Corvette', 'Equinox', 'Malibu', 'Silverado', 'Suburban', 'Tahoe', 'Traverse', 'Trax'],
            'Chrysler' => ['300', 'Pacifica'],
            'Citroën' => ['C1', 'C3', 'C4', 'C5 Aircross', 'Berlingo'],
            'Dacia' => ['Duster', 'Sandero', 'Logan'],
            'Daewoo' => ['Lanos', 'Nubira', 'Leganza'],
            'Daihatsu' => ['Mira', 'Terios', 'Copen'],
            'Dodge' => ['Challenger', 'Charger', 'Durango', 'Journey', 'Ram'],
            'Ferrari' => ['488', 'Portofino', 'Roma', 'SF90', 'F8 Tributo'],
            'Fiat' => ['500', '500X', 'Panda', 'Tipo'],
            'Ford' => ['Bronco', 'Edge', 'Escape', 'Explorer', 'F-150', 'Fusion', 'Mustang', 'Ranger'],
            'Genesis' => ['G70', 'G80', 'G90', 'GV70', 'GV80'],
            'GMC' => ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
            'Honda' => ['Accord', 'Civic', 'CR-V', 'Fit', 'HR-V', 'Odyssey', 'Passport', 'Pilot', 'Ridgeline'],
            'Hummer' => ['H1', 'H2', 'H3'],
            'Hyundai' => ['Elantra', 'Kona', 'Palisade', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster', 'Venue'],
            'Infiniti' => ['Q50', 'Q60', 'QX50', 'QX60', 'QX80'],
            'Isuzu' => ['D-Max', 'MU-X'],
            'Jaguar' => ['E-Pace', 'F-Pace', 'F-Type', 'I-Pace', 'XE', 'XF'],
            'Jeep' => ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Renegade', 'Wrangler'],
            'Kia' => ['Forte', 'Niro', 'Optima', 'Rio', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger', 'Telluride'],
            'Lamborghini' => ['Aventador', 'Huracan', 'Urus'],
            'Lancia' => ['Ypsilon'],
            'Land Rover' => ['Discovery', 'Range Rover', 'Range Rover Evoque', 'Range Rover Sport', 'Defender'],
            'Lexus' => ['ES', 'GS', 'GX', 'IS', 'LC', 'LS', 'LX', 'NX', 'RC', 'RX', 'UX'],
            'Lincoln' => ['Aviator', 'Corsair', 'Navigator', 'Nautilus'],
            'Maserati' => ['Ghibli', 'Levante', 'Quattroporte'],
            'Mazda' => ['CX-3', 'CX-30', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6', 'MX-5 Miata'],
            'McLaren' => ['570S', '600LT', '720S', 'GT'],
            'Mercedes-Benz' => ['A-Class', 'C-Class', 'E-Class', 'G-Class', 'GLA', 'GLC', 'GLE', 'GLS', 'S-Class', 'SL', 'AMG GT'],
            'Mini' => ['Clubman', 'Convertible', 'Countryman', 'Hardtop', 'John Cooper Works'],
            'Mitsubishi' => ['Eclipse Cross', 'Mirage', 'Outlander', 'Pajero'],
            'Nissan' => ['Altima', 'Armada', 'Frontier', 'GT-R', 'Kicks', 'Leaf', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Sentra', 'Titan', 'Versa', 'Z'],
            'Opel' => ['Astra', 'Corsa', 'Insignia', 'Mokka'],
            'Pagani' => ['Huayra', 'Zonda'],
            'Peugeot' => ['2008', '3008', '5008', '508'],
            'Porsche' => ['911', '718 Cayman', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
            'RAM' => ['1500', '2500', '3500'],
            'Renault' => ['Captur', 'Clio', 'Kadjar', 'Koleos', 'Megane', 'Talisman'],
            'Rolls-Royce' => ['Cullinan', 'Ghost', 'Phantom', 'Wraith'],
            'Saab' => ['9-3', '9-5'],
            'Seat' => ['Arona', 'Ateca', 'Ibiza', 'Leon', 'Tarraco'],
            'Skoda' => ['Fabia', 'Octavia', 'Superb', 'Karoq', 'Kodiaq'],
            'Smart' => ['EQ Fortwo'],
            'Subaru' => ['Ascent', 'BRZ', 'Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'WRX'],
            'Suzuki' => ['Swift', 'Vitara', 'Jimny'],
            'Tesla' => ['Model 3', 'Model S', 'Model X', 'Model Y'],
            'Toyota' => ['4Runner', 'Avalon', 'Camry', 'Corolla', 'Highlander', 'Land Cruiser', 'Prius', 'RAV4', 'Sequoia', 'Sienna', 'Supra', 'Tacoma', 'Tundra', 'Yaris'],
            'Volkswagen' => ['Atlas', 'Beetle', 'Golf', 'Jetta', 'Passat', 'Tiguan'],
            'Volvo' => ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90'],
        ];

        $make = $this->faker->randomElement($manufacturers);
        $model = $this->faker->randomElement($models[$make]);

        $engineSizes = [
            '1.0L',
            '1.2L',
            '1.4L',
            '1.6L',
            '1.8L',
            '2.0L',
            '2.2L',
            '2.4L',
            '2.5L',
            '2.7L',
            '3.0L',
            '3.3L',
            '3.5L',
            '3.6L',
            '3.8L',
            '4.0L',
            '4.2L',
            '4.4L',
            '4.6L',
            '5.0L'
        ];

    $carColors = [
        'White',
        'Black',
        'Silver',
        'Gray',
        'Red',
        'Blue',
        'Brown',
        'Yellow',
        'Green',
        'Beige',
        'Orange',
        'Pink'
    ];

        $data = [
            'make' => $make,
            'model' => $model,
            'year' => $this->faker->numberBetween(2000, 2024),
            'color' => $this->faker->randomElement($carColors),
            'mileage' => $this->faker->numberBetween(0, 100000),
            'price' => $this->faker->numberBetween(5000, 50000),
            'transmission' => $this->faker->randomElement(['Automatic', 'Manual']),
            'cylinders' => $this->faker->randomElement([3, 4, 5, 6, 8, 10, 12]),
            'state' => $this->faker->randomElement(['New', 'Used']),
            'fuel_type' => $this->faker->randomElement(['Gasoline', 'Diesel', 'Electric']),
            'body_type' => $this->faker->randomElement(['Sedan', 'SUV', 'Truck', 'Coupe']),
            'engine_size' => $this->faker->randomElement($engineSizes),
            'doors' => $this->faker->numberBetween(2, 5),
            'status' => $this->faker->randomElement(['Published', 'Unpublished']),
        ];

        $slug = Str::slug($data['make'] . "-" . $data['model'] . "-" . $data['year'] . "-" . $data['color'] . "-" . $data['mileage'] . "-" . $data['price'] . "-" . $data['transmission'] . "-" .$data['fuel_type'] . "-" .$data['body_type']. "-" . $data['engine_size'] . "-" . $data['doors']);
        $data['slug'] = $slug;
        
        if ($data['status'] === 'Published') $data['date_published'] = now();
        
        return $data;
    }
}
