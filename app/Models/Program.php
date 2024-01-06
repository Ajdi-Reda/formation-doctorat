<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Field;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Program extends Model
{
    use HasFactory;

        protected $fillable = ["program_id", "title", "description", "startDate", "endDate", "responsible"];

        public function fields() : HasMany {
            return $this->hasMany(Field::class);
        }

        public function universities() : BelongsToMany {
            return $this->BelongsToMany(University::class);
        }

}
