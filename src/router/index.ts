import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES } from './routesMap'
// routes
import ListView from '@/views/ListView.vue'
import MainView from '@/views/MainView.vue'
import TaC from '@/views/TaC.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: ROUTES.MAIN_VIEW,
            component: MainView,
        },
        {
            path: '/list',
            name: ROUTES.LIST_VIEW,
            component: ListView,
        },
        {
            path: '/terms-and-conditions',
            name: ROUTES.TAC_VIEW,
            component: TaC,
        },
    ],
})

export default router
