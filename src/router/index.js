import { createRouter, createWebHistory } from "vue-router";
import Permission from "@/views/Permission.vue";
import Commodity from "@/views/Commodity.vue";

const routes = [
  {
    path: "/",
    name: "permission",
    component: Permission,
  },
  {
    path: "/commodity",
    name: "commodity",
    component: Commodity,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
