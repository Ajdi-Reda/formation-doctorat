<?php

namespace App\Http\Controllers;

use App\Enums\FormEnum;
use App\Models\Application;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function saveCourseForm(Request $request)
    {
        session(['course' => $request->input('theses')]);
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
