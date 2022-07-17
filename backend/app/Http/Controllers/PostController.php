<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function list()
    {
        \Log::debug("@list");
        $model = new Post();
        $post = $model->query()->select('*')->get();
        \Log::debug($post);
        return $post;
    }
    
    public function create(Request $request)
    {
        \Log::debug("request");
        \Log::debug($request);

        $post = new Post();

        $post->user_id = 0;
        $post->title = $request->title;
        $post->text = $request->text;
        $post->check = $request->check;
        $post->bool = $request->bool;

        return $post->save();
    }
}
