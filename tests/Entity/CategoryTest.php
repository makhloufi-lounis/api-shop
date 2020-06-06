<?php
/**
 * API Shop
 *
 * @version   1.0
 * @author    Lounis Makhloufi <makhloufi.lounis@gmail.com>
 * @see       https://github.com/makhloufi-lounis/api-shop for the canonical source repository
 * @copyright Copyright (c) 2020.
 */

namespace App\Tests\Entity;

use App\Entity\Category;
use App\Entity\Product;
use Faker\Factory;
use Faker\Generator;
use PHPUnit\Framework\TestCase;

class CategoryTest extends TestCase
{

    /**
     * @var Category
     */
    private $category;

    /**
     * @var Generator;
     */
    private $faker;


    protected function setUp(): void
    {
        $this->category = new Category();
        $this->faker = Factory::create('fr_FR');
    }

    /**
     * @covers \App\Entity\Category::getTitle
     * @covers \App\Entity\Category::setTitle
     */
    public function testTitleAccessors()
    {
        $this->assertNull($this->category->getTitle());
        $this->assertInstanceOf(
            Category::class,
            $this->category->setTitle($title = $this->faker->sentence(5, true))
        );
        $this->assertSame($title, $this->category->getTitle());
    }

    /**
     * @covers \App\Entity\Category::getProducts
     * @covers \App\Entity\Category::addProduct
     * @covers \App\Entity\Category::removeProduct
     */
    public function testProductAccessors()
    {
        $product = new Product();
        $this->assertEmpty($this->category->getProducts());
        $this->assertInstanceOf(
            Category::class,
            $this->category->addProduct($product)
        );
        $this->assertInstanceOf(
            Category::class,
            $this->category->removeProduct($product)
        );
        $this->assertEmpty($this->category->getProducts());
    }
}
