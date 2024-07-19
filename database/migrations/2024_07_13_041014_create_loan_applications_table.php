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
        Schema::create('loan_applications', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->string('email');
            $table->string('ssn_itin');
            $table->date('date_of_birth');
            $table->string('driver_license_number')->nullable();
            $table->string('phone');

            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('apt_unit')->nullable();
            $table->string('city');
            $table->string('county')->nullable();
            $table->string('state');
            $table->string('zip_code');
            $table->integer('time_at_current_address');
            $table->enum('current_residence_type', ['Own', 'Rent', 'Other']);
            $table->decimal('rent_mortgage_payment', 10, 2);

            $table->enum('employment1_type', ['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other']);
            $table->string('employment1_rank');
            $table->string('employer1_name');
            $table->string('employer1_phone');
            $table->integer('time_at_employment1');
            $table->string('income1_type');
            $table->decimal('income1', 10, 2);
            $table->string('employer1_address');
            $table->string('employer1_city');
            $table->string('employer1_state');
            $table->string('employer1_zip_code');

            $table->enum('employment2_type', ['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other'])->nullable();
            $table->string('employer2_name')->nullable();
            $table->string('employment2_rank')->nullable();
            $table->string('employer2_phone')->nullable();
            $table->integer('time_at_employment2')->nullable();
            $table->string('income2_type')->nullable();
            $table->decimal('income2', 10, 2)->nullable();
            $table->string('employer2_address')->nullable();
            $table->string('employer2_city')->nullable();
            $table->string('employer2_state')->nullable();
            $table->string('employer2_zip_code')->nullable();
            $table->string('income2_description')->nullable();

            $table->enum('status', ['Pending', 'Approved', 'Denied'])->default('Pending');
            $table->dateTime('date_approved')->nullable();
            $table->dateTime('date_denied')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loan_applications');
    }
};
