<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class University extends Model
{
    use HasFactory;
    protected $fillable = ["name", "address", "city", "email", "phone_number"];


    public function program(): BelongsToMany
    {
        return $this->BelongsToMany(Program::class);
    }

    public function universityProgram(): HasMany
    {
        return $this->hasMany(ProgramUniversities::class);
    }
}
