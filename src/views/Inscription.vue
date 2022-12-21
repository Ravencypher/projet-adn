<template>
  <HeaderNav />
  <main
    class="body-container container-fluid d-flex justify-content-center align-items-center flex-column"
  >
    <form @submit.prevent="inscription" class="px-5 py-4 d-flex flex-column">
      <h2 class="text-center">Inscription</h2>
      <div class="controle-formulaire" :class="{ invalid: userNameValidity }">
        <label for="pseudo">Pseudonyme</label>
        <input
          type="text"
          id="pseudo"
          v-model.trim="pseudo"
          required="required"
        />
        <p v-if="userNameValidity">Veuillez saisir un pseudo</p>
      </div>
      <div class="controle-formulaire" :class="{ invalid: userEmailValidity }">
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          v-model.trim="email"
          required="required"
        />
        <p v-if="userEmailValidity">Veuillez saisir un email valide</p>
      </div>
      <div class="controle-formulaire" :class="{ invalid: userVilleValidity }">
        <label for="ville">Ville</label>
        <input
          type="text"
          id="ville"
          v-model.trim="ville"
          required="required"
        />
        <p v-if="userVilleValidity">Veuillez saisir une ville</p>
      </div>
      <div class="controle-formulaire" :class="{ invalid: userPaysValidity }">
        <label for="pays">Pays</label>
        <input type="text" id="pays" v-model.trim="pays" required="required" />
        <p v-if="userPaysValidity">Veuillez saisir un pays</p>
      </div>
      <div class="controle-formulaire" :class="{ invalid: userPasswordValidity }">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          required="required"
        />
        <p v-if="userPasswordValidity">Veuillez saisir un mot de passe</p>
      </div>
      <div
        class="controle-formulaire"
        :class="{ invalid: userConfirmPasswordValidity }"
      >
        <label for="confirmPassword">Confirmer mot de passe</label>
        <input
          type="password"
          id="confirmPassword"
          v-model.trim="confirmPassword"
          required="required"
        />
        <p v-if="userConfirmPasswordValidity">
          Veuillez confirmer votre mot de passe
        </p>
      </div>
      <button
        type="submit"
        class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center"
      >
        Créer un compte
      </button>
      <p class="text-center mt-3">
        Vous avez déjà un compte?
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
import { mapActions } from "pinia";
export default {
  /*setup(){
    const authStore = useAuthStore()
    return { authStore }
  },*/
  components: {
    HeaderNav,
    FooterCo,
  },
  data() {
    return {
      pseudo: "",
      email: "",
      password: "",
      confirmPassword: "",
      ville: "",
      pays: "",
      isAdmin: false,
      userNameValidity: false,
      userEmailValidity: false,
      userVilleValidity: false,
      userPaysValidity: false,
      userPasswordValidity: false,
      userConfirmPasswordValidity: false,
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      this.userEmailValidity = false;
      this.userVilleValidity = false;
      this.userPaysValidity = false;
      this.userPasswordValidity = false;
      this.userConfirmPasswordValidity = false;
      if (this.userName.length === 0) {
        this.userNameValidity = true;
        this.formIsValid = false;
      }
      if (
        /* this.userEmail.length === 0 || */
        this.userEmail.match == /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        
      ) {
        this.userEmailValidity = true;
        this.formIsValid = false;
      }
      if (this.userVille.length === 0) {
        this.userEmailValidity = true;
        this.formIsValid = false;
      }
      if (this.userPays.length === 0) {
        this.userEmailValidity = true;
        this.formIsValid = false;
      }
      if (this.userPassword.length === 8) {
        this.userEmailValidity = true;
        this.formIsValid = false;
      }
      if (this.userConfirmPassword.length === 0) {
        this.userEmailValidity = true;
        this.formIsValid = false;
      }
    },
    inscription() {
      this.register({
        pseudo: this.pseudo,
        email: this.email,
        password: this.password,
        ville: this.ville,
        pays: this.pays,
        isAdmin: this.isAdmin,
      });
    },
    ...mapActions(useAuthStore, ["register"]),
  },
};
</script>
<style scoped>
main {
  background: url("../assets/people-1.jpg");
  background-image: url(../assets/vague1.svg);
  background-size: 30%;
  background-position: bottom right;
  background-repeat: no-repeat;
  height: 100%;
}
form {
  position: relative;
}
form::before {
  content: url(../assets/personnage.svg);
  position: absolute;
  bottom: -2%;
  left: -50%;
}
.controle-formulaire{
  display:flex;
  flex-direction:column;
  background-color: none;
}
.controle-formulaire.invalid input {
  border-color: red;
}
.controle-formulaire.invalid label {
  color: red;
}
</style>