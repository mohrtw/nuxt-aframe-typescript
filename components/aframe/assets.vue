<template>
    <a-assets>
            <!-- Remove default assets or add debug flag -->
            <avatarTemplate />
            <defaultAssets />
            <serverAssets />
        </a-assets>
</template>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import defaultAssets from './assets-default.vue'
import serverAssets from './assets-server.vue'
import avatarTemplate from "./avatar-template.vue"

@Component ({
  components: {
        defaultAssets,
        serverAssets,
        avatarTemplate
    }
})

export default class ServerAssets extends Vue {
  
}
</script>