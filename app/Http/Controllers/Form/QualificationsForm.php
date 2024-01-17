<?php

namespace App\Http\Controllers\Form;

use App\Models\User;
use App\Models\Candidate;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Form\BaseForm;


class QualificationsForm extends BaseForm
{

    protected array $validationRules = [
        'yearOfBacGraduation' => ["required", 'numeric'],
        'cityOfBacGraduation' => ["required", 'max:30'],
        'bacType' => ["required"],
        'highSchool' => ["required", 'max:40'],
        'massarCode' => ["required"],
        'bacOption' => ["required"],
        'mention' => ["required"],
        'bacAverage' => ["required", 'numeric'],
        'nationalBacExamAverage' => ["required", 'numeric'],
        'regionalExamAverage' => ["required", 'numeric'],
    ];


    public function handle()
    {
    }
    public function store()
    {
        //creating a user
        $user = new User([
            'email' => $this->request->input('email'),
            'password' => Hash::make(Str::random(5)),
        ]);
        $user->save();

        //creating a candidate row associated with that user
        $candidate = new Candidate([
            'firstName' => $this->request->input('firstName'),
            'lastName' => $this->request->input('lastName'),
            'email' => $this->request->input('email'),
            'phone_number' => $this->request->input('telephoneNumber'),
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
    private function getUser(): User
    {
        return User::where('email', $this->request->input('email'))->first();
    }
    public function update()
    {
        $user_id = $this->getUser()->id;
        $candidate = Candidate::where('user_id', $user_id)->first();

        if ($candidate) {
            $candidate->firstName = $this->request->input('firstName');
            $candidate->lastName = $this->request->input('lastName');
            $candidate->email = $this->request->input('email');
            $candidate->phone_number = $this->request->input('telephoneNumber');
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
}