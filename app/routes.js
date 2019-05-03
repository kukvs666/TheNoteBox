import { AccueilPage } from "./pages/Accueil/accueil.component.js";
import { ProfilePage } from "./pages/Profile/profile.component.js";
import { LoginPage } from "./pages/Login/login.component.js";
import { ActivitePage } from"./pages/Activite/activite.component.js";
import { ProgressionPage } from "./pages/Progression/progression.component.js";
import { RealisationPage } from "./pages/Realisation/realisation.component.js";
import { PostPage } from "./pages/Post/post.component.js";
/** 
 * Déclarez les routes de votre application ici:
 * 
 * + path       {string}        Le chemin vers votre page (dans URL)
 * + view       {string}        Le chemin relatif vers le fichier de template
 * + controller {extends Page}  La classe Javascript éventuellement utilisée et liée à cette route/page
 * + isDefault  {boolean}       Cette route est-elle la route par défaut ? (la première trouvée sera utilisée)
 * */
export const routes = [
    {
        path: 'accueil',
        view: 'app/pages/Accueil/accueil.template.html',
        controller: AccueilPage
    },
    {
        path: 'profile',
        view: 'app/pages/Profile/profile.template.html',
        controller: ProfilePage,
    },
    {
        path: "login",
        view: "app/pages/Login/login.template.html",
        controller: LoginPage,
        isDefault: true
    },
    {
        path: "activite",
        view: "app/pages/Activite/activite.template.html",
        controller: ActivitePage,
    },
    {
        path: "progression",
        view: "app/pages/Progression/progression.template.html",
        controller: ProgressionPage,
    },
    {
        path: "realisation",
        view: "app/pages/Realisation/realisation.template.html",
        controller: RealisationPage,
    },
    {
        path: "post",
        view: "app/pages/Post/post.template.html",
        controller: PostPage
    }

];
