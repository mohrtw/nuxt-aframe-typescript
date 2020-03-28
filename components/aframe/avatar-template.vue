<template>
  
</template>

<script lang="ts">
import AvatarTemplate from '../../classes/aframe/avatar-template'
export default {
mounted(){
  // Add this to the vuex store
  // @ts-ignore
            document.querySelector('a-entity').addEventListener('loaded', self.onSceneLoaded) 
            const a = new AvatarTemplate()
},

    methods: {
    onSceneLoaded() {

              const t = document.getElementsByTagName("templatenaf")[0];
            // @ts-ignore
              document.renameNode(t, null, "template");
            // @ts-ignore
            NAF.schemas.add({
              template: "#avatar-template",
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
      // Add to vuex store?
  }
    }

  }
  </script>