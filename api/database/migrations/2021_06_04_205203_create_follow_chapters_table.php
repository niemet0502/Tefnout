<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowChaptersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('follow_chapters', function (Blueprint $table) {
            $table->id();
            $table->string('is_validated');
            $table->foreignId('chapter_id')->references('id')->on('chapters');
            $table->foreignId('formation_id')->references('id')->on('formations');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('follow_chapters');
    }
}
