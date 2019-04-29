import { Router, Route } from "./core/Core.js";
import { routes as routesData } from './routes.js';
import { components as componentsData } from './components.js';

/* Création des routes */
const routes = routesData.map(function(routedata){
  return new Route(routedata.path, routedata.view, routedata.controller, !!routedata.default)
});

let $app = document.getElementById('mon-app');
const router = new Router(routes, $app);

/* Création des composants */
componentsData.forEach(function(cmp){

  const tagName = "app-"+cmp.tagName;
  const templatePath = "app/components/"+cmp.templatePath;

  class Component extends HTMLElement {
    constructor(){
      super();

      this.templatePath = templatePath;
    }

    async getTemplate(){
      if(!this.templateHTML){
        const res = await fetch(this.templatePath);
        if(!res || !res.ok){
          return '';
        }else{
          this.templateHTML = await res.text();
        }
        
      }
      
      return this.templateHTML;
    }

    connectedCallback(){
      this.getTemplate().then(() => {
        this.innerHTML = this.templateHTML;
      })
    }

    
  }
  customElements.define(tagName, Component);
});