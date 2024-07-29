<?php

namespace Database\Seeders;

use App\Models\LoanApplication;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoanApplicationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 30 applications
        LoanApplication::factory()->count(30)->create();
    }
}
