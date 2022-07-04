<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $num = 20;

        for ($i = 0; $i < $num; $i++) {
            DB::table('posts')->insert([
                'user_id' => 1,
                'title' => 'title-' . Str::random(10),
                'text' => 'text-' . Str::random(100),
                'check' => 0,
                'bool' => false,
            ]);
        }
    }
}
