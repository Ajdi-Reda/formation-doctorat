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
        Schema::create('thesis_proposals', function (Blueprint $table) {
            $table->id();
            $table->foreignId("professor_id")->constrained();
            $table->foreignId("field_id")->constrained();
            $table->String("title");
            $table->String("description");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thesis_proposals');
    }
};
