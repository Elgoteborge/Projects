import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            component: AboutView,
            path: '/about'
        },
        {
            component: HomeView,
            path: '/'
        },
        {
            component: ProductView,
            path: '/product/:id'
        }
    ]
})
