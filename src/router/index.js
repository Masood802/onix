import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import services from "../views/services.vue";
import about from "../views/about.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        default: HomeView,
        services: services,
        about: about,
      },
    },
    {
      path: "/services",
      components: {
        default: HomeView,
        services: services,
        about: about,
      },
    },
    {
      path: "/about",
      components: {
        default: HomeView,
        services: services,
        about: about,
      },
    },
  ],
});

export default router;
