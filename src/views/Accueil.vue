<template>
    <HeaderNav />
    <main class="body-container">Ceci est la page d'accueil</main>
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