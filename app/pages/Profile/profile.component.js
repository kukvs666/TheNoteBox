import { Page } from "../../core/Page.js";

// @Page({
//   template: "./profile.template.html"
// })
export class ProfilePage extends Page {

  constructor(...args){
    super(...args);

    this.firstname = "Matthias";
    this.lastname = "Gaudin";
  }
  
  onLoad(){
    // this.$root.querySelector('.profile-name').textContent = "Blabli";
  }

}