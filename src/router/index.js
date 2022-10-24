import {
    createRouter,
    createWebHistory
  } from "vue-router";
  import Accueil from "../views/Accueil.vue";
/*   import Add from "../views/Add.vue";
  import NotFound from '../views/404.vue'; */
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        redirect: "/accueil",
      },
      {
        path: "/accueil",
        name: "Accueil",
        component: Accueil,
      }
/*       {
        path: "/add",
        name: "Add",
        component: Add,
      },
      {
        path: '/:notFound(.*)',
        component: NotFound
      }, */
    ],
    scrollBehavior(_, _2, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return {
        left: 0,
        top: 0,
      };
    },
  });
  
  export default router;