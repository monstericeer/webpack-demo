<template>
  <div id="app">
    {{msg}}
    <img :src="monstericeer">
  </div>
</template>

<script>
import monstericeer from './assets/images/monstericeer.jpg'
export default {
  data(){
    return {
      msg: 'Hello',
      monstericeer: monstericeer
    }
  }
}
</script>

<style>
  @import './assets/styles/index.css';
</style>

