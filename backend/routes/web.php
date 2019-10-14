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


Route::get('/categories/{category_id}/products','ProductController@index')->where('id', '[0-9]+');

Route::get('products/popular','ProductController@popularItems');

Route::get('/categories','CategoryController@index');

Route::get('/products/{product_id}', 'ProductController@specialProduct');
/*
 *
 */
Route::get('/resources/{filename}', function($filename){
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

