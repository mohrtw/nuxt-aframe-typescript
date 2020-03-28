Vue.component('avatar-template', {
  template: `<template  id="avatar-template">
  <a-entity class="avatar">
    <a-sphere class="head" color="#ffffff" scale="0.45 0.5 0.4"></a-sphere>
    <a-entity class="face" position="0 0.05 0">
      <a-sphere class="eye" color="#efefef" position="0.16 0.1 -0.35" scale="0.12 0.12 0.12">
        <a-sphere class="pupil" color="#000" position="0 0 -1" scale="0.2 0.2 0.2"></a-sphere>
      </a-sphere>
      <a-sphere class="eye" color="#efefef" position="-0.16 0.1 -0.35" scale="0.12 0.12 0.12">
        <a-sphere class="pupil" color="#000" position="0 0 -1" scale="0.2 0.2 0.2"></a-sphere>
      </a-sphere>
    </a-entity>
  </a-entity>
</template>`,
  
   mounted(){
  // Add this to the vuex store
  // @ts-ignore
            document.querySelector('a-entity').addEventListener('loaded', self.onSceneLoaded) 
},
  methods: {
    onSceneLoaded() {
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
      // Add to vuex store?
  }
  }
})