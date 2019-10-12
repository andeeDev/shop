<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use \App\Product as Product;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/u', function () {
    $categories = \App\Category::all();
    $faker = Faker\Factory::create();

    return $faker->word();
});
Route::get('/category/product/{id}','ProductController@index')->where('id', '[0-9]+');

Route::get('/popular','ProductController@popularItems');

Route::get('/categories','CategoryController@index');

Route::get('/res/{filename}', function($filename){
    $path = resource_path() .'/img/'. $filename;

    if(!File::exists($path)) {
        return response()->json(['message' => 'Image not found.'], 404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});

