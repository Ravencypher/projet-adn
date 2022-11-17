<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderNav />
  
  <main class="body-container-onepage">
    <form method="post" action="" class="p-5 d-flex flex-column">
      <h2 class="text-center">Inscription</h2>
      <label for="pseudo">Pseudonyme</label>
      <input type="text" id="pseudo" name="pseudo" required="required">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" required="required">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required="required">
      <label for="password">Confirmer mot de passe</label>
      <input type="password" id="password" name="password" required="required">
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

export default {
  components: {
    HeaderNav,
    FooterCo,
  }
}
</script>

