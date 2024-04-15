<?php

namespace App\Http\Controllers\Professor;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfessorController extends Controller {
    public function __construct() {
        $this->middleware('auth');
    }
    private function getCandidatesWithStatus($status) {
        $professor = Auth::user()->professor;
        $applicants = $professor->theses->map(function ($thesis) use($status) {
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
    public function dashboard() {
        return Inertia::render('Professor/Dashboard', [
          'applicants' => $this->getCandidatesWithStatus('pending')
        ]);
    }

    public function getCandidateData (Request $request, Candidate $candidate) {
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
            if($bacDetail->getFirstMedia() && $licenceDetail->getFirstMedia() && $masterDetail->getFirstMedia()) {
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

            return Inertia::render('Professor/CandidateData', [
                'candidateData' => $data
            ]);
                }
    }

    public function approvedApplicants () {
        return Inertia::render('Professor/ApprovedApplicants', [
            'approvedApplicants' => $this->getCandidatesWithStatus('approved'),
        ]);
    }

    public function acceptedApplicants () {
        return Inertia::render('Professor/AcceptedApplicants', [
            'acceptedApplicants' => $this->getCandidatesWithStatus('accepted'),
        ]);
    }
}
