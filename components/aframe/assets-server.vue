<!--
TODO: Move logic to pull items dynamically from server
-->

<template>
  <v-fragment>
    <aframeAsset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </v-fragment>
</template>


<script lang="ts">
import AframeAsset from "../../classes/aframe/asset"
// @ts-ignore
import Fragment from "vue-fragment"

// TODO: Replace with server hooks

const listItems: AframeAsset[] = [
  new AframeAsset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new AframeAsset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf")
]

export default {}
</script>