<?php

namespace App\Http\Controllers\Form;


use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;


class PersonalDetailsForm extends BaseForm
{
    protected array $validationRules = [
        'firstName' => ["required", 'max:20'],
        'lastName' => ["required", 'max:20'],
        'phone_number' => ["required", 'numeric'],
        'cin' => ["required", 'max:10'],
        'dateOfBirth' => ["required", "date"],
        'countryOfBirth' => ["required"],
        'cityOfBirth' => ["required", 'max:20'],
        'nationality' => ["required", 'max:20'],
        'address' => ["required", 'max:40'],
        'postalCode' => ["required", "numeric"],
        'country' => ["required", 'max:30'],
        'city' => ["required", 'max:30'],
    ];

    public function __construct(Request $request)
    {
        parent::__construct($request);
        $this->handle();
    }

    public function handle()
    {
        $user = Auth::user();
        if ($user->candidate) {
            $this->update($user->candidate);
            return;
        }
        $this->store();
    }
    public function store()
    {
        $user = Auth::getUser();
        //creating a candidate row associated with that user
        $candidate = new Candidate([
            'user_id' => $user->id,
            'firstName' => $this->request->input('firstName'),
            'lastName' => $this->request->input('lastName'),
            'phone_number' => $this->request->input('phone_number'),
            'cin' => $this->request->input('cin'),
            'dateOfBirth' => $this->request->input('dateOfBirth'),
            'countryOfBirth' => $this->request->input('countryOfBirth'),
            'cityOfBirth' => $this->request->input('cityOfBirth'),
            'nationality' => $this->request->input('nationality'),
            'address' => $this->request->input('address'),
            'postalCode' => $this->request->input('postalCode'),
            'country' => $this->request->input('country'),
            'city' => $this->request->input('city'),
        ]);

        $candidate->save();
    }
    public function update($candidate)
    {
        $candidate->firstName = $this->request->input('firstName');
        $candidate->lastName = $this->request->input('lastName');
        $candidate->phone_number = $this->request->input('phone_number');
        $candidate->cin = $this->request->input('cin');
        $candidate->dateOfBirth = $this->request->input('dateOfBirth');
        $candidate->countryOfBirth = $this->request->input('countryOfBirth');
        $candidate->cityOfBirth = $this->request->input('cityOfBirth');
        $candidate->nationality = $this->request->input('nationality');
        $candidate->address = $this->request->input('address');
        $candidate->postalCode = $this->request->input('postalCode');
        $candidate->country = $this->request->input('country');
        $candidate->city = $this->request->input('city');

        $candidate->save();
    }
}
