import { createWebHistory, createRouter } from "vue-router";

import Login        from '@/components/Login'
import LoginRoot    from '@/components/Login'
import Dashboard    from '@/components/Home'
import Footer       from '@/components/shared/Footer'
import Header       from '@/components/shared/Header'
import NotFound     from '@/components/NotFound'

import Users        from '@/components/users/Index'
import UserCreate   from '@/components/users/Create'

import Posts        from '@/components/posts/Index'

const routes = [
    {
        path: "/",
        name: "LoginRoot",
        component: LoginRoot,
        meta: {
            title: 'Login'
        }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: "/dashboard",
        name: "Home",
        components: {
            'default': Dashboard,
            'header': Header,
            'footer': Footer,
        },
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: "/users",
        name: "Users",
        components: {
            'default': Users,
            'header': Header,
            'footer': Footer,
        },
        meta: {
            title: 'Users'
        }
    },
    {
        path: "/user/create",
        name: "UserCreate",
        components: {
            'default': UserCreate,
            'header': Header,
            'footer': Footer,
        },
        meta: {
            title: 'User Create'
        }
    },
    {
        path: "/posts",
        name: "Posts",
        components: {
            'default': Posts,
            'header': Header,
            'footer': Footer,
        },
        meta: {
            title: 'Posts'
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        components: {
            'default': NotFound,
            'header': Header,
            'footer': Footer,
        },
        meta: {
            title: '404 Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title = toRoute.meta && toRoute.meta.title ? "RashRon | " + toRoute.meta.title : 'Login';
    next();
});

export default router;
