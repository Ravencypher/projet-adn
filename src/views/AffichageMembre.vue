<template>
  <HeaderNav />
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <h2>Résultat de recherche</h2>
    <div class="container d-flex flex-wrap justiy-content-center m-5"></div>
    <div class="card-search m-3 d-flex flex-column align-items-center" v-for="(utilisateur, index) in utilisateurTrouve"
      :key="index">
      <h3>{{ utilisateur.pseudo }}</h3>
      <div class="ville px-2">
        <p>Ville: {{ utilisateur.ville }}</p>
      </div>
      <div class="pays px-2">
        <p>Pays: {{ utilisateur.pays }}</p>
      </div>
      <button type="submit" class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center">
        Afficher Profil
      </button>
    </div>
  </main>

  <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import { useAuthStore } from "@/stores/authStore";
import { mapActions } from "pinia";
import { mapState } from "pinia";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterCo,
  },
  data() {
    return {
      pseudo: "",
      ville: "",
      pays: "",
    };
  },
  computed: {
    ...mapState(useAuthStore, ['utilisateurTrouve']),
  },
  /*methods: {
    afficher() {
      this.affichage({
        pseudo: this.pseudo,
        ville: this.ville,
        pays: this.pays,
      });
    },

    ...mapActions(useAuthStore, ["affichage"]),
  },*/
};
</script>
<style scoped>
.card-search{
  max-width:350px;
  min-width:250px;
  border-radius: 20px;
  background-color: var(--vert-c-3);
}
</style>
