<template>
    <a-scene networked-scene>
        <a-assets>
            <!-- Avatar -->
        <template id="avatar-template">
          <a-entity class="avatar">
            <a-sphere class="head"
              color="#ffffff"
              scale="0.45 0.5 0.4"
            ></a-sphere>
            <a-entity class="face"
              position="0 0.05 0"
            >
              <a-sphere class="eye"
                color="#efefef"
                position="0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
              <a-sphere class="eye"
                color="#efefef"
                position="-0.16 0.1 -0.35"
                scale="0.12 0.12 0.12"
              >
                <a-sphere class="pupil"
                  color="#000"
                  position="0 0 -1"
                  scale="0.2 0.2 0.2"
                ></a-sphere>
              </a-sphere>
            </a-entity>
          </a-entity>
        </template>
        </a-assets>
        <a-sphere
            color="blue"
            position="0 0 -10">
        </a-sphere>
        
        <a-sphere
            color="red"
            position="0 0 10">
        </a-sphere>

        <a-entity id="player"
            networked="template:#avatar-template;attachTemplateToLocal:false;"
            camera
            position="0 1.6 0"
            wasd-controls look-controls
            >
            <a-sphere class="head"
            visible="false"
            random-color
            ></a-sphere>
        </a-entity>
    </a-scene>
</template>

<script lang="ts">

// import NAF from 'networked-aframe'
// const NAF = require('networked-aframe')

export default {

    mounted() {
    //     NAF.schemas.add({
    //     template: '#avatar-template',
    //     components: [
    //       'position',
    //       'rotation',
    //       {
    //         selector: '.head',
    //         component: 'material',
    //         property: 'color'
    //       }
    //     ]
    //   });
    }
    
}
</script>