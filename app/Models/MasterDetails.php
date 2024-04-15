<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class MasterDetails extends Model implements  HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected  $fillable = ["mBranch", "mYear", "mEstablishment", "semester7", "semester8", "semester9", "semester10"];

    public function applications() : HasMany {
        return $this->hasMany(Application::class);
    }
}
