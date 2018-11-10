import Vue from 'vue'
import App from './App.vue'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  el: "#app",
  components: { App },
  template: "</App>"
})