<?php

namespace App\Http\Controllers\Form;

use App\Models\BacDetails;
use App\Models\User;
use App\Models\Candidate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Form\BaseForm;

class BacForm extends BaseForm {

    protected array $validationRules = [
        'bYear' => ["required", 'numeric'],
        'city' => ["required", 'max:30'],
        'bEstablishment' => ["required", 'max:40'],
        'massarCode' => ["required"],
        'option' => ["required"],
        'mention' => ["required"],
        'bacAverage' => ["required", 'numeric'],
        'nationalBacAverage' => ["required", 'numeric'],
        'regionalExamAverage' => ["required", 'numeric'],
    ];

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function  handle()
    {
        $user = Auth::user();
        $applications = optional($user->candidate)->applications;
        if ($applications->isNotEmpty()) {
            $bac = $applications->first()->bacDetail;

            if ($bac) {
                return $this->update($bac);
            }
        }
       return $this->store();
    }

    public function store()
    {
        //creating a BacDetails row associated with the candidate
        $bac = new BacDetails([
            'bYear' => $this->request->input('bYear'),
            'city' => $this->request->input('city'),
            'bEstablishment' => $this->request->input('bEstablishment'),
            'massarCode' => $this->request->input('massarCode'),
            'option' => $this->request->input('option'),
            'mention' => $this->request->input('mention'),
            'bacAverage' => $this->request->input('bacAverage'),
            'nationalBacAverage' => $this->request->input('nationalBacAverage'),
            'regionalExamAverage' => $this->request->input('regionalExamAverage'),
        ]);

        $bac->save();
        $bac->addMediaFromRequest('bacDiploma')
            ->toMediaCollection();
        return $bac->id;
    }

    public function update($bac)
    {
        $bac->bYear = $this->request->input('bYear');
        $bac->city = $this->request->input('city');
        $bac->bEstablishment = $this->request->input('bEstablishment');
        $bac->massarCode = $this->request->input('massarCode');
        $bac->option = $this->request->input('option');
        $bac->mention = $this->request->input('mention');
        $bac->bacAverage = $this->request->input('bacAverage');
        $bac->nationalBacAverage = $this->request->input('nationalBacAverage');
        $bac->regionalExamAverage = $this->request->input('regionalExamAverage');

        $bac->save();
        $existingMedia = $bac->getFirstMedia();

        if ($existingMedia && $this->request->hasFile('bacDiploma')) {
            $existingMedia->delete();
            $bac->addMediaFromRequest('bacDiploma')
            ->toMediaCollection();
        }


        return $bac->id;
    }

}
