<?php

namespace App\Http\Controllers\Form;

enum FormEnum: string
{
    case personal_details_form = PersonalDetailsForm::class;
    case courses_form = CoursesForm::class;
    case qualifications_form = QualificationsForm::class;

    public static function getFormClass(string $formName)
    {
        return match ($formName) {
            'personal_details_form' => self::personal_details_form->value,
            'courses_form' => self::courses_form->value,
            'qualifications_form' => self::qualifications_form->value,
            default => null,
        };
    }
}
