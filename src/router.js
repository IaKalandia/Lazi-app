// Import Vue Router functions and components
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

// Define routes configuration
const routes = [
    {
        path: '/',              // URL path for homepage
        name: 'home',           // Route name for programmatic navigation
        component: Home         // Component to render for this route
    },
    {
        path: '/about',         // URL path for about page
        name: 'about',          // Route name for programmatic navigation
        component: About        // Component to render for this route
    }
]

// Create router instance with configuration
const router = createRouter({
    history: createWebHashHistory(),    // Use HTML5 history mode for cleaner URLs
    routes                         // Routes configuration from above
})

// Export router to be used in main.js
export default router