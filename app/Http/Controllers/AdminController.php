<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Program;
use Inertia\Inertia;

class AdminController extends Controller
{
    function dashboard()
    {
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => Program::all(),
        ]);
    }

    function programs()
    {
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => Program::all(),
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
