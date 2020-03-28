<template>
       <a-entity id="player" />
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