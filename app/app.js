import { Router, Route } from "./core/Core.js";

import { HomePage } from "./pages/Home/home.component.js";
import { ProfilePage } from "./pages/Profile/profile.component.js";



let routes = [
  new Route('home', 'app/pages/Home/home.template.html', HomePage, true),
  new Route('profile', 'app/pages/Profile/profile.template.html', ProfilePage)
];

const router = new Router(routes);
console.log(router);