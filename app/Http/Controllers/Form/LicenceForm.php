<?php

namespace App\Http\Controllers\Form;

use App\Models\LicenceDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class LicenceForm extends BaseForm {

    protected array $validationRules = [
        'lType' => ["required"],
        'lBranch' => ["required"],
        'lYear' => ["required", "numeric"],
        'lEstablishment' => ["required"],
        'semester1' => ["required", 'numeric'],
        'semester2' => ["required", 'numeric'],
        'semester3' => ["required", 'numeric'],
        'semester4' => ["required", 'numeric'],
        'semester5' => ["required", 'numeric'],
        'semester6' => ["required", 'numeric'],
    ];
    public function __construct(Request $request)
    {
        parent::__construct($request);
    }
    public function handle()
    {
        $user = Auth::user();
        $applications = optional($user->candidate)->applications;
        if ($applications->isNotEmpty()) {
            $licence = $applications->first()->licenceDetail;

            if ($licence) {
                return $this->update($licence);
            }
        }
        return $this->store();
    }

    public function store()
    {
        $licence = new LicenceDetails([
            'lType' => $this->request->input('lType'),
            'lBranch' => $this->request->input('lBranch'),
            'lYear' => $this->request->input('lYear'),
            'lEstablishment' => $this->request->input('lEstablishment'),
            'semester1' => $this->request->input('semester1'),
            'semester2' => $this->request->input('semester2'),
            'semester3' => $this->request->input('semester3'),
            'semester4' => $this->request->input('semester4'),
            'semester5' => $this->request->input('semester5'),
            'semester6' => $this->request->input('semester6'),
        ]);

        $licence->save();
        $licence->addMediaFromRequest('licenceDiploma')
            ->toMediaCollection();
        return $licence->id;
    }

    public function update($licence)
    {
        $licence->lType = $this->request->input('lType');
        $licence->lBranch = $this->request->input('lBranch');
        $licence->lYear = $this->request->input('lYear');
        $licence->lEstablishment = $this->request->input('lEstablishment');
        $licence->semester1 = $this->request->input('semester1');
        $licence->semester2 = $this->request->input('semester2');
        $licence->semester3 = $this->request->input('semester3');
        $licence->semester4 = $this->request->input('semester4');
        $licence->semester5 = $this->request->input('semester5');
        $licence->semester6 = $this->request->input('semester6');

        $licence->save();
        $existingMedia = $licence->getFirstMedia();

        if ($existingMedia && $this->request->hasFile('licenceDiploma')) {
            $existingMedia->delete();
            $licence->addMediaFromRequest('licenceDiploma')
            ->toMediaCollection();
        }

        return $licence->id;
    }
}
