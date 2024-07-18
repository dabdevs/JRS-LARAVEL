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
            $table->string('ssn_itin');
            $table->date('date_of_birth');

            $table->string('driver_license_number')->nullable();
            $table->string('phone');
            $table->string('mobile_phone')->nullable();
            $table->string('email');

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

            $table->enum('employment_type', ['Employed Full-time', 'Employed Part-time', 'Retired', 'Military', 'Self-Employed', 'Other']);
            $table->string('employer_name');
            $table->string('occupation_rank');
            $table->string('work_phone');
            $table->string('work_phone_extension')->nullable();
            $table->integer('time_at_employment');

            $table->string('employer_address_line_1');
            $table->string('employer_address_line_2')->nullable();
            $table->string('employer_apt_unit')->nullable();
            $table->string('employer_city');
            $table->string('employer_state');
            $table->string('employer_zip_code');

            $table->decimal('gross_monthly_income', 10, 2);
            $table->decimal('other_monthly_income', 10, 2)->nullable();
            $table->string('other_monthly_income_description')->nullable();

            $table->enum('status', ['Pending', 'Approved', 'Denied'])->default('Pending');
            
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
