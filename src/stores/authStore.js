import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";

const baseUrl = process.env.API_URL;
const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";
export const useAuthStore = defineStore("utilisateur", {
   id:'user',

  state: () => ({
    utilisateurId: null,
    token: localStorage.getItem('token') ?? false,
    loggedIn:localStorage.getItem('token') ? true : false,

  }),
  actions: {
    //Pour creer un compte
    register(user) {
      console.log(JSON.stringify(user));
      fetch(`${apiAdn}/signup`, {
        // eslint-disable-next-line prettier/prettier
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          const toast = useToast();
          toast.success("Vous êtes inscrit");
          router.push({ name: "Connexion" });
        })
        .catch((error) => console.log(error));
    },

    login(user) {
      fetch(`${apiAdn}login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            this.utilisateurId = data.utilisateurId;
            this.token = data.token;
            localStorage.setItem("token", data.token);
            localStorage.setItem("utilisateurId", data.utilisateurId);
            console.log(localStorage.getItem("token"));
            console.log(localStorage.getItem("utilisateurId"));
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
      });
    },
    //Pour se deconnecter
    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("utilisateurId");
      const toast = useToast();
      toast.success("Vous êtes déconnectés");
      router.push({ name: "Accueil" });
    },
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
    user() {
      const utilisateurId = localStorage.getItem("utilisateurId");      
      fetch(`${apiAdn}utilisateur/${utilisateurId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            return data;
          });
        }
      });
    },
  },
});
