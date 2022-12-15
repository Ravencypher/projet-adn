import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";

const apiAdn = process.env.API_BASE_URL;

export const useAuthStore = defineStore("auth", {
  id: "user",

  state: () => ({
    utilisateurId: null,
    token: localStorage.getItem("token") ?? false,
    loggedIn: localStorage.getItem("token") ? true : false,
    utilisateurTrouve: [],
    ville: null,
    pays: null,
  }),
  actions: {
    //Pour creer un compte
    register(user) {
      console.log(JSON.stringify(user));
      fetch(`${apiAdn}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          const toast = useToast();
          toast.success("Confimer votre email");
          router.push({ name: "Connexion" });
        })
        .catch((error) => console.log(error));
    },

    async login(user) {
      const response = await fetch(`${apiAdn}login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      if (response.ok) {
        response.json().then((data) => {
          this.utilisateurId = data.utilisateurId;
          this.token = data.token;
          localStorage.setItem("token", data.token);
          localStorage.setItem("utilisateurId", data.utilisateurId);
          console.log(localStorage.getItem("token"));
          console.log(localStorage.getItem("utilisateurId"));
          this.loggedIn = true;
          const toast = useToast();
          toast.success("Vous êtes connectés");
          router.push({ name: "Accueil" });
        });
      } else {
        response.json().then((data) => {
          const toast = useToast();
          toast.error(data.message);
        });
      }
    },
    //Pour se deconnecter
    logout() {      
      console.log("test");
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("utilisateurId");
      this.loggedIn = false;
      const toast = useToast();
      toast.success("Vous êtes déconnectés");
      router.push({ name: "Accueil" });      
    },
    //Pour rechercher
    rechercher(filtre) {
      fetch(`${apiAdn}utilisateurs/recherche?ville=${filtre.ville}&pays=${filtre.pays}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log(data)
            this.utilisateurTrouve = data;
            router.push({ name: "AffichageMembre" });
          });
        }
      });
    },
    getters: {
      isAuthenticated() {
        if (this.token) {
          //verification de la duree du token
          const payload = JSON.parse(atob(this.token.split(".")[1]));
          if (payload.exp > Date.now() / 1000) {
            return true;
          } else {
            this.user = null;
            this.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("utilisateurId");
            return false;
          }
        } else {
          return false;
        }
      },
    },
    afficher(state) {
      const activeUsers = state.users.filter(
        (ville, pays) => ville.active || pays.active
      );
      return () =>
        activeUsers.find((utilisateurId) => utilisateurId.id === utilisateurId);
    },
  },
});
