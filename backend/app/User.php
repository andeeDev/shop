<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{

    public $timestamps = false;

    public function orders()
    {
        return $this->hasMany(\App\Order::class,
            'user_id',
            'id');
    }
}
