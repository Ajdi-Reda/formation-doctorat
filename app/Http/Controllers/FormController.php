<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormController extends Controller
{
       public function handlePersonalDetailsForm(Request $request) {
       $userController = new UserController();
       $userController->store($request);
    }
}
