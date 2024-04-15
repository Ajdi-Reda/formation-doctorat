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
        Schema::create('application', function (Blueprint $table) {
            $table->id();
            $table->foreignId("candidate_id")->constrained();
            $table->foreignId("thesis_proposal_id")->nullable()->constrained();
            $table->foreignId("bac_detail_id")->nullable()->constrained();
            $table->foreignId("licence_detail_id")->nullable()->constrained();
            $table->foreignId("master_detail_id")->nullable()->constrained();
            $table->string('status')->default('pending');
            $table->boolean('completed')->default(false);
            $table->boolean('accepted')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('application');
    }
};
