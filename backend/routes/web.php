<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/no_cre', [AuthController::class, 'no_cre']);
Route::get('/test', function () {
    return 'test';
});

/* LOGIN */
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::group(['middleware' => ['auth:sanctum'], 'prefix' => 'auth'], function() {
    /* CONFIRM */
    Route::get('/confirm', [AuthController::class, 'confirm'])->name('confirm');

    /**
     * POST
     */
    Route::group(['prefix' => 'post'], function() {
        Route::get('/list', [PostController::class, 'list'])->name('list');
        Route::post('/create',   [PostController::class, 'create'])->name('create');
    });

});

