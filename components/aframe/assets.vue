<template>
        <a-assets>
            <!-- Remove default assets or add debug flag -->
            <avatarTemplate />
            <defaultAssets />
            <serverAssets />
        </a-assets>
</template>
<script lang="ts">
import defaultAssets from './assets-default.vue'
import serverAssets from './assets-server.vue'
import avatarTemplate from "./avatar-template.vue"

export default {
    components: {
        defaultAssets,
        serverAssets,
        avatarTemplate
    }
}
</script>