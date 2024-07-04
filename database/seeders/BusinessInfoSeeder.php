<?php

namespace Database\Seeders;

use App\Models\BusinessInfo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BusinessInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BusinessInfo::firstOrCreate([
            'phone' => '(631) 623-5427',
            'email' => 'info@jrsautocorp.com',
            'address' => '4025 Jericho Turnpike, East Northport, NY 11731',
            'logo' => '/img/logo.png',
            'about_us' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque cupiditate culpa molestias velit, quam sit omnis totam atque nostrum dolorem necessitatibus incidunt voluptates in quaerat facilis rem, voluptas rerum veritatis'
        ]);
    }
}
