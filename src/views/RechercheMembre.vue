<template>
  <HeaderNav />
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <form method="post" action="" class="p-5 d-flex flex-column">
      <h2 class="text-center">Rechercher un utilisateur</h2>
      <label for="ville">Ville</label>
      <input type="text" id="ville" name="ville" />
      <span class="mx-auto or">ou</span>
      <label for="pays">Pays</label>
      <input type="text" id="pays" name="pays" />
      <button type="submit" class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center">
        <router-link to="/affichageMembre">Rechercher</router-link>
      </button>
     
    </form>
  </main>
  <FooterCo />
</template>
<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterCo,
  },
};
</script>
