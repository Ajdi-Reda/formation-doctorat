<?php

namespace App\Http\Controllers;

use session;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
   public function save(Request $request) {
      $request->session()->put('user', $request->getContent());
    }
}
