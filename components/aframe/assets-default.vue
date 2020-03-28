<template>
  <!-- TODO: This scene will only be loaded if the network fails or if we are in developer mode
  Set up with some default assets and "server did not load" or something, I don't know, whatever
  -->
  <fragment>
    <a-asset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </fragment>
</template>


<script lang="ts">

import Asset from "../../classes/aframe/asset"

// @ts-ignore
import Fragment from "vue-fragment"

import Aframe from 'aframe'

export default {
  components: {
    'a-asset': Aframe.AEntity,
    fragment: Fragment.Fragment
  },
      data: () => {
      return {
    listItems: [
  new Asset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new Asset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf")
]
      }
      }
}
</script>