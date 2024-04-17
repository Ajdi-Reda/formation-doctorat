<?php

namespace App\Http\Middleware;

use App\Enums\RolesEnum;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AdminOrProfessor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        // Check if the user is authenticated and has either the admin or professor role
        if (Auth::check() && (Auth::user()->hasRole(RolesEnum::SUPERADMIN->value) || Auth::user()->hasRole(RolesEnum::PROFESSOR->value))) {
            return $next($request);
        }

        return redirect('/'); // Redirect to home if user doesn't have required roles.
    }
}
