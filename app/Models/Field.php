<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Field extends Model
{
    use HasFactory;
    
    protected $fillable = ["program_id", "name", "icon", "description"];
    //define the relationship with the Program table
     public function program(): BelongsTo
    {
        return $this->belongsTo(Program::class);
    }

    public function programUniversities() : BelongsToMany {
        return $this->belongsToMany(ProgramUniversities::class);
    }
}
