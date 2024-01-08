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
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->String("firstName");
            $table->String("lastName");
            $table->String("email");
            $table->String("phone_number");
            $table->String("CNIE");
            $table->Date("dateOfBirth");
            $table->String("countryOfBirth");
            $table->String("cityOfBirth");
            $table->String("nationality");
            $table->String("address");
            $table->String("postalCode");
            $table->String("country");
            $table->String("city");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidates');
    }
};
