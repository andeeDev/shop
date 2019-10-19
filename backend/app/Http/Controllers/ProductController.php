<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoriesResource;
use App\Http\Resources\ProductsResource;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(string $category_id) {
        return ProductsResource::collection(Product::where('ctg_id', $category_id)->paginate(3));
    }

    public function specialProduct(string $product_id) {
        return ProductsResource::collection(Product::where('id', $product_id)->get());
    }
    /*
     * Return  all items now
     * */
    public function popularItems() {
        return ProductsResource::collection(Product::with('orders')->paginate(env('PAGINATION_LIMIT')));
    }
}
