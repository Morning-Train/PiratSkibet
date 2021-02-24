<?php

namespace App\Models\Content;

use App\Support\Enums\LivestreamTypes;
use App\Support\Traits\LinksToYoutube;
use Illuminate\Database\Eloquent\Model;

class Livestream extends Model
{
    use LinksToYoutube;

    protected $casts = [
        'is_live'  => 'boolean',
    ];

    protected static function boot()
    {
        parent::boot();

        static::saving(function (Livestream $livestream) {
            if ($livestream->is_live && $livestream->isDirty('is_live')) {
                static::query()->update(['is_live' => false]);
            }
        });
    }

    /////////////////////////////
    /// Getters
    /////////////////////////////

    public function getEmbedIdAttribute(): string
    {
        if ($this->type === LivestreamTypes::YOUTUBE_CHANNEL) {
            return $this->livestream_id;
        }

        // Only type === YouTube
        return static::extractYoutubeVideoId($this->livestream_id);
    }

    public function getLinkAttribute(): string
    {
        if ($this->type === LivestreamTypes::YOUTUBE_CHANNEL) {
            return static::getYoutubeChannelLink($this->livestream_id);
        }

        // Only type === YouTube
        return static::getYoutubeVideoLink($this->livestream_id);
    }
}
