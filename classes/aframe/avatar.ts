import AFrame from "aframe";
export default class Avatar {

player : AFrame.Entity

constructor(){
    this.player = document.getElementById('player') as AFrame.Entity;
    this.player.setAttribute("networked",
    { 'template': '#avatar-template',
    'attachTemplateToLocal': false });
}

}