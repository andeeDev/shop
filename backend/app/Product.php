<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

    public $timestamps = false;

    public function categories()
    {
        return $this->belongsTo(
            Category::class,
            'ctg_id',
            'id'
            );
    }

    public function orders()
    {
        return $this->belongsToMany(
          Order::class,
          'product_order'
        )->withPivot('amount');
    }
}
