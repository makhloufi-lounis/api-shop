# API Boutique en ligne

1- Clonez le dépot chez vous :
```
    git clone https://github.com/makhloufi-lounis/api-shop.git
```
2- Deplacez vous dans le projet :
```
    cd api-shop
```
3- Lancer composer install pour installer les dépendances PHP:
```
    composer install
```
4- Pour la base de données j’ai mis en place une base de donnees sqlite donc vous devez vérifier que vous avez bien sqlite sur votre machine, sinon vous devez l'instaler avec les commandes suivates :
```
	sudo apt-get update -y
	sudo apt-get install -y php7.2-sqlite
```
5- Lancez la migration : 
```
    php bin/console d:m:m
```
6- Lancez la fixture : 
```
    php bin/console doctrine:fixtures:load --no-interaction
```
7- Lancer npm i pour installer React et les dépendances :
```
    npm install
``` 
8- Lancer npm run build ou npm run watch pour lancer la compilation des fichiers dans le dossier public/build
 ```
    npm run build
```
9- Lancez le serveur interne : 
```
    symfony server:start --port=8000
```
