<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class University extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "address",
        "chancellor",
        "chancellorEmail",
        "chancellorPhoneNumber"
    ];


    public function programs(): BelongsToMany
    {
        return $this->belongsToMany(Program::class);
    }

    public function universityProgram(): HasMany
    {
        return $this->hasMany(ProgramUniversity::class);
    }

    public function attachPrograms($programs)
    {
        $this->programs()->attach($programs);
    }
    public function updateAttachedPrograms($programs)
    {
        $this->programs()->sync($programs);
    }
    public function deleteAttachedPrograms()
    {
        $this->programs()->detach();
    }
}
