<template>
  <HeaderNav />
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <form @submit.prevent="connexion" class="px-5 py-4 d-flex flex-column">
      <h2 class="text-center">Connexion</h2>
      <label for="email">Email</label>
      <input type="text" id="email" v-model="email" required="required" />
      <label for="password">Mot de passe</label>
      <input type="password" id="password" v-model="password" required="required" />
      <button
        type="submit"
        class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center"
      >
        Connexion
      </button>
      <p class="text-center mt-3">
        Pas de compte?
        <span><router-link to="/inscription">Inscription</router-link></span>
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
  components: {
    HeaderNav,
    FooterCo,
  },
  data(){
    return{
      email:'',
      password:'',
    }
  },
  methods:{
    async connexion(){
      await this.login({
        email: this.email,
        password: this.password
      })
    },

    ...mapActions(useAuthStore, ['login']),
  }
};
</script>
<style scoped>
main{
    background: url("../assets/parc.jpg");
    background-image: url(../assets/vague2.svg);
    background-size: contain;
    background-position: top left;
    background-repeat: no-repeat;
    height:100%;
}
form{
  position:relative;
}
form::after{
  content:url(../assets/duo.svg);
  position:absolute;
  bottom:-2%;
  right:-40%;
  width:300px;
}
</style>
