<?php

namespace App\Http\Controllers\Candidate;

use App\Enums\CandidateStatus;
use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function dashboard()
    {
        $applications = collect();
        $completed = false;
        $candidate = Auth::user()->candidate;
        if ($candidate && $candidate->applications->isNotEmpty()) {
            foreach ($candidate->applications as $application) {
                $application->completed = true;
                $application->save();
                $applicationData = [
                    'id' => $application->id,
                    'thesisId' => $application->thesisProposal->id,
                    'thesisTitle' => $application->thesisProposal->title,
                    'status' => $application->status,
                    'accepted' => $application->accepted,
                    'thesisOutline' => $application->accepted ? ($application->thesisProposal
                        ->getFirstMedia() ? $application->thesisProposal
                        ->getFirstMedia()
                        ->getUrl() : '') : '',
                ];
                $applications->add($applicationData);
            }
            $completed = $candidate->applications->first()->completed;
        }

        return Inertia::render('Candidate/Dashboard', [
            'completed' => $completed,
            'programs' =>  Program::all(),
            'applications' => $applications
        ]);
    }

    public function form()
    {
        return Inertia::render('Candidate/MultiStepForm', [
            'programs' =>  Program::all(),
        ]);
    }


    public function updateStatus(Request $request, Candidate $candidate)
    {
        $application =  $candidate->applications->where('thesis_proposal_id', $request->thesisId)->first();
        $message = 'Candidate status changed to pending';

        if ($request->accepted === CandidateStatus::Accepted->value) {
            $application->status = CandidateStatus::Accepted;
            $message = 'Candidate succefully accepted!';
        } else if ($request->accepted === CandidateStatus::Rejected->value) {
            $application->status = CandidateStatus::Rejected;
            $message = 'Candidate succefully rejected!';
        } else if ($request->accepted === CandidateStatus::Pending->value) {
            $application->status = CandidateStatus::Pending;
        }
        $application->save();
        return redirect('professor/dashboard')->with('message', $message);
    }
}
