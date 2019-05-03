export class ComponentRegistry {

}

ComponentRegistry.register = (cmpData) => {
  const tagName = "app-"+cmpData.tagName;
  const templatePath = "app/components/"+cmpData.templatePath;
  const bUseShadow = cmpData.shadow || false;

  const Component = ComponentRegistry.declareTemplatedComponentClass(templatePath, bUseShadow);
  customElements.define(tagName, Component);
}

ComponentRegistry.registerAll = (componentsData) => {
    (componentsData || []).forEach(cmp => ComponentRegistry.register(cmp));
}

ComponentRegistry.declareTemplatedComponentClass = (templatePath, bUseShadow) => {
	class Component extends HTMLElement {
    constructor(){
      super();

      this.templatePath = templatePath;

      this.bUseShadow = bUseShadow;
      if(this.bUseShadow){
        this.attachShadow({ mode: "open" });
      }
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
        const regx = /\{\{([\s\S]*?)\}\}/g;

        // Replace every occurence of data binding via {{ key }} blocks with this[key]
        const templated = this.templateHTML.replace(regx, (occurence, capture) => {
          let key = capture.trim();
          let value = this.getAttribute(key);
          if(value){
              return value;
          }
          return occurence;
        });
        
        if(this.bUseShadow){
          this.shadowRoot.innerHTML = templated;
        }else{
          this.innerHTML = templated;
        }
        
      })
    }

    
	}
	
	return Component;
}