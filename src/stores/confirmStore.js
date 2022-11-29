 // eslint-disable-next-line prettier/prettier
import { defineStore } from "pinia";

const apiAdn = "https://adn-api-rest.onrender.com/api/v1/";

export const verifyUtilisateur = defineStore("Confirmation", {
    state: () => ({
       
      }),
        actions: {
          async verifyUtilisateur(code) {
          const response =  fetch(`${apiAdn}signup`+ code).then((response) => {
                return response.data;
              });
            },
        }
    })