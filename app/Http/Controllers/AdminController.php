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
            $program->universities = $program->universities()->pluck('universities.id', 'universities.name');
        }
        return Inertia::render('Admin/AdminPrograms', [
            'programs' => $programs,
            'universities' => University::select('id', 'name')->get(),
        ]);
    }

    function programs()
    {

        return Inertia::render('Admin/AdminPrograms', [
            'programs' => $this->getProgramsWithUniversitites(),
            'universities' => University::select('id', 'name')->get(),
        ]);
    }
    function fields()
    {
        $fields = Field::all()->each(function ($field) {
            $field->numberTheses = $field->thesisProposals()->count();
            dd($field->programUniversities);
            $field->program = $field->programUniversities->first()->program;
        });
        return Inertia::render('Admin/Fields', [
            'programs' => $this->getProgramsWithUniversitites(),
            'fields' => $fields
        ]);
    }

    private function getProgramsWithUniversitites()
    {
        $programs = Program::with('universities')->get();

        $programs->each(function ($program) {
            $program->universities = $program->universities->pluck('id', 'name');
        });
        return $programs;
    }
}
