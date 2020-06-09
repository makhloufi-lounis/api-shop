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

/**
 * Class ProductTest
 * @package App\Tests\Entity
 */
class ProductTest extends TestCase
{

    /**
     * @var Product
     */
    private $product;

    /**
     * @var Generator;
     */
    private $faker;


    protected function setUp(): void
    {
        $this->product = new Product();
        $this->faker = Factory::create('fr_FR');
    }

    /**
     * @covers \App\Entity\Product::getTitle
     * @covers \App\Entity\Product::setTitle
     */
    public function testTitleAccessors()
    {
        $this->assertNull($this->product->getTitle());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setTitle($title = $this->faker->sentence(5, true))
        );
        $this->assertSame($title, $this->product->getTitle());
    }

    /**
     * @covers \App\Entity\Product::getReference
     * @covers \App\Entity\Product::setReference
     */
    public function testReferenceAccessors()
    {
        $this->assertNull($this->product->getReference());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setReference($ref = "P-".$this->faker->unique()->randomNumber(8))
        );
        $this->assertSame($ref, $this->product->getReference());
    }

    /**
     * @covers \App\Entity\Product::getPrice
     * @covers \App\Entity\Product::setPrice
     */
    public function testPriceAccessors()
    {
        $this->assertNull($this->product->getPrice());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setPrice($price = $this->faker->randomFloat(2, 20, 50))
        );
        $this->assertSame($price, $this->product->getPrice());
    }

    /**
     * @covers \App\Entity\Product::getDescription
     * @covers \App\Entity\Product::setDescription
     */
    public function testDescriptionAccessors()
    {
        $this->assertNull($this->product->getDescription());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setDescription($description = $this->faker->realText(200))
        );
        $this->assertSame($description, $this->product->getDescription());
    }

    /**
     * @covers \App\Entity\Product::getImageName
     * @covers \App\Entity\Product::setImageName
     */
    public function testImageNameAccessors()
    {
        $this->assertNull($this->product->getImageName());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setImageName($imageName = 'image1.jpg')
        );
        $this->assertSame($imageName, $this->product->getImageName());
    }

    /**
     * @covers \App\Entity\Product::getCreatedAt
     * @covers \App\Entity\Product::setCreatedAt
     */
    public function testCreatedAtAccessors()
    {
        $this->assertInstanceOf(\DateTime::class, $this->product->getCreatedAt());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setCreatedAt($createdAt = $this->faker->dateTime('now'))
        );
        $this->assertSame($createdAt, $this->product->getCreatedAt());
    }

    /**
     * @covers \App\Entity\Product::getUpdatedAt
     * @covers \App\Entity\Product::setUpdatedAt
     */
    public function testUpdatedAtAccessors()
    {
        $this->assertNull($this->product->getUpdatedAt());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setUpdatedAt($updatedAt = $this->faker->dateTime('now'))
        );
        $this->assertSame($updatedAt, $this->product->getUpdatedAt());
    }

    /**
     * @covers \App\Entity\Product::getCategory
     * @covers \App\Entity\Product::setCategory
     */
    public function testCategoryAccessors()
    {
        $this->assertNull($this->product->getCategory());
        $this->assertInstanceOf(
            Product::class,
            $this->product->setCategory($category = new Category())
        );
        $this->assertSame($category, $this->product->getCategory());
    }

}
