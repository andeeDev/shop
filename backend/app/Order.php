<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;

    public function setCreatedAtAttribute($value) {
        $this->attributes['created_at'] = \Carbon\Carbon::now();
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
