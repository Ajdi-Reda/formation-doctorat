<?php

namespace App\Http\Controllers;

use App\Enums\RolesEnum;
use App\Models\Field;
use App\Models\ProgramUniversity;
use App\Models\User;
use App\Services\FormData;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;


class FieldController extends Controller
{
    public function display($programId) {
        $programUniversities = ProgramUniversity::whereHas(
            'program', function($query) use ($programId){
                return $query->where('id', $programId);
            }
        )
        ->with(['fields', 'university', 'program'])
        ->get();
        $fields = collect();
        foreach ($programUniversities as $programUniversity)
        {
            foreach($programUniversity->fields as $field){
                //$field->setRelation('university', $programUniversity->university);
                //
                $thesisProposals = Field::find($field->id)->thesisProposals;
                $field->startDate = $programUniversity->program->startDate;
                $field->endDate = $programUniversity->program->endDate;
                $field->universityName = $programUniversity->university->name;
                $field->address = $programUniversity->university->address;
                $field->program_university_id = $programUniversity->id;
                $field->theses = $thesisProposals;
                $fields->add($field);
            }
        }

        $formData = new FormData();
       return Inertia::render('Candidature', [
        'fields' => $fields,
        'user' => Auth::check(),
        'formData' => $formData->getFormData(),
       ]);
    }
}
