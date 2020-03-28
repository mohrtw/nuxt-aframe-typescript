<template>
    <client-only>
        <scene />
    </client-only>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getters, RootState } from 'store'
import { MyModuleState } from 'store/modules/mymodule'
import scene from '../components/aframe/scene.vue'

@Component({
    components: {
        'scene': scene,
    }
})
export default class Index extends Vue  {

}
</script>