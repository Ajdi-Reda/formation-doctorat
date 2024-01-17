<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Application extends Model
{
    use HasFactory;
    protected $fillable = ["thesis_proposal_id", "candidate_id", "bac_details_id"];

    public function bacDetails() : HasMany {
        return $this->hasMany(BacDetail::class);
    }
}
