<?php

namespace App\Http\Controllers\Form;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DocumentForm
{
    protected $mediaFieldMappings = ["cv", 'recommendationLetter1', 'recommendationLetter2'];
public function __construct(Request $request)
{
    $this->handle($request);
}

public function handle(Request $request) {
    $candidate = Auth::user()->candidate;

    foreach ($this->mediaFieldMappings as $mediaField) {
        $media = $candidate->getMedia($mediaField);
        if($media->isNotEmpty() && $request->hasFile($mediaField)) {
           $media->each->delete();
           $candidate->addMediaFromRequest($mediaField)->toMediaCollection($mediaField);
        }
        else if($media->isEmpty() && $request->hasFile($mediaField)) {
            $candidate->addMediaFromRequest($mediaField)
                ->toMediaCollection($mediaField);
        }
    }
}
}
