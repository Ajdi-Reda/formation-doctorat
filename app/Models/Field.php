<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Field extends Model
{
    use HasFactory;

    protected $fillable = ["name", "icon", "description"];

    public function programUniversities(): BelongsToMany
    {
        return $this->belongsToMany(ProgramUniversity::class, 'field_program_university', 'program_university_id', 'field_id');
    }

    public function thesisProposals(): HasMany
    {
        return $this->hasMany(ThesisProposal::class);
    }
}
