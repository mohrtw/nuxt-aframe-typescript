<template>
<div>
  <img id="sky" src="http://i.imgur.com/WqlqEkq.jpg" crossorigin="anonymous">
  <img id="grid" src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" crossorigin="anonymous">
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
//@ts-ignore
import Fragment from 'vue-fragment'

@Component ({
components: {
  'fragment': Fragment.Fragment
}
})

export default class DefaultAssets extends Vue {

}
</script>