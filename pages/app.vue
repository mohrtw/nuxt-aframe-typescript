<template>
    <!-- <scene>
    </scene> -->
    <scene-networked>
    </scene-networked>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import scene from '../components/scene.vue'
import sceneNetworked from '../components/sceneNetworked.vue'

@Component({
    components: {
        'scene': scene,
        'scene-networked': sceneNetworked
    }
})
export default class IndexComp extends Vue  {
    
}
</script>