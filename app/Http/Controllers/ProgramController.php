<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
    public function show()
    {
        return Inertia::render('PhdPrograms', [
            'programs' => Program::all(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'responsable' => 'required|string|max:255',
            'status' => 'required|string',
            'icon' => 'nullable|image|max:10240',
        ]);

        $program = new Program();
        $program->title = $request->title;
        $program->description = $request->description;
        $program->startDate = $request->startDate;
        $program->endDate = $request->endDate;
        $program->responsible = $request->responsable;
        $program->status = $request->status;

        // Handle icon upload if provided
        if ($request->hasFile('icon')) {
            $program->addMediaFromRequest('icon')
                ->toMediaCollection('programIcons');
        }

        $program->save();
    }

    public function update(Request $request, Program $program)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'responsable' => 'required|string|max:255',
            'status' => 'required|string|in:ongoing,completed,upcoming',
        ]);

        $program->update([
            'title' => $request->title,
            'description' => $request->description,
            'startDate' => $request->startDate,
            'endDate' => $request->endDate,
            'responsible' => $request->responsable,
            'status' => $request->status,
        ]);

        $existingMedia = $program->getFirstMedia();

        if ($existingMedia && $request->hasFile('icon')) {
            $request->validate([
                'icon' => 'nullable|image|max:10240', // Assuming 'icon' is an image upload
            ]);
            $existingMedia->delete();
            $program->addMediaFromRequest('icon')
                ->toMediaCollection();
        }
    }

    public function destroy(Program $program)
    {
        $program->delete();
    }
}
