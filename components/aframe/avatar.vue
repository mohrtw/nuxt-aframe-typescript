<template>
       <a-entity id="player" />
</template>
<script lang="ts">
import NetworkedAvatar from 'classes/aframe/networked-avatar'

export default {
    mounted(){
      const playerAvatar = new NetworkedAvatar()
      // Add playerAvatar.player to store?
    }
}
</script>