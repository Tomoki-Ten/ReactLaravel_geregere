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
        Schema::create('comments', function (Blueprint $table) {
            $table->id()->comment('ID');

            $table->foreignId('post_id')->comment('POST ID');

            $table->string('title', 50)->comment('Title');
            $table->string('text', 256)->comment('Text');
            
            $table->dateTime('created_at')->useCurrent()->comment('Created_At');
            $table->bigInteger('created_by')->nullable()->comment('Created_By');
            $table->dateTime('updated_at')->useCurrent()->comment('Updated_At');
            $table->bigInteger('updated_by')->nullable()->comment('Updated_By');

            // SoftDelete
            $table->softDeletes('deleted_at')->comment('Deleted_At');
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
        Schema::dropIfExists('comments');
    }
};
