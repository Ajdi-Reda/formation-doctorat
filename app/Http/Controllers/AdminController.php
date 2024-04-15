<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        return Inertia::render('Admin/AdminDashboard');
    }

    function programs()
    {
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => Program::all(),
        ]);
    }
}
