<template>
    <div>
        <!-- <scene>
        </scene> -->
        <nuxt-link to="/app"> A-Frame scene
        </nuxt-link>
        <!-- <user :user="BaseUser">
        </user>
        <user-class :user="StoreUser">
        </user-class>
        <user-class-store :user="StoreUser">
        </user-class-store> -->
    </div>
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


@Component({
    components: {
        'scene': scene,
        'user': user,
        'user-class': userClass,
        'user-class-store': userClassStore
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
        console.log('Mounted Index')
        const name = this.$store.getters['fullName'] as ReturnType<typeof getters.name>
        console.log(name);
        this.StoreUser.firstName = (this.$store.state as RootState).myFirstName
        this.StoreUser.lastName = (this.$store.state as RootState).myLastName

        const aVal = (this.$store.state.mymod as MyModuleState).aVal
        console.log(aVal)
    }
}
</script>