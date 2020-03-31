import AFrame from "aframe"
import AvatarSchema, { AvatarSchemaComponent, defaultComponents } from './avatar-schema'
import AvatarAsset from './avatar-asset'
import AvatarAssetGLTF, { defaultAvatarModelSrc } from './avatar-asset-gltf'
import AvatarAssetHTML, { defaultAvatarModelHtml } from './avatar-asset-html'


export default class AvatarTemplate {

  templateID: string
  template: string
  avatarAsset: AvatarAsset
  components: AvatarSchemaComponent[]
  schema: AvatarSchema
  options: AvatarOptions

  constructor(templateID = defaultTemplateID, components = defaultComponents, options = defaultAvatarOptions) {
    this.templateID = templateID
    this.components = components
    this.options = options
    this.schema = new AvatarSchema(this.templateID, this.components)
    this.avatarAsset = new AvatarAssetGLTF()
    this.template = this.constructTemplate()
  }

  setupTemplate() {
    this.addTemplateToAssets()
    this.addTemplateToNAF()
  }
  addTemplateToAssets() {
    var frag = this.fragmentFromString(this.template)
    document.querySelector('a-assets').appendChild(frag)
  }

  addTemplateToNAF() {
    // @ts-ignore
    NAF.schemas.add(this.schema)
  }

  addTemplateToPlayer(player: AFrame.Entity) {
    player.setAttribute("networked",
        { 'template': '#' + this.templateID,
        'attachTemplateToLocal': this.options.attachTemplateToLocal })
  }

  addTemplateToPlayerByID(playerID: string = 'player') {
    const player = document.getElementById(playerID) as AFrame.Entity
    player.setAttribute("networked",
        { 'template': '#' + this.templateID,
        'attachTemplateToLocal': this.options.attachTemplateToLocal })
  }

  fragmentFromString(HTML: string) {
    return document.createRange().createContextualFragment(HTML)
  }

  constructTemplate() {
    return `
          <template id="${this.templateID}">
                <a-entity class="avatar">
                ${this.avatarAsset.assetString}
                </a-entity>
              </template>
          `
  }

}

export type AvatarOptions = {
  attachTemplateToLocal: boolean
}

export const defaultAvatarOptions = {
  attachTemplateToLocal: false
}

export const defaultTemplateID: string = 'avatar-template'