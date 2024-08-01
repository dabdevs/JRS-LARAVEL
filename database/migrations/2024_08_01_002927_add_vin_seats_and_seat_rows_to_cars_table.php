<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->string('vin')->nullable()->after('doors');
            $table->integer('seats')->nullable()->after('doors');
            $table->integer('seat_rows')->nullable()->after('doors');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropColumn('vin');
            $table->dropColumn('seats');
            $table->dropColumn('seat_rows');
        });
    }
};
