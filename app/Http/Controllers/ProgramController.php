<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Inertia\Inertia;

class ProgramController extends Controller
{
    public function show() {
        return Inertia::render('PhdPrograms', [
            'programs' => Program::all(),
        ]);
    }
}
