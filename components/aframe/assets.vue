<template>
    <a-assets>
            <!-- Remove default assets or add debug flag -->
            <defaultAssets />
            <serverAssets />
        </a-assets>
</template>
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import defaultAssets from './assets-default.vue'
import serverAssets from './assets-server.vue'

@Component ({
  components: {
        defaultAssets,
        serverAssets,
    }
})

export default class ServerAssets extends Vue {
  
}
</script>