import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'


const routes = [
  { path: '/turns', name: 'index_turns', component: () => import('./views/Turn/Index.vue')},
  { path: '/show/:id', name: 'show_turn', component: () => import('./views/Turn/Show.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App)
.use(router)
.mount('#app')
