<?php

namespace App\Http\Controllers\Form;
use App\Models\MasterDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class MasterForm extends BaseForm {

    protected array $validationRules = [
        'mBranch' => ['required'],
        'mEstablishment' => ['required'],
        'mYear' => ['required', 'numeric'],
        'semester7' => ['required', 'numeric'],
        'semester8' => ['required', 'numeric'],
        'semester9' => ['required', 'numeric'],
        'semester10' => ['required', 'numeric'],
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
            $master = $applications->first()->masterDetail;

            if ($master) {
                return $this->update($master);
            }
        }
        return $this->store();
    }

    public function store()
    {
        //creating a BacDetails row associated with the candidate
        $master = new MasterDetails([
            'application_id' => $this->request->input('application_id'),
            'mBranch' => $this->request->input('mBranch'),
            'mEstablishment' => $this->request->input('mEstablishment'),
            'mYear' => $this->request->input('mYear'),
            'semester7' => $this->request->input('semester7'),
            'semester8' => $this->request->input('semester8'),
            'semester9' => $this->request->input('semester9'),
            'semester10' => $this->request->input('semester10'),
        ]);

        $master->save();
        $master->addMediaFromRequest('masterDiploma')
            ->toMediaCollection();
        return $master->id;
    }

    public function update($master)
    {
        $master->mBranch = $this->request->input('mBranch');
        $master->mYear = $this->request->input('mYear');
        $master->mEstablishment = $this->request->input('mEstablishment');
        $master->semester7 = $this->request->input('semester7');
        $master->semester8 = $this->request->input('semester8');
        $master->semester9 = $this->request->input('semester9');
        $master->semester10 = $this->request->input('semester10');

        $master->save();
        $existingMedia = $master->getFirstMedia();

        if ($existingMedia && $this->request->hasFile('masterDiploma')) {
            $existingMedia->delete();
            $master->addMediaFromRequest('masterDiploma')
            ->toMediaCollection();
        }


        return $master->id;
    }
}
