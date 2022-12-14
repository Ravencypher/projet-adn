import {
    createRouter,
    createWebHistory
  } from "vue-router";
  import Accueil from "../views/Accueil.vue";
  import Inscription from "../views/Inscription.vue";
  import Connexion from "../views/Connexion.vue";
  import CreationBoycott from"../views/CreationBoycott.vue";
  import ProfilUtilisateur from"../views/ProfilUtilisateur.vue";
  import ProfilAutre from"../views/ProfilAutre.vue";
  import RechercheMembre from"../views/RechercheMembre.vue";
  import PageBoycott from"../views/PageBoycott.vue";
  import PageAdministrateur from"../views/PageAdministrateur.vue";
  import AffichageMembre from "../views/AffichageMembre.vue";
  import Confirmation from "../views/Confirmation.vue";
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
      },
      {
        path:"/creationBoycott",
        name: "CreationBoycott",
        component: CreationBoycott,
        /* meta:{
          requiresAuth: true,
        } */ 
      },
      {
        path:"/profilUtilisateur",
        name:"ProfilUtilisateur",
        component: ProfilUtilisateur,
       /*  meta:{
          requiresAuth: true,
        } */ 
      },
      {
        path:"/profilAutre",
        name:"/ProfilAutre",
        component:ProfilAutre,
      },
      {
        path:"/rechercheMembre",
        name:"RechercheMembre",
        component: RechercheMembre,
        /* meta:{
          requiresAuth: true,
        }  */
      },
      {
        path:"/pageBoycott/:id",
        name:"PageBoycott",
        component: PageBoycott,
        /* meta:{
          requiresAuth: true,
        } */ 
      },
      {
        path:"/pageAdministrateur",
        name:"PageAdministrateur",
        component: PageAdministrateur,
        /* meta:{
          requiresAuth: true,
        }  */
      },
      {
        path:"/affichageMembre",
        name: "AffichageMembre",
        component: AffichageMembre,
      },
       {
        path:"/confirmation/:confirmationCode",
        name: "Confirmation",
        component: Confirmation,
      },
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
    next({name : "Connexion"})
  } else{
    next()
  }
})
export default router;
