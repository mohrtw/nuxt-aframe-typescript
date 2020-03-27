<template>
    <div>
        Name: {{ fullName }}
        Message: {{ message }}
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

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

@Component
export default class UserComponent extends Vue {
  @Prop({ type: Object, default: DefaultUserFactory }) readonly user!: User

  message: string = 'This is a message from class API'

  get fullName (): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}
</script>
