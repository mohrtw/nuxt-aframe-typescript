export default class AvatarTemplate {
    templateAdded: boolean = false;
  
    constructor() {
      // @ts-ignore
      NAF.schemas.add({
        template: "#avatar-rig-template",
        components: [
          {
            component: "position"
          },
          {
            component: "rotation"
          },
          {
            selector: ".camera-rig",
            component: "rotation"
          },
          {
            selector: ".camera-rig",
            component: "position"
          },
          {
            selector: ".player-camera",
            component: "rotation"
          },
          {
            selector: ".player-camera",
            component: "position"
          }
        ]
      });
  
      // This should all be refactored as a template and moved into the a-assets
      var frag = this.fragmentFromString(`
          <template id="avatar-rig-template" v-pre>
              <a-entity>
                  <a-entity class="camera-rig"
                      position="0 0 0">
                      <a-entity
                          class="player-camera camera">
                          <a-sphere color="blue">
                          </a-sphere>
                      </a-entity>
                  </a-entity>
              </a-entity>
          </template> 
          `);
      var assets = document.querySelector("a-assets");
      assets.appendChild(frag);
    }
  
    fragmentFromString(strHTML: string) {
      return document.createRange().createContextualFragment(strHTML);
    }
  }
  