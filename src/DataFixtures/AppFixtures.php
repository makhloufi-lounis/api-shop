<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class AppFixtures extends Fixture
{
    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $category = new Category();
        $category->setTitle('Siége Auto');

        $product = new Product();
        $product->setTitle('Support de tete siege auto');
        $product->setDescription("Le support de tête siege auto offre un véritable confort à votre enfant durant ses trajets. Il évite une mauvaise position et s'adapte à la morphologie de votre enfant.");
        $product->setPrice($faker->randomFloat(2, 20, 50));
        $product->setImageName('image1.jpg');

        $category->addProduct($product);

        $manager->persist($product);
        $manager->persist($category);
        $manager->flush();
    }
}
