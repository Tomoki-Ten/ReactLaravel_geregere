<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            [
                'name' => 'geregere',
                'email' => 'geregere@gmail.com',
                'password' => '$2y$10$4jZpSayVOdS1JGjyoVrBbeHvt4hrOIMAtvOAKZwPZJe6M5cYJV2oa',
            ],
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => '$2y$10$4jZpSayVOdS1JGjyoVrBbeHvt4hrOIMAtvOAKZwPZJe6M5cYJV2oa',
            ],
        );
    }
}
