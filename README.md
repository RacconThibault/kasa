# Kasa

Ce projet, réalisé dans le cadre de la formation **Développeur Web** d'OpenClassrooms, consiste à développer une application web de location immobilière en utilisant **React**.

---

## Objectifs du projet

- **Développer une application web** : Créer une interface utilisateur interactive pour la plateforme de location Kasa.
- **Utiliser React** : Mettre en œuvre des composants React modulaires et réutilisables.
- **Gérer les routes avec React Router** : Implémenter une navigation fluide entre les différentes pages de l'application.

---

## Fonctionnalités principales

1. **Page d'accueil** :
   - Afficher la liste des logements disponibles avec leurs informations principales.

2. **Page de logement** :
   - Présenter les détails d'un logement spécifique, y compris une galerie de photos, une description, les équipements, et les évaluations.

3. **Page À propos** :
   - Fournir des informations sur la plateforme Kasa et ses valeurs.

4. **Page 404** :
   - Afficher un message d'erreur lorsque l'utilisateur tente d'accéder à une page inexistante.

---

## Prérequis

- **Node.js** : Assurez-vous d'avoir Node.js installé sur votre machine.
- **npm** : npm est nécessaire pour gérer les dépendances du projet.

---

## Installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/RacoonyThibault/Kasa.git
   ```

2. **Naviguer dans le répertoire du projet** :
   ```bash
   cd Kasa
   ```

3. **Installer les dépendances** :
   ```bash
   npm install
   ```

4. **Lancer l'application** :
   ```bash
   npm start
   ```
   L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## Structure du projet

```
├── public/
│   ├── index.html          # Fichier HTML principal
│   └── ...                 # Autres fichiers publics
├── src/
│   ├── components/         # Composants React réutilisables
│   ├── pages/              # Pages de l'application
│   ├── assets/             # Images et autres ressources
│   ├── App.js              # Composant principal de l'application
│   ├── index.js            # Point d'entrée de l'application
│   └── ...                 # Autres fichiers source
├── package.json            # Fichier de configuration npm
└── README.md               # Documentation
```

---

## Fonctionnement

### Affichage des logements
- Les informations sur les logements sont affichées dynamiquement à partir des données locales ou d'une source externe.

### Navigation
- Utilisation de React Router pour naviguer entre les pages d'accueil, de détails des logements, À propos et 404.

---

## Outils utilisés

- **React** : Bibliothèque principale pour la construction de l'interface utilisateur.
- **React Router** : Pour la gestion des routes.
- **CSS3** : Pour la mise en page et le style.

---

## Auteur

- **Thibault Frégier** : [Profil GitHub](https://github.com/RacoonyThibault)

---

## Licence

Ce projet est réalisé dans le cadre d'un programme de formation et n'a pas vocation à être utilisé à des fins commerciales.

