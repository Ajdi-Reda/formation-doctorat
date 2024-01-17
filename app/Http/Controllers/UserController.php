<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    //create/register user

    public function create()
    {
        return view('users.register');
    }

    public function store(Request $request)
    {
        $this->update($request);
    }
    // public function update(Request $request)
    // {
    //     $form = new PersonalDetailsForm($request);
    //     $form->handle();
    // }

    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('message', 'you have been logged out successfully');
    }

    //show login form
    public function login()
    {
        return view('users.login');
    }

    //login user
    public function authenticate(Request $request)
    {
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);

        if (auth()->attempt($formFields)) {
            $request->session()->regenerate();
            return redirect('/')->with('message', 'You are now logged in');
        }

        return back()->withErrors(['email' => 'invalid credentials'])->onlyInput('email');
    }
}
