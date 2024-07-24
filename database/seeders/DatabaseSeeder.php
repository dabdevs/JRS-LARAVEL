<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(PermissionsSeeder::class);
        $this->call(CarSeeder::class);
        $this->call(BusinessInfoSeeder::class);
        $this->call(CarModelSeeder::class);
        $this->call(StatesSeeder::class);
        $this->call(LoanApplicationSeeder::class);
    }
}
