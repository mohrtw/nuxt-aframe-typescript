<template>
  <a-entity
    id="rightHandController"
    v-if="rightHandControllerActive"
    teleport-controls="cameraRig: #playerRig; startEvents: teleportstart; endEvents: teleportend; collisionEntities: .boundry;"
    windows-motion-controls="hand: right;"
    oculus-go-controls="hand: right;"
    oculus-touch-controls="hand: right;"
    daydream-controls="hand: right;"
    vive-controls="hand: right;"
    gearvr-controls="hand: right;"
  >
    <a-entity id="rightHandCursor" raycaster="objects: .clickable, .a-enter-vr; showLine: true;"></a-entity>
  </a-entity>
</template>

<script lang="ts">
import { mapState } from "vuex"
import AFRAME from 'aframe'
import THREE from 'three'
import Hand from 'enums/player/hand'
import InputController from 'classes/aframe/input-controller'

// TODO: Controller should be stored as a global vuex store object and accessed through accessor
// We should get element once to have reference, and keep the reference, multiple get elements is not efficient

export default {
  data() {
    return {
      // Replace with object outputs? Or just output the controller?
      //teleporting: false,
      //teleportThreshold: 0.4,
      //intersected: null
    }
  },

  computed: {
    ...mapState("xr/avatar", ["rightHandControllerActive"])
  },

  mounted() {
const inputController = new InputController(Hand.Right)
// Add input controller to view store
  }

}
</script>