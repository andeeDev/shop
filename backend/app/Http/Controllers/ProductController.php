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
    public function popular() {
        return ProductsResource::collection(
            Product::withCount('orders')->orderBy('orders_count', 'desc')

            ->paginate(env('PAGINATION_LIMIT')));
    }

    public function getItems(Request $request) {
        return ProductsResource::collection(Product::whereIn('id', $request->productsId)->get());
        // ProductsResource::collection($);
    }

    public function searchProducts (string $name) {//search
        return ProductsResource::collection(Product::where('name', 'like', $name )->paginate(env('PAGINATION_LIMIT')));
    }
}

