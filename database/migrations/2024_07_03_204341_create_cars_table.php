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
            $table->string('slug')->unique();
            $table->string('make');
            $table->string('model');
            $table->year('year');
            $table->string('color');
            $table->integer('mileage')->unsigned()->nullable();
            $table->decimal('price', 10, 2);
            $table->string('transmission');
            $table->string('fuel_type');
            $table->string('body_type');
            $table->string('engine_size')->nullable();
            $table->integer('doors')->unsigned();
            $table->integer('cylinders');
            $table->enum('state', ['New', 'Used']);
            $table->enum('status', ['Published', 'Unpublished', 'Sold']);
            $table->index(['make', 'model', 'year']);
            $table->index(['transmission', 'slug', 'body_type']);
            $table->dateTime('date_published')->nullable();
            $table->dateTime('date_sold')->nullable();
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
