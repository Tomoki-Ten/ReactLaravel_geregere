<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id()->comment('ID');

            $table->foreignId('user_id')->nullable()->comment('User ID');

            $table->string('title', 50)->comment('Title');
            $table->string('text', 256)->comment('Text');
            $table->string('check', 100)->nullable()->comment('Check');
            $table->boolean('bool')->nullable()->comment('Boolean');

            $table->dateTime('created_at')->useCurrent()->comment('Created_At');
            $table->bigInteger('created_by')->nullable()->comment('Created_By');
            $table->dateTime('updated_at')->useCurrent()->comment('Updated_At');
            $table->bigInteger('updated_by')->nullable()->comment('Updated_By');

            // SoftDelete
            $table->softDeletes('deleted_at')->comment('Deleted_at');
            $table->bigInteger('deleted_by')->nullable()->comment('Deleted_By');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
