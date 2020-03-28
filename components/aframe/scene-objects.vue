<template>
  <fragment>
    <a-asset v-for="(item) in listItems" v-bind:key="item.id" src="item.src" />
  </fragment>
</template>


<script lang="ts">
import Asset from "../../classes/aframe/asset"

// @ts-ignore
import Fragment from "vue-fragment"
import Aframe from 'aframe'

const listItems: Asset[] = [

// Populate these assets from the server and remove these defaults
  new Asset("a-gltf-model", "scene", "/gltf/scenes/gallery/gallery.gltf"),
  new Asset("a-gltf-model", "avatar-0", "/gltf/avatars/head/scene.gltf"),
  new Asset("a-gltf-model", "boundry", "#scene", "boundry")]


export default {
    components: {
'fragment': Fragment.Fragment,
'a-asset': Aframe.AEntity
    },
    data: () => {
      return {
    listItems: listItems
      }
  }
}
</script>