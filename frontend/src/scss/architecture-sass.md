Architecture des dossiers SASS

# Base

contient le code standard du projet. On peut y trouver le fichier reset, quelques règles topographiques, et probablement une feuille de setyle définissant quelques styles standards pour les éléments HTML les plus employés.

Exemples :
- _base.scss
- _reset.scss
- _typography.scss

# Layout (ou partiels)

contient tout ce qui concerne la mise en page du site ou de l'application. Ce dossier pourrait intégrer des feuilles de style pour les principales parties du site (header, footer, navigation, sidebar...), pour le système de grille ou même les styles CSS de tous les formulaires

- _grid.scss
- _header.scss
- _footer.scss
- _sidebar.scss
- _forms.scss
- _navigation.scss

# Components (ou modules)

pour les plus petits composants il y a le dossier components. Alors que layout est macro (c'est-à-dire qu'il définit l'armature globale), component est plus centré sur les widgets. Il contient toutes sortes de modules spécifiques tels qu'un slider, un loader, un widget et toutes ces sortes de choses. Il y a en général de nombreux fichiers dans components car l'application toute entière devrait être essentiellement constituée de petits modules.

- _media.scss
- _caroussel.scss
- _thumbnails.scss

# Pages

Styles spécifiques à certaines pages. 

- _home.scss
- _contact.scss

# Thèmes

Lorsque le site a plusieurs thèmes.

- _theme.scss
- _admin.scss

# Abstracts