<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class LicenceDetails extends Model implements  HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected  $fillable = ["lType", "lBranch", "lYear", "lEstablishment", "semester1", "semester2", "semester3", "semester4", "semester5", "semester6"];
 
    public function applications() : HasMany {
        return $this->hasMany(Application::class);
    }
}
