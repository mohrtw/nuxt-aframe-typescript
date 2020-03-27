<template>
    <div>
        Name: {{ fullName }}
        Message: {{ message }}
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex'

export interface User {
  firstName: string
  lastName: string
}

function DefaultUserFactory () {
    return {
        firstName: 'Default',
        lastName: 'User'
    }
}

@Component({
  computed: {
    ...mapState([
      'myFirstName'
    ])
  }
})
export default class UserComponent extends Vue {
  @Prop({ type: Object, default: DefaultUserFactory }) readonly user!: User

  message: string = 'This is a message from class API'

  protected myFirstName!: string

  get fullName (): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }

  mounted() {
    console.log('userClassStore mounted')
    console.log(this.myFirstName)
  }
}
</script>
