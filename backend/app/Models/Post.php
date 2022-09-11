<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Post extends Model
{
    use HasFactory;

    
    /**
     * 
     */
    public function allWithCommentNotTrushed(array $params)
    {
        \Log::debug("@params");
        \Log::debug($params);

        $sql = "SELECT DISTINCT ";
        $sql .= "posts.id AS id, ";
        $sql .= "posts.title AS title, ";
        $sql .= "posts.text AS text, ";
        $sql .= "comments.id AS comment_id, ";
        $sql .= "comments.post_id AS comment_post_id, ";
        $sql .= "comments.title AS comment_title, ";
        $sql .= "comments.text AS comment_text ";
        $sql .= "FROM posts LEFT JOIN comments ON posts.id = comments.post_id";

        $andFlag = false;
        if (isset($params['id'])) {
            $sql .= " WHERE posts.id = ". $params['id'];
            $andFlag = true;
        }
        if (isset($params['title'])) {
            $and = $andFlag ? " AND" : " WHERE";
            $sql .=  "$and posts.title LIKE '%" . $params['title'] . "%' ";
            $andFlag = true;
        }
        if (isset($params['text'])) {
            $and = $andFlag ? " AND" : " WHERE";
            $sql .= "$and posts.text LIKE '%" . $params['text'] . "%' ";
            $andFlag = true;
        }
        
        \Log::debug("@sql");
        \Log::debug($sql);
        
        $posts = DB::select(DB::raw($sql));
        $tmpArray = [];
        $data = [];
        foreach ($posts as $key => $post) {
            if ( !isset($tmpArray[$post->id])) {
                $tmpArray[$post->id]['id'] = $post->id;
                $tmpArray[$post->id]['title'] = $post->title;
                $tmpArray[$post->id]['text'] = $post->text;
            }
            if ( $post->comment_id === null) {
                $tmpArray[$post->id]['comments'] = [];
            } else {
                $tmpArray[$post->id]['comments'][] = $post;
            }

            if (isset($posts[$key + 1])) {
                if ($posts[$key]->id < $posts[$key + 1]->id) {
                    $data[] = $tmpArray[$post->id];
                }
            } else {
                $data[] = $tmpArray[$post->id];
            }
        }
        \Log::debug("@data");
        \Log::debug($data);
        return $data;
    }
}
