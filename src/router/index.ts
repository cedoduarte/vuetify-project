import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: "/", name: "home", component: () => import("../components/HomeViewComponent.vue") },
    { path: "/about", name: "about", component: () => import("../components/AboutViewComponent.vue") },
    { path: "/task", name: "task", component: () => import("../components/TaskViewComponent.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;