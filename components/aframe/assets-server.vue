<!--
TODO: Move logic to pull items dynamically from server
-->

<template>
  <fragment>
    <aframeAsset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </fragment>
</template>


<script lang="ts">
import Asset from "../../classes/aframe/asset"
// @ts-ignore
import Fragment from "vue-fragment"

// TODO: Replace with server hooks

const listItems: Asset[] = [
  new Asset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new Asset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf")
]

export default {
    data: () => {
      return {
    listItems: listItems
      }
  }
}
</script>