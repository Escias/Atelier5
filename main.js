var brut1 = "<div id=\"doc\">\n" +
    "        <h2>Visualisation des ateliers</h2>\n" +
    "        <div class=\"content\" id=\"block1\">\n" +
    "            <img id=\"doc1\" src=\"image/LARP.png\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 onclick=\"workshop(2)\">Atelier 1</h3>\n" +
    "                <p>Initiation au code via des algorithmes réalisés sur le logiciel LARP, sur windows XP.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block2\">\n" +
    "            <div class=\"right\">\n" +
    "                <h3 onclick=\"workshop(3)\">Atelier 2</h3>\n" +
    "                <p>Création de la base de données qui servira tout au long du projet. <br>\n" +
    "                Cette base de données a été créée avec le langage MySQL et l'utilisation de l'outils phpMyAdmin.</p>\n" +
    "            </div>\n" +
    "            <img id=\"doc2\" src=\"image/phpmyadmin.jpg\">\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block3\">\n" +
    "            <img id=\"doc3\" src=\"image/java-swing.jpg\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 onclick=\"workshop(4)\">Atelier 3</h3>\n" +
    "                <p>Création d'une application en JAVA avec la bibliothèque graphique SWING permettant la gestion de la base de données (et des différents capteurs utilisés lors du projet). </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block4\">\n" +
    "            <div id=\"doc4\" class=\"right\">\n" +
    "                <h3 onclick=\"workshop(5)\">Atelier 4</h3>\n" +
    "                <p>Refonte complète de l'application de l'Atelier 3 tout en gardant les même objectifs.</p>\n" +
    "            </div>\n" +
    "            <img id=\"doc5\" src=\"image/java-swing.jpg\">\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block5\">\n" +
    "            <img src=\"image/HtmlCssJs.png\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 onclick=\"workshop(6)\">Atelier 5</h3>\n" +
    "                <p>Mise en place d'un site vitrine afin de présenter plus en détails le projet, ses membres, et pour les contacter.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>";

var larp = "<div id=\"doc\">\n" +
    "        <h2>Atelier 1</h2>\n" +
    "        <div class=\"content\" id=\"block1\">\n" +
    "            <img id=\"doc1\" src=\"image/LARP.png\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 onclick=\"workshop(2)\">LARP</h3>\n" +
    "                <p>L'atelier 1 consiste à appréhender la logique de programmation à l'aide d'algorithmes réalisés sur le logiciel LARP, sur windows XP, installé sur MacOS via une machine virtuelle, dans notre cas, VirtualBox.<br>\n" +
    "                Le travail effectué ce divise en deux partie, le <a class=\"lien\" href=\"#pseudo\">pseudo code</a> et les <a class=\"lien\" href=\"#logi\">logigrammes</a></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block2\">\n" +
    "            <div class=\"right\">\n" +
    "                <h3 id=\"pseudo\">Pseudo-code</h3>\n" +
    "                <p>le pseudo-code est une façon de décrire un algorithme sans référence à un langage de programmation en particulier.<br>\n" +
    "                    <a href=\"\" class=\"golien\">Ici</a> , nous avons réaliser 15 exercices en pseudo-code sur LARP.</p>\n" +
    "            </div>\n" +
    "            <img id=\"doc2\" src=\"image/LARP/pseudo-code/LARP%2008.png\">\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block3\">\n" +
    "            <img id=\"doc3\" src=\"image/LARP/logigramme/LARP%2007.png\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 id=\"logi\">Logigramme</h3>\n" +
    "                <p>Un logigramme (ou organigramme de programmation) est une représentation graphique normalisée de l'enchaînement des opérations et des décisions effectuées par un programme d'ordinateur.<br>\n" +
    "                    <a href=\"\" class=\"golien\">Ici</a> , nous avons réaliser 12 exercices en logigrammes sur LARP.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>";

var bdd = "<div id=\"doc\">\n" +
    "        <h2>Atelier 2</h2>\n" +
    "        <div class=\"content\" id=\"block1\">\n" +
    "            <img id=\"doc1\" src=\"image/phpmyadmin.jpg\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 onclick=\"workshop(2)\">Base de données</h3>\n" +
    "                <p>L'atelier 2 consiste à créer la base de données qui servira tout au long du projet.<br>\n" +
    "                Cette base de données est créer avec <a class=\"lien\" href=\"#phpmyadmin\">MySQL</a>, en utlisant l'application <a class=\"lien\" href=\"#mysql\">phpMyAdmin</a>.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block2\">\n" +
    "            <div class=\"right\">\n" +
    "                <h3 id=\"phpmyadmin\">phpMyAdmin</h3>\n" +
    "                <p>phpMyAdmin est une application de gestion de base de données MySQL<br>\n" +
    "                    C'est également l'application que nous avons utilisé pour créer notre base de donnée avec <a class=\"lien\" href=\"#mysql\">MySQL</a>.</p>\n" +
    "            </div>\n" +
    "            <img id=\"doc2\" src=\"image/phpmyadmin-logo.jpg\">\n" +
    "        </div>\n" +
    "        <div class=\"content\" id=\"block3\">\n" +
    "            <img id=\"doc3\" src=\"image/mysql.jpg\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3 id=\"mysql\">MySQL</h3>\n" +
    "                <p>MySQL est un système de gestion de base de données, basé sur le langage SQL<br>\n" +
    "                    <a href=\"\" class=\"golien\">Ici</a>, la base de données a été réaliser en utilisant ce langage.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>";

function workshop(n){
    console.log(n);
    switch (n) {
        case 1:
            document.getElementById("document").innerHTML = brut1;
            break;
        case 2:
            document.getElementById("document").innerHTML = larp;
            break;
        case 3:
            document.getElementById("document").innerHTML = bdd;
            break;
        case 4:

            break;
        case 5:
            break;
        case 6:
            break;
    }
}