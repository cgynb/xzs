import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        redirect: "/homepage"
    },
    {
        path: "/homepage",
        component: () => import("@/components/homepage/HomePage.vue")
    },
    {
        path: "/goods/:id",
        component: () => import("@/components/goods/Goods.vue"),
        props: true
    },
    {
        path: "/buy/:keyword",
        component: () => import("@/components/buy/Buy.vue"),
        props: true
    },
    {
        path: "/sell",
        component: () => import("@/components/sell/Sell.vue")
    },
    {
        path: "/user",
        component: () => import("@/components/userpage/UserPage.vue")
    },
    {
        path: "/error",
        component: () => import("@/components/error/Error.vue")
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/error'
    }
]

const router =  createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    /*
    if need login
    then
        await get_token()
        next()
    else
        next()
    */
   next()
})

export default router