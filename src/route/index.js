import { createWebHistory, createRouter } from "vue-router";

import Home      from '@/components/Home'
import Blogs      from '@/components/Blogs'
import Footer    from '@/components/shared/Footer'
import Header    from '@/components/shared/Header'
import NotFound    from '@/components/NotFound'


const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            'default': Home,
            'header': Header,
            'footer': Footer,
        },
    },
    {
        path: "/blogs",
        name: "Blogs",
        components: {
            'default': Blogs,
        },
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
});

export default router;
