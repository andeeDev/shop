<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use App\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $token = $request->token;
        $id = User::where('token', '=', $token)->first()->id;
        $order = new Order();
        $order->user_id = $id;
        $order->save();

        $result = [];
        $cartString = $request->cart;
        //$str = substr($cartString ,1, strlen($cartString )-2);
        /* $arr = explode(',', $str);
         for($i=0; $i<count($arr); $i++) {
             $miniarray = explode(':', $arr[$i]);
             $result[trim($miniarray[0])] = trim($miniarray[1]);
         }
         */
        $keys = array_keys($cartString);
        foreach ($keys as $key) {
            $order->products()->attach(Product::find((int)$key),
                [
                    //'product_id' => (int)$key,
                    'amount' => (int)$cartString[strval($key)]
                ]);
        }

        return response(  "ok"
            , 200);
    }
}
