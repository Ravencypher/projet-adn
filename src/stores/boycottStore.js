import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";
import FormData from "form-data";

const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";
export const useBoycottStore = defineStore("boycott", {
  actions: {
    creerBoycott(boycott) {
      console.log(localStorage.getItem("utilisateurId"));
      console.log(localStorage.getItem("token"));
      const formdata = new FormData();
      formdata.append("titre", boycott.nomProduit);
      formdata.append("image", boycott.image);
      formdata.append("resume", boycott.resume);
      formdata.append("description", boycott.description);
      formdata.append("idUtilisateur", localStorage.getItem("utilisateurId"));
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
          router.push({ name: "Connexion" });
        } else {
          response.json().then((data) => {
            console.log(data);
          });
        }
      });
    },
  },
});
