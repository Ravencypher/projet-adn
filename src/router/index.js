import {
    createRouter,
    createWebHistory
  } from "vue-router";
  import Accueil from "../views/Accueil.vue";
  import Inscription from "../views/Inscription.vue";
  import Connexion from "../views/Connexion.vue";
  import CreationBoycott from"../views/CreationBoycott.vue";
  import ProfilUtilisateur from"../views/ProfilUtilisateur.vue";
  import RechercheMembre from"../views/RechercheMembre.vue";
  import PageBoycott from"../views/PageBoycott.vue";
  import PageAdministrateur from"../views/PageAdministrateur.vue";
/* import NotFound from '../views/404.vue'; */
import { useAuthStore } from '../stores/authStore';

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
        meta:{
          requiresAuth: true,
        } 
      },
      {
        path:"/creationBoycott",
        name: "CreationBoycott",
        component: CreationBoycott,
      },
      {
        path:"/profilUtilisateur",
        name:"ProfilUtilisateur",
        component: ProfilUtilisateur,
      },
      {
        path:"/rechercheMembre",
        name:"RechercheMembre",
        component: RechercheMembre,
      },
      {
        path:"/pageBoycott",
        name:"PageBoycott",
        component: PageBoycott,
      },
      {
        path:"/pageAdministrateur",
        name:"PageAdministrateur",
        component: PageAdministrateur,
      },

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
router.beforeEach((to, from, next) =>{
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !isAuthenticated){
    next({name : 'connexion'})
  } else{
    next()
  }
})
export default router;
