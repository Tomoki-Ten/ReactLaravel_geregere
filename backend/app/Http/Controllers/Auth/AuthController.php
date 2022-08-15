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
        if (Auth::check()) {
            return response()->json(['status' => 'Authorized'], 200);
        } else {
            return response()->json(['status' => 'Unauthorized'], 401);
        }
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

    public function logout(Request $request)
    {
        // Invalid User Accessed
        if (!Auth::check()) {
            return response()->json(['status' => 'Not Found'], 404);
        } 
        Auth::guard('web')->logout();
        // Auth::logout();
        // Auth::guard('sanctum')->user()->tokens()->delete();
        return response()->json(['status' => 'Logout'], 200);
    }
}
