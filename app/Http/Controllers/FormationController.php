<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormationController extends Controller
{
        public function index() {
        return Inertia::render('Formations', [
           'formations' => Formation::all()
        ]);
    }

}
