<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Form\FormEnum;
use App\Http\Controllers\Form\QualificationsForm;
use App\Http\Controllers\Form\PersonalDetailsForm;

class ApplicationController extends Controller
{
   public function saveCourseForm(Request $request)
   {
      $request->session()->put('course', $request->getContent());
   }
   public function saveForm(Request $request)
   {
      $formName = FormEnum::getFormClass($request->input('formName'));
      $form = new $formName($request);
      $form->handle();
   }
}
