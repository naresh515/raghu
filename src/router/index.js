import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import Resume from "../components/Resume.vue";
import Contact from "../components/contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
