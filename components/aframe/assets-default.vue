<template>
  <!-- TODO: This scene will only be loaded if the network fails or if we are in developer mode
  Set up with some default assets and "server did not load" or something, I don't know, whatever
  -->
  <v-fragment>
    <aframeAsset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </v-fragment>
</template>


<script lang="ts">
import AframeAsset from "../../classes/aframe/asset"
// @ts-ignore
import Fragment from "vue-fragment"

const listItems: AframeAsset[] = [
  new AframeAsset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new AframeAsset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf")
]

export default {}
</script>