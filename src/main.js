import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Datepicker from 'vue3-date-time-picker';
import App from './App.vue'

import './index.css'
import 'vue3-date-time-picker/dist/main.css'


const routes = [
  { path: '/register', name: 'register', component: () => import('./views/Auth/Register.vue')},
  { path: '/login', name: 'login', component: () => import('./views/Auth/Login.vue')},
  { path: '/turns', name: 'index_turns', component: () => import('./views/Turn/Index.vue')},
  { path: '/turns/create', name: 'create_turn', component: () => import('./views/Turn/Create.vue')},
  { path: '/turns/show/:id', name: 'show_turn', component: () => import('./views/Turn/Show.vue')},
  { path: '/turns/:id/edit', name: 'edit_turn', component: () => import('./views/Turn/Edit.vue')},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App)
.component('Datepicker', Datepicker)
.use(router)
.mount('#app')
