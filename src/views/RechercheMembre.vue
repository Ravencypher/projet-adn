<template>
  <HeaderNav />
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <form @submit.prevent="recherche" class="p-5 d-flex flex-column">
      <h2 class="text-center">Rechercher un utilisateur</h2>
      <label for="ville">Ville</label>
      <input type="text" id="ville" name="ville" v-model="ville" />
      <span class="mx-auto or">ou</span>
      <label for="pays">Pays</label>
      <input type="text" id="pays" name="pays" v-model="pays" />
      <button type="submit" class="mx-auto mt-3 p-2 d-flex align-items-center justify-content-center">
        Rechercher
      </button>
     
    </form>
  </main>
  <FooterCo />
</template>
<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import { useAuthStore } from "@/stores/authStore";
import { mapActions } from 'pinia';

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterCo,
  },
  data(){
    return{
      ville: "",
      pays: "",
     
    }
  },

methods:{
    recherche(){
      this.rechercher({
        ville: this.ville,
        pays: this.pays,
      })
    },

    ...mapActions(useAuthStore, ['rechercher'])
  }
}

</script>
<style scoped>
main{
    background: url("../assets/people-2.jpg");
    background-image: url(../assets/vague3.svg);
    background-size: contain;
    background-position: top right;
    background-repeat: no-repeat;
    height:100%;
}
</style>
