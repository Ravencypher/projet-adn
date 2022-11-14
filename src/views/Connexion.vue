<template>
    <HeaderNav />
    <main class="body-container-onepage">
      <form method="post" action="" class="">
        <label for="pseudo">Pseudonyme</label>
      <input type="text" id="pseudo" name="pseudo" required="required">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password" required="required">
            <button type="submit">Connexion</button>
            <p>Pas de compte? <span><router-link to="/inscription">Connexion</router-link></span></p>
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