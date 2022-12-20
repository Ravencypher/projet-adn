<template>
  <HeaderNav />
  <main class="body-home">
    <BannHome />
    <section id="vedette" class="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h2 class="m-3">Boycotts en vedettes</h2>
      <div class="container d-flex flex-wrap justify-content-center m-5">
        <Boycott v-for="(boycott, index) in filtreVedette" :key="index" :boycott="boycott" /> 
      </div>
    </section>
    <section id="boycotts" class="d-flex justify-content-center align-items-center flex-column">
      <h2 class="m-3">Découvrir les boycotts</h2>
      <div class="container-card d-flex flex-wrap justify-content-center m-5">  
          <Boycott v-for="(boycott, index) in boycotts" :key="index" :boycott="boycott" />     
      </div>
    </section>
  </main>
  <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import Boycott from "../components/Boycott.vue";
import BannHome from "../components/BannHome.vue";
import FooterCo from "../components/FooterCo.vue";
import { useBoycottStore } from "@/stores/boycottStore";
import { mapActions } from 'pinia';
import { mapState } from "pinia";

export default {
  name: "App",
  components: {
    HeaderNav,
    BannHome,
    FooterCo,
    Boycott,
  },
  created() {
    this.loadBoycotts();
  },
  computed: {
    ...mapState(useBoycottStore, ['boycotts']),    
    filtreVedette() {
      return this.boycotts.slice(-3);
    }
  },
  methods:{
    ...mapActions(useBoycottStore, ['loadBoycotts']),
  }
}
</script>