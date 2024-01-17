<?php

use Inertia\Inertia;
use App\Mail\MyTestEmail;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\ApplicationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('LandingPage');
});

Route::get('/programs', [ProgramController::class, 'show'])->name('programs');
Route::get('/programs/{program}', [FieldController::class, 'display']);
Route::post('/form1', [ApplicationController::class, 'saveCourseForm']);
Route::post('/form2', [ApplicationController::class, 'saveForm']);

Route::get('/testroute', function () {

    // The email sending is done using the to method on the Mail facade
    Mail::to('testreceiver@gmail.com')->send(new MyTestEmail());
});


