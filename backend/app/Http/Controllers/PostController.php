<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * List
     * @return
     */
    public function list()
    {
        \Log::debug("@list");
        $model = new Post();
        $post = $model->query()->select('*')->get();
        \Log::debug($post);
        return $post;
    }
    
    /**
     * Create
     * @param Request $request
     * @return 
     */
    public function create(Request $request)
    {
        \Log::debug("@request");
        \Log::debug($request);
        try {
            $post = new Post();
    
            $post->user_id = 0;
            $post->title = $request->title;
            $post->text = $request->text;
            $post->check = $request->check;
            $post->bool = $request->bool;
            $post->save();

            return response()->json(['status' => 'success']);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json(['status' => 'failed']);
        }
    }
}
