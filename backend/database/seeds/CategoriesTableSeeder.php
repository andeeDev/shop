<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $types = ['PC', 'Laptops', 'TV', 'Computers', 'Refrigirators'];

    public function run()
    {
        foreach ($this->types as $type) {
            \App\Category::create(['name' => $type]);
        }
    }
}
