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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('make');
            $table->string('model');
            $table->year('year');
            $table->string('color');
            $table->integer('mileage')->unsigned();
            $table->decimal('price', 10, 2);
            $table->string('transmission');
            $table->string('fuel_type');
            $table->string('body_type')->nullable();
            $table->string('engine_size')->nullable();
            $table->integer('doors')->unsigned()->nullable();
            $table->boolean('is_used')->default(true);
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
