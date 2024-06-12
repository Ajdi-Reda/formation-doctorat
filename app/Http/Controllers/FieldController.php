<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\ProgramUniversity;
use App\Services\FormData;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class FieldController extends Controller
{

    public function display(int $programId)
    {
        $programUniversities = ProgramUniversity::with(['fields.thesisProposals', 'university', 'program'])
            ->whereHas('program', function ($query) use ($programId) {
                $query->where('id', $programId);
            })
            ->get();

        $fields = $programUniversities->flatMap(function ($programUniversity) {
            return $programUniversity->fields->map(function ($field) use ($programUniversity) {
                $field->startDate = $programUniversity->program->startDate;
                $field->endDate = $programUniversity->program->endDate;
                $field->universityName = $programUniversity->university->name;
                $field->address = $programUniversity->university->address;
                $field->program_university_id = $programUniversity->id;
                $field->theses = $field->thesisProposals;

                return $field;
            });
        });


        $formData = new FormData();
        return Inertia::render('Candidature', [
            'fields' => $fields,
            'formData' => $formData->getFormData(),
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'data.programId' => 'required|exists:programs,id',
            'data.universityId' => 'required|exists:universities,id',
            'data.name' => 'required|string',
            'data.description' => 'required|string',
        ]);


        $field = Field::create([
            'program_id' => $validated['data']['programId'],
            'name' => $validated['data']['name'],
            'description' => $validated['data']['description'],
        ]);

        $programUniversity = ProgramUniversity::where([
            'university_id' => $validated['data']['universityId'],
            'program_id' => $validated['data']['programId'],
        ])->firstOrFail();

        $programUniversity->fields()->attach($field);
    }


    public function update(Request $request, Field $field)
    {
        $validated = $request->validate([
            'data.programId' => 'required|exists:programs,id',
            'data.universityId' => 'required|exists:universities,id',
            'data.name' => 'required|string',
            'data.description' => 'required|string',
        ]);


        $field->update([
            'program_id' => $validated['data']['programId'],
            'name' => $validated['data']['name'],
            'description' => $validated['data']['description'],
        ]);

        $programUniversity = ProgramUniversity::where([
            'university_id' => $validated['data']['universityId'],
            'program_id' => $validated['data']['programId'],
        ])->firstOrFail();

        $programUniversity->fields()->sync($field);
    }


    public function destroy(Field $field)
    {
        $field->programUniversities()->detach();
        $field->delete();
    }
}
