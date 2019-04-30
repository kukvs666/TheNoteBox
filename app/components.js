/** 
 * Déclarez les composants de votre application ici:
 * 
 * + tagName       {string}        Le nom de la balise html que vous voulez créer. 
 *                                 Le nom final sera automatiquement préfixé par "app-".
 * + templatePath  {string}        Le nom du fichier de template associé à votre composant.
 *                                 Ce fichier doit se trouver dans le répertoire "app/components"
 * */
export const components = [
    {
        tagName: "nav",
        templatePath: "navbar.template.html"
    },
    {
        tagName: "footer",
        templatePath: "footer.template.html"
    }
];