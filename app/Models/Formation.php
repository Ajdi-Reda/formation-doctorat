<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;
    
    protected $fillable = ["formation_id", "title", "description", "startDate", "endDate", "responsible", "status"];
}
