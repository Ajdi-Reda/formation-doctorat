<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Program;
use App\Models\University;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        $programs = Program::with('universities')->get();

        foreach ($programs as $program) {
            $program->universities = $program->universities()->pluck('id', 'name');
        }
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => $programs,
            'universities' => University::select('id', 'name')->get(),
        ]);
    }

    function programs()
    {
        $programs = Program::with('universities')->get();

        foreach ($programs as $program) {
            $program->universities = $program->universities->pluck('id', 'name');
        }
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => $programs,
            'universities' => University::select('id', 'name')->get(),
        ]);
    }
    function fields()
    {
        $fields = Field::all();
        foreach ($fields as $field) {
            $field->numberTheses = $field->thesisProposals()->count();
        }
        return Inertia::render('Admin/Fields', [
            'programs' => Program::all(),
            'fields' => $fields
        ]);
    }
}
