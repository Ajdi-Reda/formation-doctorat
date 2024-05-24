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
    public function fields()
    {
        $universities = University::with(['programs.fields'])->get();
        $universities = $universities->map(function ($university) {
            $university->programs = $university->programs->map(function ($program) {
                return [
                    'id' => $program->id,
                    'title' => $program->title,
                    'fields' => $program->fields->pluck('id', 'name')
                ];
            });

            return $university;
        });

        $fields = Field::withCount('thesisProposals')->get();
        return Inertia::render('Admin/Fields', [
            'universities' => $universities,
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
