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
        tagName: "navbar",
        templatePath: "navbar.template.html"
    },
    {
        tagName: "footer",
        templatePath: "footer.template.html"
    },
    {
        tagName: "card",
        templatePath: "card.template.html"
    },
    {
        tagName: "parent-comment",
        templatePath: "parent-comment.template.html"
    },
    {
        tagName: "child-comment",
        templatePath: "child-comment.template.html"
    },
    {
        tagName: "tagbar",
        templatePath: "tagbar.template.html"
    },
];
