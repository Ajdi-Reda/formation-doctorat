<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Field;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Program extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = ["program_id", "title", "description", "startDate", "endDate", "responsible"];

    public function fields(): HasMany
    {
        return $this->hasMany(Field::class);
    }

    public function universities(): BelongsToMany
    {
        return $this->belongsToMany(University::class);
    }

    public function programUniversities()
    {
        return $this->hasMany(ProgramUniversity::class);
    }


    public function attachUniversities($universities)
    {
        $this->universities()->attach($universities);
    }
    public function updateAttachedUniversities($universities)
    {
        $this->universities()->sync($universities);
    }
    public function deleteAttachedUniversities()
    {
        $this->universities()->detach();
    }
}
