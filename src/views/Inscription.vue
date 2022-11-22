<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderNav />
  
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <form @submit.prevent="inscription" class="p-5 d-flex flex-column">
      <h2 class="text-center">Inscription</h2>
      <label for="pseudo">Pseudonyme</label>
      <input type="text" id="pseudo" v-model="pseudo" required="required">
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" required="required">
      <label for="ville">Ville</label>
      <input type="text" id="ville" v-model="ville" required="required">
      <label for="pays">Pays</label>
      <input type="text" id="pays" v-model="pays" required="required">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password" required="required">
      <label for="confirmPassword">Confirmer mot de passe</label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" required="required">
      <button type="submit" class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center">Créer un compte</button>
      <p class="text-center mt-4">Vous avez déjà un compte? 
          <router-link to="/connexion">Connexion</router-link>
      </p>
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
  /*setup(){
    const authStore = useAuthStore()
    return { authStore }
  },*/
  components: {
    HeaderNav,
    FooterCo,
  },
  data(){
    return{
      pseudo: "",
      email: "",
      password: "",
      confirmPassword: "",
      ville: "",
      pays: "",
      isAdmin: false,
    }
  },
  methods:{
    inscription(){
      this.register({
        pseudo: this.pseudo,
        email: this.email,
        password: this.password,
        ville: this.ville,
        pays: this.pays,
        isAdmin: this.isAdmin
      })
    },

    ...mapActions(useAuthStore, ['register'])
  }
}
</script>

