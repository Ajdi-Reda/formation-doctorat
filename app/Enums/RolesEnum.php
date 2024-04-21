<?php

namespace App\Enums;

use Illuminate\Support\Facades\Auth;

enum RolesEnum: string
{

    case CANDIDATE = 'candidate';
    case PROFESSOR = 'professor';
    case SUPERADMIN = 'super-admin';

    public function label(): string
    {
        return match ($this) {
            static::CANDIDATE => 'Candidate',
            static::PROFESSOR => 'Professor',
            static::SUPERADMIN => 'Super Admin',
        };
    }

    public function dashboardRoute(): string
    {
        $user = Auth::user();

        if ($user && $user->candidate && $user->candidate->applications->isNotEmpty()) {
            $completed = $user->candidate->applications->first()->completed;
        } else {
            $completed = false;
        }

        $candidateRoute = $completed ? 'candidate/dashboard' : 'candidate/form';

        return match ($this) {
            static::CANDIDATE => $candidateRoute,
            static::PROFESSOR => 'professor/dashboard',
            static::SUPERADMIN => 'admin/dashboard',
        };
    }
}
