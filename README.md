# Galapagos

Projet de compilateur du 5ème semestre de Bachelor à la Haute-Ecole Arc.

Année 2019-2020.

## Auteurs

François Bouthillier de Beaumont, Romain Capocasale, Jonas Freiburghaus

## Cahier des charges
Le but de projet est de créer un language et de le compiler vers du JavaScript, afin de pouvoir dessiner instictivement sur un canvas HTML. Ainsi, grâce à une syntaxe très lisible, l'utilisateur du langague aurait la possibilité de créer des acteurs, les tortues, et de les déplacer sur le canvas. 
Un acteur (Tortue) a une position X, une position Y et un sens. 
Une tortue fait partie d'une zone (Galapagos) et ne peut en sortir. Elle peut se déplacer en avant et en arrière, et peut tourner sur elle même.
Selon la volonté de l'utilisateur, une tortue dessine derrière elle ou non.

Le compilateur devra aussi verifier que l'utilisateur n'effectue pas d'opération illégale. Les opérations considérés comme illégales sont : 
 
 * Deux tortues ne peuvent entrer en collision.
 * Une tortue ne peut sortir de sa zone (Galapagos).


Si de tel cas se produise, le compilateur lancera une erreur.

Le langage doit être compilé au travers des étapes suivantes :

* Analyse lexicale
* Analyse syntaxique
* Analyse sémantique
* Génération de code

## Fonctionnement du langage

### Fonctionnalités

* Variables
* Branchement
* Boucle
* Fonctions préfaites
* Commentaires uniligne
* (Evaluation algébrique) 


### Mots clés réservés

* **Tortue <nom> = <Galapagos>, <positionX>, <positionY>, <angle>;**
Crée une nouvelle tortue dans la zone <Galapagos>, en position <positionX>;<postionY> et d'angle <angle>. Les angles suivent la logique d'un cercle trigonométrique.
* **Galapagos <nom> = <positionX>, <positionY>, <width>, <height>;**
Créer une zone dans laquelle peut se déplacer une ou plusieurs tortue
* **Avance <tortue> <quantité>;**
Fait avancer une <tortue> d'une certaine <quantité>
* **Recule <tortue> <quantité>;**
Fait reculer une <tortue> d'une certaine <quantité>
* **TourneGauche <tortue> <angle>;**
Fait tourner la tortue dans le sens antihoraire 
* **TourneDroite <tortue> <angle>;**
Fait tourner la tortue dans le sen horaire
* **Decoller <tortue>;**
La Tortue ne dessine plus son tracé derrière elle
* **Atterrir <tortue>;**
La Tortue dessine le tracé derrière elle
* **Si <condition> { <instruction> }**
<instruction> est executé uniquement si <condition> est satisfait
* **Tq <condition> { <instruction> }**
<instruction> est executé tant que <condition> est satisfait
* **positionX <tortue>**
Retourne la position actuelle de la tortue sur l'axe X
* **positionY <tortue>**
Retourne la position actuelle de la tortue sur l'axe Y
* **§§ <texte>**
Commentaire

### Conventions

* [x] Les mots clés réservés sont en PascalCase
* [x] Les fichiers contenant du code Galapagos ont l'extension .galapagos
* [x] Indentation de style Allman
* [x] Code en français

"Les conventions dans le langage Galapagos ne sont pas obligatoires, mais vivement recommandées pour la maintenance et le travail en équipe."

-- <cite>Bouthiller de Beaumont, Capocasale, Freiburghaus: Galapagos in a turtle shell</cite>

### Exemple de script

```galapagos
Galapagos g = 0, 10, 50, 50;  §§ Definis une zone pour une tortue
Tortue t = g, 10,10, 0; §§ Cree une tortue dans la zone g

Avance t 10;
Recule t 10;
TourneGauche t 10;
TourneDroite t 30;
Decoller t;
Atterir t;

Si positionX t > 10 
{
	TourneGauche g 10;
}

TantQue positionY t < 20 
{
	Avance t 10;
}
```
