<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoriesResource;

class CategoryController extends Controller
{
    public function index() {

        return (CategoriesResource::collection(Category::all()))
            ->response()
            ->header('Content-Type', 'application/json');
    }


}
