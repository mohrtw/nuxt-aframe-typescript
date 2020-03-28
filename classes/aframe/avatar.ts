import AFrame from "aframe";
export default class Avatar {

player : AFrame.Entity

constructor(){
    this.player = document.getElementById('player') as AFrame.Entity;
    this.player.setAttribute("networked", "true");
    this.player.setAttribute("template", "#avatar-rig-template");
    this.player.setAttribute("attachTemplateToLocal", "false");
}

}