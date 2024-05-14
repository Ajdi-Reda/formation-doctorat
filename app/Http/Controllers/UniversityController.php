<?php

namespace App\Http\Controllers;

use App\Models\University;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UniversityController extends Controller
{
    // Display a listing of the universities.
    public function index()
    {
        $universities = University::all();
        return Inertia::render(
            "Admin/University/Universities",
            [
                "universities" => $universities
            ]
        );
    }

    // Store a newly created university in storage.
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'Chancellor' => 'required|string|max:255',
            'ChancellorEmail' => 'required|email|max:255',
            'ChancellorPhoneNumber' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        University::create($request->all());

        return redirect()->route('admin/universities');
    }

    // Update the specified university in storage.
    public function update(Request $request, University $university)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'Chancellor' => 'required|string|max:255',
            'ChancellorEmail' => 'required|email|max:255',
            'ChancellorPhoneNumber' => 'required|string|max:20',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $university->update($request->all());

        return redirect()->route('admin/universities');
    }

    // Remove the specified university from storage.
    public function destroy(University $university)
    {
        $university->delete();
        return redirect()->route('admin/universities');
    }
}
