<template>
    <client-only>
        <scene-networked />
    </client-only>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getters, RootState } from '../store'
import { MyModuleState } from '../store/modules/mymodule'

import scene from '../components/scene.vue'
import user from '../components/user.vue'
import userClass from '../components/userClass.vue'
import userClassStore from '../components/userClass.vue'
import { User } from '../components/userClass.vue'

import sceneNetworked from '../components/sceneNetworked.vue'

@Component({
    components: {
        'scene': scene,
        'user': user,
        'user-class': userClass,
        'user-class-store': userClassStore,
        'scene-networked': sceneNetworked
    }
})
export default class IndexComp extends Vue  {
    BaseUser: User = {
        firstName: 'Hello',
        lastName: 'Computer'
    }
    StoreUser: User = {
        firstName: '',
        lastName: ''
    }
    mounted() {
        const name = this.$store.getters['fullName'] as ReturnType<typeof getters.name>
        this.StoreUser.firstName = (this.$store.state as RootState).myFirstName
        this.StoreUser.lastName = (this.$store.state as RootState).myLastName
        const aVal = (this.$store.state.mymod as MyModuleState).aVal
    }
}
</script>