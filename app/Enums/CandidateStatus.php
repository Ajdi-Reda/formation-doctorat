<?php

namespace App\Enums;

enum CandidateStatus: string
{
    case Pending = 'pending';
    case Accepted = 'accepted';
    case Rejected = 'rejected';

    public function label(): string
    {
        return match ($this) {
            static::Pending => 'pending',
            static::Accepted => 'accepted',
            static::Rejected => 'rejected',
        };
    }
}
