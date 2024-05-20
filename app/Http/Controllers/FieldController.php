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
        // Validate the incoming request
        try {
            // Validate the incoming request
            $validated = $request->validate([
                'universityIds' => 'required|array',
                'universityIds.*' => 'required|exists:universities,id', // Each item in the array should exist in the universities table
                'programId' => 'required|exists:programs,id',
                'name' => 'required|string',
                'description' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            // Dump and die the validation errors
            dd($e->errors());
        }

        $field = Field::create([
            'name' => $validated['name'],
            'description' => $validated['description'],
        ]);

        foreach ($validated['universityIds'] as $universityId) {
            $programUniversity = ProgramUniversity::where([
                'university_id' => $universityId,
                'program_id' => $validated['programId'],
            ])->firstOrFail();

            $programUniversity->fields()->attach($field);
        }
    }



    public function update(Request $request, Field $field)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        $field->update($validated);

        return redirect()->back();
    }


    public function destroy(Field $field)
    {
        $field->delete();

        return redirect()->back();
    }
}
