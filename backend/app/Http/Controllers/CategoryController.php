<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoriesResource;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        return (CategoriesResource::collection(Category::all()));
/*
            ->header('Access-Control-Allow-Headers', "*");*/
            /*->header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
            ->header("Access-Control-Allow-Credentials", true)
            ->header('Access-Control-Allow-Methods', 'GET')
            ->header('Content-Type', 'application/json');*/

    }

    public function i() {
        return response()
            ->json([Category::find(1)]);
        //->header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin")
    }
}
