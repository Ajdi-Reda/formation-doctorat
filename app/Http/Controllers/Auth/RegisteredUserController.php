<?php

namespace App\Http\Controllers\Auth;

use App\Enums\RolesEnum;
use App\Http\Controllers\Controller;
use App\Models\Invitation;
use App\Models\Professor;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole(RolesEnum::CANDIDATE);
        event(new Registered($user));

        Auth::login($user);

        return redirect($this->redirectTo());
    }

    public function redirectTo()
    {
        $role = Auth::user()->getRoleNames()->first();
        return match ($role) {
            RolesEnum::CANDIDATE->value => RolesEnum::CANDIDATE->dashboardRoute(),
            RolesEnum::PROFESSOR->value => RolesEnum::PROFESSOR->dashboardRoute(),
            RolesEnum::SUPERADMIN->value => RolesEnum::SUPERADMIN->dashboardRoute(),
            default => '/',
        };
    }

    public function showRegistrationForm(Request $request)
    {
        $invitation_token = $request->get('invitation_token');
        $invitation = Invitation::where('invitation_token', $invitation_token)->firstOrFail();
        $email = $invitation->email;

        return Inertia::render('Professor/RegisterForm', [
            'email' => $email,
            'universityId' => $invitation->university_id,
        ]);
    }

    public function storeProfessor(Request $request)
    {
        $request->validate([
            'university_id' => 'required|integer|exists:universities,id',
            'firstName' => 'required|string|max:30',
            'lastName' => 'required|string|max:30',
            'email' => 'required|string|email',
            'phoneNumber' => 'required|string|max:30',
        ]);

        $user = User::create([
            'name' => $request->input('lastName'),
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        $user->assignRole(RolesEnum::PROFESSOR);
        Professor::create([
            'university_id' => $request->input('university_id'),
            'user_id' => $user->id,
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'phoneNumber' => $request->input('phoneNumber'),
        ]);

        event(new Registered($user));
        return redirect("/login");
    }
}
