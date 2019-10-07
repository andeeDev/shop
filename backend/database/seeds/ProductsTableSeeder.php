<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /*\App\Product::create([
            'id' => 1,
            'name' => 'afksd',
            'desc' => 'dfsjlk',
            'price' => 56,
            'ctg_id' => 1
        ]);*/
        $categories = \App\Category::all();
        $faker = Faker\Factory::create();
        foreach ($categories as $category ) {
            for($i = 0; $i < 20; $i++ ){
                \App\Product::create([
                    'name' => $faker->word(),
                    'desc' => $faker->word(),
                    'price' => $faker->randomFloat(2, 20, 5000),
                    'ctg_id' => intval($category->id)
                ]);

            }
        }
    }
}
