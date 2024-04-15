<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Application extends Pivot implements HasMedia
{
    use InteractsWithMedia;
    protected $fillable = ["candidate_id", "thesis_proposal_id", "bac_detail_id",
        "licence_detail_id", "master_detail_id","completed", "status", "accepted"];
    public $incrementing = true;
    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function thesisProposal()
    {
        return $this->belongsTo(ThesisProposal::class);
    }

    public function bacDetail(): BelongsTo
    {
        return $this->belongsTo(BacDetails::class);
    }

    public function licenceDetail(): BelongsTo
    {
        return $this->belongsTo(LicenceDetails::class);
    }

    public function masterDetail(): BelongsTo
    {
        return $this->belongsTo(MasterDetails::class);
    }
}
