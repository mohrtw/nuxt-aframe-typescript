<template>
  <!-- TODO: Look at aframeAsset, sceneObjects and avatar
  These will need to be dynamically loaded from our REST API (Nakama)
  -->
  <a-scene networked-scene>
    <assets />
    <sceneObjects />
    <avatar />
  </a-scene>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import avatar from "./avatar.vue"
import assets from "./assets.vue"
import sceneObjects from "./scene-objects.vue"

const sceneAttributes = `
    room: xrchat;
    debug: true;
    serverURL:http://localhost:8080;
    adapter: socketio;
    `

@Component({
  components: {
    assets,
    sceneObjects,
    avatar
      }
})
export default class Scene extends Vue {

  mounted() {
    // This is a really easy way to hook into the lifecycle that is guaranteed due to SSR
    document
      .querySelector("a-scene")
      .setAttribute("networked-scene", sceneAttributes)
  }
}
</script>