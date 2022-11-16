<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <HeaderNav />
  <main class="body-container-onepage">
    <form method="post" action="" class="p-5 d-flex flex-column">
      <h2 class="text-center">Connexion</h2>
      <label for="pseudo">Pseudonyme</label>
      <input type="text" id="pseudo" name="pseudo" required="required" />
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required="required" />
      <button
        type="submit"
        class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center"
      >
        Connexion
      </button>
      <p class="text-center mt-4">
        Pas de compte?
        <span><router-link to="/inscription">Connexion</router-link></span>
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
  },
};
</script>
