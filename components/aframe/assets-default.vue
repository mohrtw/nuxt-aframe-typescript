<template>
  <fragment>
    <a-gltf-model class="scene" id="scene" src="/gltf/scenes/gallery/gallery.gltf" />
        <a-gltf-model class="avatar-0" id="avatar-0" src="/gltf/avatars/head/scene.gltf" />
  </fragment>
</template>

<script lang="ts">
// @ts-ignore
import  {Fragment} from "vue-fragment"

export default { 
  components: {
    'fragment': Fragment
  }
}
</script>