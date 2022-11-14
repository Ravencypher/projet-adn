import {
    createRouter,
    createWebHistory
  } from "vue-router";
  import Accueil from "../views/Accueil.vue";
  import Inscription from "../views/Inscription.vue";
  import Connexion from "../views/Connexion.vue";
/* import NotFound from '../views/404.vue'; */
  
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
      },
      {
        path: "/inscription",
        name: "Inscription",
        component: Inscription,
      },
      {
        path: "/connexion",
        name: "Connexion",
        component: Connexion,
      },
/*       {
        path: "/inscription,
        name: "Inscription",
        component: Inscription,
      }, */
/*       
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