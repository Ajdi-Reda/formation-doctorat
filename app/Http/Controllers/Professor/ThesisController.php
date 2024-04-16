<?php

namespace App\Http\Controllers\Professor;

use App\Http\Controllers\Controller;
use App\Models\Program;
use App\Models\ThesisProposal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ThesisController extends Controller
{
    public function index()
    {
        $theses = collect();
        $programFields = collect();
        foreach (Auth::user()->professor->theses as $thesis) {
            $thesis->numberOfCandidates = $thesis->candidates->count();
            $theses->add($thesis);
        }

        foreach (Program::all() as $program) {
            $programData = [
                'id' => $program->id,
                'title' => $program->title,
                'fields' => $program->fields->map(function ($field) {
                    return ['id' => $field->id, 'name' => $field->name];
                }),
            ];
            $programFields->add($programData);
        }

        return Inertia::render('Professor/Theses', [
            'theses' => $theses,
            'programFields' => $programFields
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'max:255'],
            'description' => ['required'],
        ]);

        $thesis = ThesisProposal::create([
            'professor_id' => Auth::user()->professor->id,
            'field_id' => $request->fieldId,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        $thesis->addMediaFromRequest('thesisOutline')
            ->toMediaCollection();
    }

    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'title' => ['required', 'max:255'],
            'description' => ['required'],
        ]);

        $thesis = ThesisProposal::all()->find($request->id);

        $thesis->title = $request->title;
        $thesis->description = $request->description;
        $thesis->save();

        $existingMedia = $thesis->getFirstMedia();

        if ($existingMedia && $request->hasFile('thesisOutline')) {
            $existingMedia->delete();
            $thesis->addMediaFromRequest('thesisOutline')
                ->toMediaCollection();
        }
    }

    public function destroy(ThesisProposal $thesisProposal)
    {
        $thesisProposal->delete();
    }
}