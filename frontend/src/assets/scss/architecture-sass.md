Architecture des dossiers SASS

# Base

Contient le code standard du projet. On peut y trouver le fichier reset, quelques règles topographiques, et probablement une feuille de setyle définissant quelques styles standards pour les éléments HTML les plus employés.

Exemples :
- _base.scss
- _reset.scss
- _typography.scss

# Layout (ou partiels)

Contient tout ce qui concerne la mise en page du site ou de l'application. Ce dossier pourrait intégrer des feuilles de style pour les principales parties du site (header, footer, navigation, sidebar...), pour le système de grille ou même les styles CSS de tous les formulaires

- _grid.scss
- _header.scss
- _footer.scss
- _sidebar.scss
- _forms.scss
- _navigation.scss

# Components (ou modules)

Pour les plus petits composants il y a le dossier components. Alors que layout est macro (c'est-à-dire qu'il définit l'armature globale), component est plus centré sur les widgets. Il contient toutes sortes de modules spécifiques tels qu'un slider, un loader, un widget et toutes ces sortes de choses. Il y a en général de nombreux fichiers dans components car l'application toute entière devrait être essentiellement constituée de petits modules.

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

# Abstracts (ou utilities ou helpers)

Regroupe les outils et helpers Sass utilisés à travers le projet. Toutes les variables globales, les fonctions, les mixins et les placeholders devraient se retrouver dans ce dossier. La règle générale concernant ce dossier est qu'il ne devrait pas retourner une seule ligne de CSS s'il était compilé seul. Ce ne sont ici que des helpers SASS

- _variables.scss
- _mixins.scss
- _functions.scss
- _placeholders.scss

# Vendors

Regroupe tous les fichiers CSS provenant de bibliothèques et frameworks externes (Normalize, Bootstrap, jQueryUI, etc.)

- _normalize.scss
- _bootstrap.scss

# Le fichier principal

Généralement appelé main.scss, seul fichier de toute la base à ne pas commencer par un underscore (_). Ce fichier ne doit contenir que les @import et des commentaires. 
Les fichiers doivent être importés en fonction du dossier dans lequel ils sont rangés, l'un après l'autre dans cet ordre : 

- 1- abstracts
- 2- vendors
- 3- base
- 4- layout
- 5- components
- 6- pages
- 7- themes

Le fichier principal doit respecter ces recommandations : 

- 1 fichier par @import
- 1 @import par ligne
- pas de saut de ligne entre 2 imports provenant du même dossier
- un saut de ligne après le dernier import d'un dossier
- les extensions fichiers et les underscores initiaux doivent être omis. Exemple : "@import abstracts/variables"

# Convention BEM

- Bloc (composant parent)
.menu
- Element (composant appartenant à un bloc)
.menu__item
- Modificateur (composant (bloc ou élément) qui se modifie en fonction du contexte)
.menu__item--modificateur