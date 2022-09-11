<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    /**
     * List
     * @return
     */
    public function list(Request $request)
    {
        \Log::debug("@list");
        \Log::debug($request);
        try {
            $model = new Post();
            // \Log::debug("@here");
            // $post = DB::table('posts')
            //     ->select('*')
            //     ->get();
            $post = $model->allWithCommentNotTrushed(isset($request->inputSearch) ? $request->inputSearch : []);
            \Log::debug("@ret: post");
            \Log::debug($post);
            return response()->json(['posts' => $post], 200);

        } catch(\Exception $e) {
            \Log::debug("@Error: " . $e->getMessage());
            \Log::error("@ERROR: " . $e->getMessage());
            return response()->json(['posts' => [], 'status' => 'Failed'], 200);
        }
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
