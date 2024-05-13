<?php

use App\Http\Controllers\InvitationController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Candidate\CandidateController;
use App\Http\Controllers\DownloadMediaController;
use App\Http\Controllers\Professor\ProfessorController;
use App\Http\Controllers\Professor\ThesisController;
use App\Http\Middleware\AdminOrProfessor;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\EmailController;
use App\Http\Middleware\Admin;
use App\Mail\MyEmail;
use Illuminate\Support\Facades\Mail;

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
    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/programs', [ProgramController::class, 'show'])->name('programs');
Route::get('/programs/{program}', [FieldController::class, 'display']);
Route::post('/form1', [ApplicationController::class, 'saveCourseForm']);
Route::post('/form2', [ApplicationController::class, 'saveForm']);

Route::get('/send-email', [EmailController::class, 'sendEmail'])->middleware(['auth', Admin::class]);


//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('candidate')->middleware(['auth', 'candidate'])->group(function () {
    Route::get('/dashboard', [CandidateController::class, 'dashboard'])->name('candidate/dashboard');
    Route::get('/applications', [CandidateController::class, 'applications']);
    Route::post('/application/{application}', [ApplicationController::class, 'acceptApplication']);
    // Route::get('/form', [CandidateController::class, 'form']);
    // Route::get('/programs/{program}', [FieldController::class, 'display']);
});

Route::prefix('professor')->middleware(['auth', 'professor'])->group(function () {
    Route::get('/dashboard', [ProfessorController::class, 'dashboard'])->name('professor/dashboard');
    Route::get('/dashboard/candidate/{candidate}', [ProfessorController::class, 'getCandidateData']);
    Route::post('/dashboard/candidate/{candidate}/status', [CandidateController::class, 'updateStatus']);
    Route::get('/approved-applicants', [ProfessorController::class, 'approvedApplicants'])
        ->name('professor/approved-applicants');
    Route::get('/accepted-applicants', [ProfessorController::class, 'acceptedApplicants'])
        ->name('professor/accepted-applicants');
    Route::get('/theses', [ThesisController::class, 'index'])
        ->name('professor/theses');
    Route::post('/theses', [ThesisController::class, 'store']);
    Route::post('/theses/{thesisProposal}', [ThesisController::class, 'update']);
    Route::post('/theses/destroy/{thesisProposal}', [ThesisController::class, 'destroy']);
});
Route::get('professor/download/{candidate}', [DownloadMediaController::class, 'download'])->middleware(['auth', AdminOrProfessor::class]);

Route::prefix('admin')->middleware(['auth', Admin::class])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin/dashboard');
    Route::get('/programs', [AdminController::class, 'programs'])->name('admin/programs');
    Route::post('/programs', [ProgramController::class, 'store'])->name('admin/programs');
    Route::post('/programs/{program}', [ProgramController::class, 'update']);
    Route::delete('/programs/destroy/{program}', [ProgramController::class, 'destroy']);
    Route::get('/fields', [AdminController::class, 'fields'])->name('admin/fields');
    Route::post('/fields', [FieldController::class, 'store'])->name('admin/fields');
    Route::patch('/fields/{field}', [FieldController::class, 'update']);
    Route::delete('/fields/{field}', [FieldController::class, 'destroy']);
    Route::get('/professors', [ProfessorController::class, 'professors'])->name('admin/professors');
    Route::get('/professors/{professor}', [ProfessorController::class, 'getProfessorThesesWithApplicants']);
    Route::post('/professors', [ProfessorController::class, 'store'])->name('admin/professors');
    Route::patch('/professors/{professor}', [ProfessorController::class, 'update']);
    Route::delete('/professors/{professor}', [ProfessorController::class, 'destroy']);
    Route::get('/professor/candidate/{candidate}', [ProfessorController::class, 'getCandidateData']);
    Route::post('/professors/invitations', [InvitationController::class, 'store']);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('register-professor', [RegisteredUserController::class, 'showRegistrationForm'])
    ->name('registerProfessor');

Route::post('register-professor', [RegisteredUserController::class, 'storeProfessor'])
    ->name('registerProfessor');
require __DIR__ . '/auth.php';
