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
        Schema::create('licence_details', function (Blueprint $table) {
            $table->id();
            $table->String("lType");
            $table->String("lBranch");
            $table->String("lYear");
            $table->String("lEstablishment");
            $table->String("semester1");
            $table->String("semester2");
            $table->String("semester3");
            $table->String("semester4");
            $table->String("semester5");
            $table->String("semester6");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licence_details');
    }
};
