<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ProgramUniversity extends Pivot
{
    use HasFactory;

    protected $fillable = ["program_id", "university_id"];

    public function university(): BelongsTo
    {
        return $this->belongsTo(University::class);
    }
    public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }
    public function fields(): BelongsToMany
    {
        return $this->belongsToMany(Field::class);
    }
}
