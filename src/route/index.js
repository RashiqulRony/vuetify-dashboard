import { createWebHistory, createRouter } from "vue-router";

import store                from "@/store";
import Login                from '@/components/Login'
import LoginRoot            from '@/components/Login'
import Dashboard            from '@/components/Home'
import Footer               from '@/components/shared/Footer'
import Header               from '@/components/shared/Header'

import NotFound             from '@/components/NotFound'

import Users                from '@/components/users/Index'
import UserCreate           from '@/components/users/Create'

import Posts                from '@/components/posts/Index'

import Categories           from '@/components/category/Index'
import CategoryCreate       from '@/components/category/Create'
import CategoryEdit         from '@/components/category/Edit'

const routes = [
    {
        path: "/",
        name: "LoginRoot",
        component: LoginRoot,
        meta: {title: 'Login'}
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {title: 'Login'}
    },
    {
        path: "/dashboard",
        name: "Home",
        components: {'default': Dashboard, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Dashboard'}
    },
    {
        path: "/users",
        name: "Users",
        components: {'default': Users, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Users'}
    },
    {
        path: "/user/create",
        name: "UserCreate",
        components: {'default': UserCreate, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'User Create'}
    },
    {
        path: "/posts",
        name: "Posts",
        components: {'default': Posts, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Posts'}
    },
    {
        path: "/categories",
        name: "Categories",
        components: {'default': Categories, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Categories'}
    },
    {
        path: "/category/create",
        name: "CategoryCreate",
        components: {'default': CategoryCreate, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Category Create'}
    },
    {
        path: "/category/edit/:id",
        name: "CategoryEdit",
        components: {'default': CategoryEdit, 'header': Header, 'footer': Footer},
        meta: {requiresAuth: true, title: 'Category Edit'}
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {title: '404 Not Found'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? "RashRon | " + toRoute.meta.title : 'Login';
    if (toRoute.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn === false) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
});

export default router;
