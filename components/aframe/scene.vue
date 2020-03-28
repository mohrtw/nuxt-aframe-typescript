<template>
  <!-- TODO: Look at aframeAsset, sceneObjects and avatar
  These will need to be dynamically loaded from our REST API (Nakama)
  -->
    <a-scene :networked-scene="'serverURL: https://nxr.lifescope.io; app: lifescope-xr; room: myxrroom; audio: true; adapter: webrtc;'">
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
import avatarTemplate from "./avatar-template.vue"

export default {
    components : {
        assets,
        sceneObjets,
        avatarTemplate
    },
    mounted() {
        // This is a really easy way to hook into the lifecycle that is guaranteed due to SSR
            document.querySelector('a-scene').addEventListener('loaded', self.onSceneLoaded) 
    },

    methods: {
        onSceneLoaded() {
            const template = new AvatarTemplate();
            // Add to vuex store?
        }
    }
}
</script>