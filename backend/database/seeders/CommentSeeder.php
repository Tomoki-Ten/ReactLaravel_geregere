<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Post;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $postModel = new Post();

        $posts = $postModel->query()->select('*')->get();
        \Log::debug('@CommentSeeder: posts');
        \Log::debug($posts);

        $commentNumForEachPost = 5;

        foreach ($posts as $key => $post) {
            for ($i = 0; $i < $commentNumForEachPost; $i++) {
                DB::table('comments')->insert([
                    'post_id' => $post->id,
                    'title'   => 'comment_title: ' . Str::random(20),
                    'text'    => 'comment_text: ' . Str::random(200),
                ]);
            }
        }
    }
}
