<template>
  <div class="row g-0 d-flex flex-wrap justify-content-between">
    <div class="col-3 m-4 d-flex flex-column align-items-center flex-fill">
      <figure>
        <img src="http://via.placeholder.com/200x200.png" alt="image boycott" />
      </figure>
      <div class="card-pseudo p-2">
        <input type="text" v-model="user.pseudo" />
      </div>
<!--       <div class="card-rang-user p-2">
       
      </div> -->
    </div>
    <div
      class="col-8 m-4 d-flex flex-column justify-content-evenly align-items-center flex-fill"
    >
      <div class="card-field px-3 py-2 my-2">
        Date d'inscription: {{ formatDate(user.createdAt) }}
      </div>
      <div class="card-field px-3 py-2 my-2">
        Email: <input type="text" v-model="user.email" />
      </div>
      <div class="card-field px-3 py-2 my-2">
        Ville: <input type="text" v-model="user.ville" />
      </div>
      <div class="card-field px-3 py-2 my-2">
        Pays: <input type="text" v-model="user.pays" />
      </div>
    </div>    
  </div>
  <div class="col-3 d-flex justify-content-end">
      <button
        type="button"
        class="py-2 px-3 d-flex align-items-center"
        @click="save"
      >
        <span class="pt-1">Enregistrer</span>
        <font-awesome-icon icon="fa-solid fa-pencil" size="m" class="ms-2" />
      </button>
    </div>
</template>

<script>
import { useUserStore } from "@/stores/userStore";
import { mapActions } from "pinia";
import moment from "moment";

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await this.getUser(localStorage.getItem("utilisateurId"));
  },
  methods: {
    async save() {
      await this.updateUser(localStorage.getItem("utilisateurId"), this.user);
      window.location.reload();
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD-MM-YYYY hh:mm:ss");
      }
    },
    ...mapActions(useUserStore, ["getUser", "updateUser"]),
  },
};
</script>

<style scoped>
.card-profil {
  background-color: var(--vert-c2-o);
  border-radius: 10px;
}

.card-profil h4 {
  text-shadow: 0 2px 4px var(--noir-f);
}

.card-profil button {
  border-radius: 8px;
  border: none;
  background-color: var(--vert-f);
  color: var(--blanc);
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}

.card-profil img {
  border-radius: 100px;
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  height: 100%;
}

.card-pseudo {
  font-family: "Oswald", sans-serif;
  font-size: 1.8em;
  font-weight: 500;
  color: var(--vert-f);
  text-shadow: 1px 1px 1px var(--blanc);
}

.card-rang-user {
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.3em;
  font-weight: 500;
}

.card-field {
  width: 100%;
  background-color: var(--blanc-c);
  border-radius: 10px;
  color: var(--vert-f);
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2em;
}

.cardProfil {
  height: 500px;
  width: 1000px;
  margin-top: 100px;
  background-color: rgba(103, 158, 26, 0.4);
}

.cardBoycott {
  height: 350px;
  width: 300px;
}
</style>
