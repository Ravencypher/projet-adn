<template>
  <HeaderNav />
  <main class="body-container-onepage">Page inscription
    <form method="post" action="" class="formulaire">
      <label for="pseudo">Pseudonyme</label>
      <input type="text" id="pseudo" name="pseudo" required="required">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" required="required">
      <label for="password">Mot de passe</label>
      <input type="password" id="password" name="password" required="required">
      <label for="password">Confirmer mot de passe</label>
      <input type="password" id="password" name="password" required="required">
      <button type="submit">Créer un compte</button>
      <p>Vous avez déjà un compte? <span>
          <router-link to="/connexion">Connexion</router-link>
        </span></p>
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