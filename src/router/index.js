import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// Mobile-specific views
import MobileHome from '../views/mobile/Home.vue'
import MobileAbout from '../views/mobile/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

export default new VueRouter({
    routes
}) 