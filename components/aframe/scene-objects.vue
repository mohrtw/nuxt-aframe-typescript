<template>
  <v-fragment>
    <AframeAsset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </v-fragment>
</template>


<script lang="ts">
import AframeAsset from "classes/aframe/asset"

// @ts-ignore
import Fragment from "vue-fragment"

const listItems: AframeAsset[] = [

// Populate these assets from the server and remove these defaults
  new AframeAsset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new AframeAsset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf"),
  new AframeAsset("a-gltf-model", "boundry", "#scene", "boundry")]


export default {}
</script>