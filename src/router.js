import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import VisionMission from './views/VisionMission.vue'
import Contact from './views/Contact.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: 'home' } },
    { path: '/tentang', component: About, meta: { title: 'aboutFull' } },
    { path: '/layanan', component: Services, meta: { title: 'services' } },
    { path: '/visi-misi', component: VisionMission, meta: { title: 'vision' } },
    { path: '/kontak', component: Contact, meta: { title: 'contact' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: (to) => (to.hash ? { el: to.hash, top: 72 } : { top: 0 }),
})
