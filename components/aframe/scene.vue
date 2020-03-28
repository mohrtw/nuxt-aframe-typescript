<template>
  <!-- TODO: Look at aframeAsset, sceneObjects and avatar
  These will need to be dynamically loaded from our REST API (Nakama)
  -->
    <a-scene networked-scene="room: dev;
      debug: true;
    serverURL:http://localhost:8080;
      adapter: webrtc;">
    <assets />
    <sceneObjects />
    <avatar />
    </a-scene>
</template>


<script lang="ts">
// @ts-nocheck

import avatar from "./avatar.vue"
import assets from "./assets.vue"
import sceneObjects from "./scene-objects.vue"

const sceneAttributes = `
    room: xrchat;
    debug: true;
    adapter: socketio;
    `

export default {
    components : {
        assets,
        sceneObjects,
        avatar
            },
    mounted() {
        // This is a really easy way to hook into the lifecycle that is guaranteed due to SSR
            document.querySelector('a-scene').addEventListener('loaded', self.onSceneLoaded) 
    },

    methods: {
        onSceneLoaded() {
            document.querySelector('a-scene').setAttribute("networked-scene", sceneAttributes)
            // Add to vuex store?
        }
    }
}
</script>