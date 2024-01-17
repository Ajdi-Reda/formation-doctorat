<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BacDetail extends Model
{
    use HasFactory;

    protected $fillable = ["year", "city", "type", "highSchool", "massarCode", "option", "mention", "bacAverage", "nationalBacAverage", "regionalExamAverage"];

    public function application(): BelongsTo
    {
        return $this->belongsTo(Application::class);
    }
}
