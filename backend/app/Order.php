<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
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
