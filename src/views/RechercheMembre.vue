<template>
  <HeaderNav />
  <main class="body-container-onepage">
    <form method="post" action="" class="Formulaire">
      <h2>Rechercher un utilisateur</h2>
      <label for="ville">Ville</label>
      <input type="text" id="ville" name="ville">
      <p>ou</p>
      <label for="pays">Pays</label>
      <input type="text" id="pays" name="pays">
            <button type="submit">Rechercher</button>
            <router-link to="/inscription"></router-link>
        </form>


    </main>
   <FooterCo />
</template>
<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterCo,
  }
}
</script>