<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Query\Builder;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class ThesisProposal extends Model implements HasMedia
{
    use InteractsWithMedia;
    use HasFactory;
    protected $fillable = ['professor_id', 'field_id', 'title', 'description'];


    public function field() : BelongsTo {
        return $this->BelongsTo(Field::class);
    }
    public function professor() : BelongsTo {
        return $this->BelongsTo(Professor::class);
    }

    public function candidates(): BelongsToMany
    {
        return $this->belongsToMany(Candidate::class, 'application')
            ->withPivot('status', 'completed', 'accepted');
    }

    public function pendingCandidates()
    {
        return $this->candidates()
            ->wherePivot('status', 'pending')
            ->whereNotIn('candidates.id', function ($query) {
                $query->select('candidate_id')
                    ->from('application')
                    ->where('status', 'accepted');
            });
    }

    public function approvedCandidates()
{
    return $this->candidates()->wherePivot('status', 'accepted');
}
    public function acceptedCandidates()
{
    return $this->candidates()->wherePivot('accepted', true);
}

}
