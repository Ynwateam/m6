import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Fantasy from "../views/Fantasy.vue";
import Royale from "../views/Royale.vue";
import Rpg from "../views/Rpg.vue";
import Shooter from "../views/Shooter.vue";
import Strategy from "../views/Strategy.vue";
import Anime from "../views/Anime.vue";
import Voxel from "../views/Voxel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/voxel",
      name: "voxel",
      component: Voxel,
    },
    {
      path: "/anime",
      name: "anime",
      component: Anime,
    },
    {
      path: "/fantasy",
      name: "fantasy",
      component: Fantasy,
    },
    {
      path: "/rpg",
      name: "Rpg",
      component: Rpg,
    },
    {
      path: "/royale",
      name: "Royale",
      component: Royale,
    },
    {
      path: "/shooter",
      name: "Shooter",
      component: Shooter,
    },
    {
      path: "/strategy",
      name: "Strategy",
      component: Strategy,
    },
  ],
});

export default router;
