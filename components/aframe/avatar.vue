<template>
        <a-entity id="player"
        networked="template:#avatar-template;attachTemplateToLocal:false"
        camera
        position="0 1.6 0"
        spawn-in-circle="radius:3"
        wasd-controls look-controls
        />
</template>
<script lang="ts">
import Avatar from '../../classes/aframe/avatar'

export default {
    mounted(){
      const avatar = new Avatar()
      // Add playerAvatar.player to store?
    }
}
</script>