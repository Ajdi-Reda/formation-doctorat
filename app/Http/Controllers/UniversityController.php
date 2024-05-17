<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UniversityController extends Controller
{
    // Display a listing of the universities.
    public function index()
    {
        $universities = University::with('programs')->get();

        foreach ($universities as $university) {
            $university->programs = $university->programs->pluck('id', 'title');
        }

        return Inertia::render(
            "Admin/University/Universities",
            [
                "universities" => $universities,
                "programs" => Program::select('id', 'title')->get(),
            ]
        );
    }

    // Store a newly created university in storage.
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'chancellor' => 'required|string|max:255',
            'chancellorEmail' => 'required|email|max:255',
            'chancellorPhoneNumber' => 'required|string|max:20',
            'selectedPrograms' => 'required|array|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $uni =  University::create($request->all());

        $uni->attachPrograms($request->selectedPrograms);
        return redirect()->route('admin/universities');
    }

    // Update the specified university in storage.
    public function update(Request $request, University $university)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'chancellor' => 'required|string|max:255',
            'chancellorEmail' => 'required|email|max:255',
            'chancellorPhoneNumber' => 'required|string|max:20',
            'selectedPrograms' => 'required|array|min:1',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $university->update($request->all());
        $university->updateAttachedPrograms($request->selectedPrograms);

        return redirect()->route('admin/universities');
    }

    // Remove the specified university from storage.
    public function destroy(University $university)
    {
        $university->deleteAttachedPrograms();
        $university->delete();
        return redirect()->route('admin/universities');
    }
}
