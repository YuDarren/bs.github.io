import { createRouter, createWebHistory } from "vue-router";
import Permission from "@/views/Permission.vue";
import Commodity from "@/views/Commodity.vue";
import Home from "@/views/Home.vue";
import Employee from "@/views/Permission/Employee.vue";
import Supervisor from "@/views/Permission/Supervisor.vue";
import AddPersonInfo from "@/components/AddPersonInfo.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/permission",
    name: "permission",
    component: Permission,
    children: [
      {
        path: "employee",
        component: Employee,
      },
      {
        path: "supervisor",
        component: Supervisor,
      },
    ],
  },
  {
    path: "/commodity",
    name: "commodity",
    component: Commodity,
  },
  {
    path: "/addpersoninfo",
    name: "addpersoninfo",
    component: AddPersonInfo,
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
