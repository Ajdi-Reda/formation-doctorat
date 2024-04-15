<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Spatie\MediaLibrary\Support\MediaStream;

class DownloadMediaController
{
    public function download(Candidate $candidate, Request $request)
    {
        $cvMedia = $candidate->getMedia('cv');
        $recLetter1 = $candidate->getMedia('recommendationLetter1');
        $recLetter2 = $candidate->getMedia('recommendationLetter2');

        // Retrieve media items from the Application model
        $application = Application::where('candidate_id', $candidate->id)
            ->where('thesis_proposal_id', $request->input('thesisId'))->first();

        // Retrieve media items from the related models
        $bac = $application->bacDetail->getMedia();
        $licence = $application->licenceDetail->getMedia();
        $master = $application->masterDetail->getMedia();

        // merging all the media collections
        $downloads = $cvMedia->merge($recLetter1)->merge($recLetter2)
            ->merge($bac)->merge($licence)->merge($master);

        return MediaStream::create('candidate_files.zip')->addMedia($downloads);

    }
}
