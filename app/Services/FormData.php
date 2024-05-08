<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class FormData
{
    protected $formData;

    public function __construct()
    {
        $user = Auth::user();

        if ($user) {
            $candidate = $user->candidate;
            if ($candidate) {
                $this->formData = collect([
                    'personalData' => $candidate,
                ]);

                if ($candidate->applications->isNotEmpty()) {
                    $application = $candidate->applications->first();
                    if ($application) {
                        $bacDetail = $application->bacDetail;
                        $licenceDetail = $application->licenceDetail;
                        $masterDetail = $application->masterDetail;

                        $this->formData = $this->formData->merge([
                            'bacDetails' => $bacDetail,
                            'licenceDetails' => $licenceDetail,
                            'masterDetails' => $masterDetail,
                            'theses' => $user->candidate->thesisProposals,
                            'qualificationsFormCompleted' => ($bacDetail && $licenceDetail && $masterDetail),
                            'documentsFormCompleted' => ($candidate->getMedia('cv')->isNotEmpty() &&
                                $candidate->getMedia('recommendationLetter1')->isNotEmpty() &&
                                $candidate->getMedia('recommendationLetter2')->isNotEmpty())
                        ]);
                    }
                }
            } else {
                $this->formData = collect();
            }
        }
    }

    public function getFormData()
    {
        return $this->formData;
    }
}
