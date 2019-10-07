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
Route::get('/user','ProductController@index');
