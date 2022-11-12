import { createApp } from 'vue'
import App from './App.vue'

// import './assets/main.css'

const app = createApp(App)
const component = app.mount('#app')
console.log(component)
