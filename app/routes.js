import { HomePage } from "./pages/Home/home.component.js";
import { ProfilePage } from "./pages/Profile/profile.component.js";

export const routes = [
    {
        path: 'home',
        view: 'app/pages/Home/home.template.html',
        controller: HomePage,
        isDefault: true
    },
    {
        path: 'profile',
        view: 'app/pages/Profile/profile.template.html',
        controller: ProfilePage
    },
    {
        path: "login",
        view: "app/pages/Login/login.template.html"
    }
];