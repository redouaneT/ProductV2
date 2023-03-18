# Product

Ce projet consiste à développer un site e-commerce monopage (Single Page Application) permettant d'insérer, mettre à jour, supprimer et répertorier des produits. Il sera testé avec un objet JSON dans deux scénarios différents : gestion des produits en variable côté client et utilisation d'un serveur JSON pour simuler un serveur externe.

## Description

Cette application permet aux utilisateurs de :

- Parcourir une liste de produits
- Ajouter de nouveaux produits à la liste
- Mettre à jour les produits existants
- Supprimer des produits de la liste

L'application est construite en utilisant les technologies et bibliothèque suivante suivantes :

- React.js
- React-Bootstrap
- JSON Server
- react-router-dom

## Installation

Suivez ces étapes pour mettre en place le projet sur votre machine locale :

1. Clonez le dépôt :

   ```
   git clone git@github.com:redouaneT/ProductV2.git
   ```

2. Accédez au dossier du projet :

   ```
   cd nom-du-projet
   ```

3. Installez les paquets requis :

   ```
   npm install
   ```

4. Démarrez le serveur JSON :
   ```
   npx json-server --watch db.json --port 5000
   ```
