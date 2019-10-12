<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Http\Resources\ProductsResource;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(string $id) {
        return ProductsResource::collection(Product::all()->where('ctg_id', $id));
    }
    /*
     * Return  all items now
     * */
    public function popularItems() {
        return ProductsResource::collection(Product::with('orders')->get());
        //return response()->json([Product::with('orders')->get()]);
    }
}
