import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import router from "../router";

const apiAdn = process.env.API_BASE_URL;

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
  },
});
