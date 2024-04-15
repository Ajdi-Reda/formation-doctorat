<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bac_details', function (Blueprint $table) {
            $table->id();
            $table->String("bYear");
            $table->String("city");
            $table->String("bEstablishment");
            $table->String("massarCode");
            $table->String("option");
            $table->String("mention");
            $table->String("bacAverage");
            $table->String("nationalBacAverage");
            $table->String("regionalExamAverage");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bac_details');
    }
};
