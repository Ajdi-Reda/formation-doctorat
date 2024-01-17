<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Candidate extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "firstName",
        "lastName",
        "email",
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
        return $this->belongsToMany(ThesisProposal::class, 'applications')->using(Application::class)
            ->withPivot(["bac_details_id"]);
    }
    public function User(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
