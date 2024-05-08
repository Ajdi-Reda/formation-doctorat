<?php

namespace App\Http\Controllers;

use App\Mail\MyEmail;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function sendEmail($recipient, $name, $message)
    {
        Mail::to($recipient)->send(new MyEmail($name, $message));
    }
}
