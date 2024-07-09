<?php

namespace App\Http;

use Illuminate\Support\Facades\Cache;

class Helper {
    public static function sortCars($q, $options=[])
    {
        $field = "id";
        $order = "DESC";

        // Sort
        if (!empty(request('sortBy'))) {
            $sortBy = request('sortBy');

            switch ($sortBy) {
                case 'lowest-price':
                    $field = "price";
                    $order = "ASC";
                    break;
                case 'highest-price':
                    $field = "price";
                    $order = "DESC";
                    break;
                case 'newest':
                    $field = "date_published";
                    $order = "ASC";
                    break;
            }
        }
        
        $q->orderBy($field, $order); 
        
        return $q;
    }

    public static function getCarModels()
    {
        return Cache::remember('models', 60, function () {
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

            return $models;
        }); 
    }
}