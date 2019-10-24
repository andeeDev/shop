<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductsResource;
use App\Product;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function index(int $category_id) {
        return ProductsResource::collection(Product::where('ctg_id', $category_id)->paginate(env('PAGINATION_LIMIT')));
    }

    public function item(string $product_id) {
        return new ProductsResource(Product::findOrFail($product_id));
    }
    /*
     * Return  all items now
     * */
    public function popularItems() {//popular
        return ProductsResource::collection(Product::with('orders')->paginate(env('PAGINATION_LIMIT')));
    }

    public function search (Request $request) {
        return ProductsResource::collection(Product::where('name', 'like','%'.$request->searchedString.'%')->paginate(env('PAGINATION_LIMIT')));
        //);

        //Product::where('name', searchedString);
    }
}

