import { defineStore } from "pinia";

const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";
export const useConfirmStore = defineStore("Confirmation", {
  state: () => ({}),
  actions: {
    async verifyUtilisateur(code) {
      console.log(`${apiAdn}verify/${code}`);
      const response = await fetch(`${apiAdn}verify/${code}`, {
        method: "GET"
      })
      console.log(response);
      if (response.ok) {
        return true;
      }
    },
  },
});