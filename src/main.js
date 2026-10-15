import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'

const app = createApp(App).use(router).directive('reveal', reveal)
router.isReady().then(() => app.mount('#app'))
