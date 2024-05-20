<?php

namespace App\Http\Controllers\Professor;

use App\Enums\RolesEnum;
use App\Http\Controllers\Controller;
use App\Http\Controllers\EmailController;
use App\Models\Candidate;
use App\Models\Invitation;
use App\Models\Professor;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class ProfessorController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function professors()
    {
        $professors = Professor::with('university')->get();
        foreach ($professors as $professor) {
            $professor->email = $professor->user->email;
            $professor->numberTheses = $professor->theses->count();
        }
        return Inertia::render('Admin/Professors', [
            'professors' => $professors,
            'universities' => University::all()
        ]);
    }

    public function update(Request $request, Professor $professor)
    {
        $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email',
            'phoneNumber' => 'required|string|max:255',
        ]);

        $professor->user->update([
            'name' => $request->input('lastName'),
            'email' => $request->input('email'),
        ]);

        $professor->update([
            'user_id' => Auth::user()->id,
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'phoneNumber' => $request->input('phoneNumber'),
        ]);
    }

    public function destroy(Professor $professor)
    {
        $professor->delete();
        $professor->user->delete();
    }
    private function getCandidatesWithStatus($status)
    {
        $professor = Auth::user()->professor;
        $applicants = $professor->theses->map(function ($thesis) use ($status) {
            return [
                'id' => $thesis->id,
                'title' => $thesis->title,
                'description' => $thesis->description,
                $status . 'Candidates' => $thesis->{$status . 'Candidates'}->map(function ($candidate) {
                    $candidate->email = $candidate->user->email;
                    return $candidate;
                }),
            ];
        });
        return $applicants;
    }
    public function dashboard()
    {
        return Inertia::render('Professor/Dashboard', [
            'applicants' => $this->getCandidatesWithStatus('pending')
        ]);
    }

    public function getCandidateData(Request $request, Candidate $candidate)
    {
        $data = collect();
        $application = $candidate->applications()->first();
        if ($application) {
            $candidate->cv = $candidate->getFirstMedia('cv')->getUrl();
            $candidate->recommendationLetter1 = $candidate
                ->getFirstMedia('recommendationLetter1')
                ->getUrl();
            $candidate->recommendationLetter2 = $candidate
                ->getFirstMedia('recommendationLetter2')
                ->getUrl();

            $bacDetail = $application->bacDetail;
            $licenceDetail = $application->licenceDetail;
            $masterDetail = $application->masterDetail;
            $thesisId = $request->thesisId;
            if ($bacDetail->getFirstMedia() && $licenceDetail->getFirstMedia() && $masterDetail->getFirstMedia()) {
                $bacDetail->bacDiploma = $bacDetail->getFirstMedia()->getUrl();
                $licenceDetail->licenceDiploma = $licenceDetail->getFirstMedia()->getUrl();
                $masterDetail->masterDiploma = $masterDetail->getFirstMedia()->getUrl();
            }


            $data = $data->merge([
                'personalData' => $candidate,
                'bacDetails' => $bacDetail,
                'licenceDetails' => $licenceDetail,
                'masterDetails' => $masterDetail,
                'thesisId' => $thesisId,
            ]);

            $role = Auth::user()->getRoleNames()->first();
            return Inertia::render('Professor/CandidateData', [
                'candidateData' => $data,
                'showActionButton' => $role === 'professor' ? true : false,
            ]);
        }
    }

    public function approvedApplicants()
    {
        return Inertia::render('Professor/ApprovedApplicants', [
            'approvedApplicants' => $this->getCandidatesWithStatus('approved'),
        ]);
    }

    public function acceptedApplicants()
    {
        return Inertia::render('Professor/AcceptedApplicants', [
            'acceptedApplicants' => $this->getCandidatesWithStatus('accepted'),
        ]);
    }

    public function getProfessorThesesWithApplicants(Professor $professor)
    {
        $theses = $professor->theses;
        foreach ($theses as $thesis) {
            $thesis->pendingCandidates = $thesis->pendingCandidates->map(function ($candidate) {
                $candidate->email = $candidate->user->email;
                return $candidate;
            });
            $thesis->approvedCandidates = $thesis->approvedCandidates->map(function ($candidate) {
                $candidate->email = $candidate->user->email;
                return $candidate;
            });
            $thesis->acceptedCandidates = $thesis->acceptedCandidates->map(function ($candidate) {
                $candidate->email = $candidate->user->email;
                return $candidate;
            });
        }
        $professorName = $professor->firstName . ' ' . $professor->lastName;
        return Inertia::render('Admin/ProfessorTheses', [
            'theses' => $theses,
            'professorName' => $professorName
        ]);
    }
}
