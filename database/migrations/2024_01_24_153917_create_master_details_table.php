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
        Schema::create('master_details', function (Blueprint $table) {
            $table->id();
            $table->String("mBranch");
            $table->String("mYear");
            $table->String("mEstablishment");
            $table->String("semester7");
            $table->String("semester8");
            $table->String("semester9");
            $table->String("semester10");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('master_details');
    }
};
