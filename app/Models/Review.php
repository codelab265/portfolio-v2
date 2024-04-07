<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Review extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'languages' => 'json',
        'is_published' => 'boolean'

    ];

    protected static function booted(): void
    {
        static::deleted(function (Review $review) {
            Storage::delete("public/$review->image_url");
        });
    }
}
