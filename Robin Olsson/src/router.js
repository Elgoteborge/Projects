import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'
import CartView from './views/CartView.vue'
import CashOutView from './views/CashOutView.vue'

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
        },
        {
            component: CartView,
            path: '/Cart'
        },
        {
            component: CashOutView,
            path: '/CashOut'
        }
    ]
})
