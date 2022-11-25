import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import FormData from "form-data";

const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";
export const useBoycottStore = defineStore("boycott", {
  state: () => ({
    boycotts: []
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
      formdata.append("idUtilisateur", localStorage.getItem("utilisateurId"), boycott.idUtilisateur);
      fetch(`${apiAdn}boycott`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
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
    loadBoycotts() {
      fetch(`${apiAdn}boycotts`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {        
        if (response.ok) {          
          response.json().then((data) => {
            this.boycotts = data;
            console.log(data);
          })
        } else if(response.statusText) {
          console.log(response.statusText);        
        }
      });
    },
  },
});
