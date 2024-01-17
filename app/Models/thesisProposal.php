<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ThesisProposal extends Model
{
    use HasFactory;
    protected $fillable = ['professor_id', 'field_id', 'title', 'description'];

    public function field() : BelongsTo {
        return $this->BelongsTo(Field::class);
    }

    public function candidates() : BelongsToMany {
        return $this->belongsToMany(Candidate::class, 'applications')->using(Application::class)
        ->withPivot(["bac_details_id"]);;
    }
}
