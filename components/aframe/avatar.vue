<template>
  <a-entity id="player"
    camera
    position="0 1.6 0"
    spawn-in-circle="radius:3"
    wasd-controls look-controls="reverseMouseDrag: true"
  />

</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Avatar from '../../classes/aframe/avatar'

@Component
export default class AvatarComp extends Vue{
  mounted(){
    const avatar = new Avatar()
    avatar.setupAvatar()
  }
}
</script>