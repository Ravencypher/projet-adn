<template>
  <HeaderNav />
  <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <h2 class="m-3">Administration</h2>
    <div class="d-flex flex-wrap justify-content-center m-3">
      <button class="px-5 py-3" type="button">Tous les Boycotts</button>
      <button class="px-5 py-3" type="button">Boycotts signalés</button>
    </div>
    <h2 class="m-3">Les Boycotts</h2>
    <div class="container d-flex flex-column">
    <BoycottAdmin v-for="(boycott, index) in boycotts" :key="index" :boycott="boycott" @delete="deleteBoycott" />  
    </div>
  </main>
  <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import BoycottAdmin from "../components/BoycottAdmin.vue";
import { useBoycottStore } from "@/stores/boycottStore";
import { mapActions } from 'pinia';
import { mapState } from "pinia";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterCo,
    BoycottAdmin,
  },
  created() {
    this.loadBoycotts();
  },
  computed: {
    ...mapState(useBoycottStore, ['boycotts']),    
  },
  methods:{
    ...mapActions(useBoycottStore, ['loadBoycotts']),
    ...mapActions(useBoycottStore, ['deleteBoycott']),
  }
};

</script>

