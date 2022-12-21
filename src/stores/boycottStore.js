import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import FormData from "form-data";

/* const apiAdn = process.env.API_URL; */
const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";
export const useBoycottStore = defineStore("boycott", {
  state: () => ({
    boycotts: [],
    boycottsOfUser: [],
  }),
  actions: {
    creerBoycott(boycott) {
      //console.log(localStorage.getItem("utilisateurId"));
      //console.log(localStorage.get  Item("token"));
      const formdata = new FormData();
      formdata.append("titre", boycott.nomProduit);
      formdata.append("image", boycott.image);
      formdata.append("resume", boycott.resume);
      formdata.append("description", boycott.description);
      formdata.append("idUtilisateur", localStorage.getItem("utilisateurId"));
      fetch(`${apiAdn}boycott`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formdata,
      }).then((response) => {
        if (response.ok) {
          const toast = useToast();
          toast.success("Boycott créé");
          router.push({ name: "Accueil" });
        } else {
          response.json().then((data) => {
            console.log(data);
          });
        }
      });
    },
    suivreBoycott(idBoycott) {      
      const utilisateur = {
        idUtilisateur: localStorage.getItem("utilisateurId"),
      };
      console.log(utilisateur);
      fetch(`${apiAdn}boycott/${idBoycott}/suivre`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utilisateur),
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            const toast = useToast();
            toast.success(data.msg);
            this.loadBoycotts();
          })

        } else {
          response.json().then((data) => {
            console.log(data);
          });
        }
      });
    },
    loadBoycotts() {
      fetch(`${apiAdn}boycotts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            this.boycotts = data;
            console.log(data);
          });
        } else if (response.statusText) {
          console.log(response.statusText);
        }
      });
    },
    async getBoycott(id) {
      const response = await fetch(`${apiAdn}boycott/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response.ok) {
        return await response.json();
      } else if (response.statusText) {
        console.log(response.statusText);
      }
    },
    loadBoycottsOfUser(utilisateurId) {
      fetch(`${apiAdn}user/${utilisateurId}/boycotts`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            this.boycottsOfUser = data;
            console.log(data);
          });
        } else if (response.statusText) {
          console.log(response.statusText);
        }
      });
    },
    deleteBoycott() {
      fetch(`${apiAdn}boycott/:_id`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
        .then(() => this.loadBoycotts())
        .catch((error) => console.log(`error is : ${error}`));
    },

  },
});
