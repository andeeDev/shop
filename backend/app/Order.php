<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->created_at = $model->freshTimestamp();
        });
    }


    public function products()
    {
        return $this->belongsToMany(
            Product::class,
            'product_order',
            'order_id',
            'product_id',
            'id',
            'id'
            );
    }
}
