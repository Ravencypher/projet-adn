import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";

const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";

export const useUserStore = defineStore("Utilisateur", {
  actions: {
    async getUser(utilisateurId) {
      const response = await fetch(`${apiAdn}utilisateur/${utilisateurId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      if (response.ok) {
        const data = await response.json();
        this.utilisateur = data;
        return data
      }
      return null;
    },
    async updateUser(utilisateurId, user) {
      try{
        await fetch(`${apiAdn}/utilisateur/${utilisateurId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(user),
        })
        const toast = useToast();
        toast.success("Vos informations ont été mises à jour");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
