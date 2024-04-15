<?php

namespace App\Http\Controllers;

use App\Enums\FormEnum;
use App\Models\Application;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ApplicationController extends Controller
{
    public function saveCourseForm(Request $request)
    {
        session(['course'=> $request->getContent()]);
    }
    public function saveForm(Request $request)
    {
        $formName = FormEnum::getFormClass($request->input('formName'));
        $form = new $formName($request);
    }

    public function acceptApplication(Request $request, Application $application)
    {
        $application->accepted = true;
        $application->save();
    }
}
