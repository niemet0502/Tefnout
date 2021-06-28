<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFollowCourseIdToFollowChapterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('follow_chapters', function (Blueprint $table) {
            //$table->dropForeign('formation_id');
            $table->dropColumn('formation_id');
            //$table->foreignId('follow_course_id')->references('id')->on('follow_courses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('follow_chapter', function (Blueprint $table) {
            //
        });
    }
}
