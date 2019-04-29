import { Page } from "../../core/Page.js";

export class ProfilePage extends Page {

  // Constructeur du composant, définit les variables accessibles depuis le template
  constructor(...args){
    super(...args);

    this.MonTitre = "My Title";
    this.message = "HelloWorld";
  }
  
  onLoad(){
    console.log("Profile has loaded")

    const $btn = this.$root.querySelector("#my-btn");
    $btn.addEventListener("click", function(){
      alert("Hello World")
    });
  }

}