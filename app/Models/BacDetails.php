<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\InteractsWithMedia;

class BacDetails extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = ["bYear", "city", "bEstablishment", "massarCode",
        "option", "mention", "bacAverage",
        "nationalBacAverage", "regionalExamAverage"];


    public function applications() : HasMany {
        return $this->hasMany(Application::class);
    }
}
