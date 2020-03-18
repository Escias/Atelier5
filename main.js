function workshop(n){
    console.log(n);
    switch (n) {
        case 1:
            document.getElementById("document").innerHTML = "<article class=\"doc\" id=\"doc\">\n" +
                "        <div class=\"doctitle\">\n" +
                "            <h1 class=\"text\">JavaDomo</h1>\n" +
                "        </div>\n" +
                "        <div class=\"docdesc\">\n" +
                "            <h3 class=\"text\">Application de gestion domotique de la maison</h3>\n" +
                "        </div>\n" +
                "        <div class=\"docdet\">\n" +
                "            <p class=\"text\">JavaDomo est un projet d'une application de gestion domotique de domiciles.</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"text\">L'application permet la gestion de plusieurs domiciles.<br>\n" +
                "                Grâce à cette application, plus besoin de ce déplacer à travers tout le domicile pour vérifier un à un les informations essentiels.<br>\n" +
                "                JavaDomo vous donne accès à l'ensemble des appareils pour gérer votre domicile,<br>\n" +
                "                tel que les lumières, les caméras, les thermomètres, ou encore obtenir des information sur les denrées alimentaires présente.<br>\n" +
                "                Grâce à cette application intuitive, vous contrôlez votre système à distance facilement, où que vous soyez. </p>\n" +
                "            <input class=\"imgdoc\" id=\"smart\" type=\"image\" src=\"image/smarthouse.jpg\" onclick=\"fullscreen('smart')\">\n" +
                "        </div>\n" +
                "        <a class=\"download\" href=\"file/JavaDomo.jar\" download>Télécharger (&#x26A0;bêta ver. 0.7)</a>\n" +
                "        <div class=\"docopt\">\n" +
                "            <p>Plus de détails sont disponible via les autres sections disponible plus haut</p>\n" +
                "        </div>\n" +
                "    </article>";
            break;
        case 2:
            document.getElementById("document").innerHTML = "<article class=\"doc\" id=\"doc\">\n" +
                "        <div class=\"doctitle\">\n" +
                "            <h1 class=\"text\">Documentation</h1>\n" +
                "        </div>\n" +
                "        <div class=\"docdesc\">\n" +
                "            <h3 class=\"text\">Développement de l'application</h3>\n" +
                "        </div>\n" +
                "        <div class=\"docdet\">\n" +
                "            <p class=\"text\">JavaDomo à été développer avec le langage de programmation Java et sa bibliothèque graphique Swing.</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"text\">Java est un langage de programmation orienté objet.<br>\n" +
                "                L'intégralité du code ayant permis le développement de l'application a été réalisé avec ce langage,<br>\n" +
                "                associé avec un peu de code MySQL pour le lié à sa base de données.</p>\n" +
                "            <input class=\"imgdoc\" id=\"javalogo\" type=\"image\" src=\"image/javalogo.jpg\" onclick=\"fullscreen('javalogo')\">\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <input class=\"imgdoc\" id=\"swing\" type=\"image\" src=\"image/java-swing.png\" onclick=\"fullscreen('swing')\">\n" +
                "            <p>Swing est une bibliothèque graphique du langage de programmation Java.<br>\n" +
                "                Elle a permis la création de tout le côté visuel de l'application,<br>\n" +
                "                c'est à dire, toute l'interface visible.</p>\n" +
                "        </div>\n" +
                "        <a class=\"download\" href=\"document.html\">Documentation détaillée</a>\n" +
                "    </article>";
            break;
        case 3:
            document.getElementById("document").innerHTML = " <article class=\"doc\" id=\"doc\">\n" +
                "        <div class=\"doctitle\">\n" +
                "            <h1 class=\"text\">Manuel d'utilisation</h1>\n" +
                "        </div>\n" +
                "        <div class=\"docdesc\">\n" +
                "            <h3 class=\"text\">Guide de démarrage</h3>\n" +
                "        </div>\n" +
                "        <div class=\"docdet\">\n" +
                "            <p class=\"text\">Ce guide vous donne les information nécessaire sur les principales fonctions de JavaDomo</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"text\">Pour commencer à utiliser l'application,<br>\n" +
                "                connecter vous avec votre compte utilisateur (ou inscrivez-vous si vous n'en possédez pas).</p>\n" +
                "            <input class=\"imgdoc\" id=\"connexion\" type=\"image\" src=\"image/appli/connexion.png\" onclick=\"fullscreen('connexion')\">\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <input class=\"imgdoc\" id=\"profil\" type=\"image\" src=\"image/appli/profil.png\" onclick=\"fullscreen('profil')\">\n" +
                "            <p>Dans la section \"profile\",<br>\n" +
                "            Vous avez accès à toutes les information essentiel vous concernant.<br>\n" +
                "            Vous pouvez également y modifier vos information personnel et votre mot de passe, ou supprimer votre compte.</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"section\">Section \"Management\"</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p>Dans la section \"Item management\",<br>\n" +
                "            Vous avez accès à toutes les informations récoltées par vos appareils en choisissant<br>\n" +
                "                la rubrique souhaitée et en validant avec \"Select Table\",<br>\n" +
                "            Vous pouvez également y supprimer l'information sélectionner avec \"Delete selected Item\"<br>\n" +
                "                <br>\n" +
                "            (Il vous est également possible de visualiser les photos pris par vos caméras)</p>\n" +
                "            <input class=\"imgdoc\" id=\"gestion\" type=\"image\" src=\"image/appli/gestion.png\" onclick=\"fullscreen('gestion')\">\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <input class=\"imgdoc\" id=\"maj\" type=\"image\" src=\"image/appli/maj.png\" onclick=\"fullscreen('maj')\">\n" +
                "            <p>Dans le section \"Update Item\",<br>\n" +
                "            Vous pouvez visualisez toutes les informations et les modifier.<br>\n" +
                "            Pour modifier une information, sélectionner la ligne concerné et la colonne que vous souhaité modifier,<br>\n" +
                "            et modifier l'info souhaité, puis validé avec \"Update selected item\".</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p>Dans la section \"Add Item\",<br>\n" +
                "            Vous pouvez ajouter de nouveau appareil (ou de nouvelles informations).<br>\n" +
                "            Pour ce faire, sélectionner la rubrique, complété les cases requises et validé avec \"Validate\".</p>\n" +
                "            <input class=\"imgdoc\" id=\"ajout\" type=\"image\" src=\"image/appli/ajout.png\" onclick=\"fullscreen('ajout')\">\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"section\">(&#x26A0;Par mesure de sécurité, certaines informations ne peuvent être supprimer, modifier ou encore ajouter.)</p>\n" +
                "        </div>\n" +
                "        <div class=\"docopt\">\n" +
                "            <p>Pour plus de renseignement, ou si vous rencontrez un problème, merci de nous contacter via le formulaire de contact.</p>\n" +
                "        </div>\n" +
                "    </article>";
            break;
        case 4:
            document.getElementById("document").innerHTML = "<article class=\"doc\" id=\"doc\">\n" +
                "        <div class=\"doctitle\">\n" +
                "            <h1 class=\"text\">Gestion du projet</h1>\n" +
                "        </div>\n" +
                "        <div class=\"docdesc\">\n" +
                "            <h3 class=\"text\">Méthode de travail</h3>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"section\">Gestion du travail</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"text\">le travail a été réparti selon les compétences de chacun<br>\n" +
                "            Les différentes tâches ont été reparti de manière à ce que chaque sprint du projet soit fini dans les temps.<br>\n" +
                "            De ces faits, la quantité de travail de chacun n'a pas été la même.</p>\n" +
                "            <input class=\"imgdoc\" id=\"trello\" type=\"image\" src=\"image/trello.png\" onclick=\"fullscreen('trello')\">\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p class=\"section\">Méthode Agile et Scrum</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <input class=\"imgdoc\" id=\"agile\" type=\"image\" src=\"image/agile.png\" onclick=\"fullscreen('agile')\">\n" +
                "            <p>La méthode Agile est un groupes de pratiques de pilotage et de réalisation de projets.<br>\n" +
                "            Elle permet une plus grande implication du client, une meilleur communication en les équipe de développement et les clients<br>\n" +
                "            et ainsi une meilleurs réactivité<br>\n" +
                "                La méthode Agile met l'accent sur le travail d'équipe et l'individualité de chacun</p>\n" +
                "        </div>\n" +
                "        <div class=\"doccontent\">\n" +
                "            <p>La méthodologie Scrum permet un approche plus rapide et flexible du développement.<br>\n" +
                "                Elle suit les principes de la méthodologie Agile, c'est-à-dire l'implication et la participation active du client tout au long du projet.<br>\n" +
                "                équipe Scrum est auto-organisée et pluridisciplinaire, c'est-à-dire qu'elle choisit la meilleure façon d’accomplir son travail et qu'elle possède toutes les compétences nécessaires à l'accomplissement du projet.<br>\n" +
                "                La flexibilité, la créativité et la productivité de l'équipe sont ainsi optimisées.</p>\n" +
                "            <input class=\"imgdoc\" id=\"scrum\" type=\"image\" src=\"image/scrum.jpg\" onclick=\"fullscreen('scrum')\">\n" +
                "        </div>\n" +
                "        <a class=\"download\" href=\"https://agilemanifesto.org/iso/fr/manifesto.html\" target=\"_blank\">Manifeste Agile</a>\n" +
                "    </article>";
            break;
    }
}

function fullscreen(a){
    if (document.getElementById(a).requestFullscreen) {
        document.getElementById(a).requestFullscreen();
    }
}


