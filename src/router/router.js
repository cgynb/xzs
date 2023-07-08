import { createRouter, createWebHashHistory } from "vue-router";
import { useCommonStore } from "../store/common";
import { Message } from "@arco-design/web-vue";

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
        props: true,
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null){
                next();
                return true;
            }else{
                Message.info("请先登录");
                next("/homepage");
                return false;
            }
          },
    },
    {
        path: "/buy/:keyword",
        component: () => import("@/components/buy/Buy.vue"),
        props: true,
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null){
                next();
                return true;
            }else{
                Message.info("请先登录");
                next("/homepage");
                return false;
            }
          },
    },
    {
        path: "/sell",
        component: () => import("@/components/sell/Sell.vue"),
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null){
                next();
                return true;
            }else{
                Message.info("请先登录");
                next("/homepage");
                return false;
            }
          },
    },
    {
        path: "/chat",
        component: () => import("@/components/chat/ChatCenter.vue"),
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null){
                next();
                return true;
            }else{
                Message.info("请先登录");
                next("/homepage");
                return false;
            }
          },

    },
    {
        path: "/user",
        component: () => import("@/components/userpage/UserPage.vue"),
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null){
                next();
                return true;
            }else{
                Message.info("请先登录");
                next("/homepage");
                return false;
            }
          },
    },
    {
        path: "/admin",
        component: () => import("@/components/admin/Admin.vue"),
        beforeEnter: (to, from, next) => {
            const store = useCommonStore();
            if(store.user !== null && store.role === '2'){
                next();
                return true;
            }else{
                Message.info("您不是管理员");
                next("/homepage");
                return false;
            }
          },
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