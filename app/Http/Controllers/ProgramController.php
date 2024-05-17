<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;


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
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'responsible' => 'required|string|max:255',
            'status' => 'required|string|in:ongoing,completed,upcoming',
            'icon' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'selectedUniversities' => 'required|array|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Store icon
        $program = new Program();
        $program->title = $request->title;
        $program->description = $request->description;
        $program->startDate = $request->startDate;
        $program->endDate = $request->endDate;
        $program->responsible = $request->responsible;
        $program->status = $request->status;
        $program->addMediaFromRequest('icon')
            ->toMediaCollection('programIcons');
        $program->save();

        // Attach universities
        $program->attachUniversities($request->selectedUniversities);
    }



    public function update(Request $request, Program $program)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'responsible' => 'required|string|max:255',
            'status' => 'required|string|in:ongoing,completed,upcoming',
            'selectedUniversities' => 'required|array|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $program->update([
            'title' => $request->title,
            'description' => $request->description,
            'startDate' => $request->startDate,
            'endDate' => $request->endDate,
            'responsible' => $request->responsible,
            'status' => $request->status,
        ]);

        $existingMedia = $program->getFirstMedia();

        if ($existingMedia && $request->hasFile('icon')) {
            $request->validate([
                'icon' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            ]);
            $existingMedia->delete();
            $program->addMediaFromRequest('icon')
                ->toMediaCollection();
        }
        $program->updateAttachedUniversities($request->selectedUniversities);
    }

    public function destroy(Program $program)
    {
        $program->deleteAttachedUniversities();
        $program->delete();
    }
}
