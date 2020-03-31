import AFrame from "aframe"
import AvatarTemplate from './avatar-template'
import AvatarSchema, { AvatarSchemaComponent } from './avatar-schema'
export default class Avatar {

    player : AFrame.Entity
    playerID : string
    templateID : string
    template : AvatarTemplate

    constructor(playerID = 'player', templateID = 'avatar-template'){
        this.playerID = playerID
        this.templateID = templateID
        this.player = document.getElementById(this.playerID) as AFrame.Entity
        this.template = new AvatarTemplate(templateID)
    }

    setupAvatar() {
        this.template.setupTemplate()
        this.template.addTemplateToPlayerByID(this.playerID)
    }
}