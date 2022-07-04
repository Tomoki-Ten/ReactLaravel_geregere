<?php

namespace App\Http\Controllers\Auth;
// use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function confirm()
    {
        \Log::debug('[+] Confirm');
        if (Auth::check()) {
            return response()->json(['status' => 'Authorized'], 200);
        } else {
            return response()->json(['status' => 'Unauthorized'], 401);
        }
        // return 'successfully accessed!';
    }

    public function no_cre()
    {
        \Log::debug('no_cre');
        return 'no_cre';
    }

    public function login(Request $request)
    {
        $user_info = [
            'name' => $request->name,
            'password' => $request->password
        ];
        if (Auth::attempt($user_info)) {
            $request->session()->regenerate();
            return response()->json(['status' => 'login'], 200);
        }
        return response()->json(['status' => 'Unauthorized'], 401);
    }
}
