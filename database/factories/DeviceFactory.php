<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class DeviceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>'iPhone',
            'image'=>$this->faker->imageUrl(320, 240, 'iPhone'),
            'release'=>2021,
            'brand'=>'Apple',
            'spec'=>$this->faker->text(30),
        ];
    }
}
