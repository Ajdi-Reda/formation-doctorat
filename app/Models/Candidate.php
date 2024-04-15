<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Candidate extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        "user_id",
        "firstName",
        "lastName",
        "phone_number",
        "cin",
        "dateOfBirth",
        "countryOfBirth",
        "cityOfBirth",
        "nationality",
        "address",
        "postalCode",
        "country",
        "city"
    ];

    public function thesisProposals(): BelongsToMany
    {
        return $this->belongsToMany(ThesisProposal::class, 'application')
        ->withPivot('status', 'completed', 'accepted');
    }
    public function applications(): HasMany
    {
        return $this->hasMany(Application::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
