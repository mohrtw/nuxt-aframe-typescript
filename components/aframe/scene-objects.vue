<template>

<a-entity>
      <a-sky src="#sky" rotation="0 -90 0"></a-sky>

      <a-entity position="0 0 0"
        geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
        material="src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"></a-entity>

      <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
      <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
</a-entity>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
//@ts-ignore
import Fragment from 'vue-fragment'

@Component ({
components: {
  'fragment': Fragment.Fragment
}
})

export default class SceneObjects extends Vue {

}
</script>