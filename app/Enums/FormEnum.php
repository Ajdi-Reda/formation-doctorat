<?php

namespace App\Enums;

use App\Http\Controllers\Form\ApplicationForm;
use App\Http\Controllers\Form\DocumentForm;
use App\Http\Controllers\Form\PersonalDetailsForm;

enum FormEnum: string
{
    case personal_details_form = PersonalDetailsForm::class;
    case application_form = ApplicationForm::class;
    case document_form = DocumentForm::class;

    public static function getFormClass(string $formName)
    {
        return match ($formName) {
            'personal_details_form' => self::personal_details_form->value,
            'application_form' => self::application_form->value,
            'document_form' => self::document_form->value,
            default => null,
        };
    }
}
