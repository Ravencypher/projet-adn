<template>
    <HeaderNav />
    <main class="">
      <section id="profil-user">
        <div class="container d-flex flex-column">
          <h3 class="mt-5">Profil</h3>
          <div class="card-profil p-5 mt-4 d-flex flex-column">
            <div class="row d-flex flex-wrap justify-content-between">
              <div class="col-9">
                <h4>Informations</h4>
              </div>
              TEST
            </div>
          </div>
        </div>
      </section>
      <section id="boycott-create">
        <div class="container">
          <h3 class="mt-5">Boycotts créés</h3>
          <div
            class="container-fluid d-flex flex-wrap justify-content-start my-5"
          >
            <Boycott
              v-for="(boycott, index) in boycottsOfUser"
              :key="index"
              :boycott="boycott"
            />
          </div>
        </div>
      </section>
      <section id="boycott-follow">
        <div class="container">
          <h3 class="mt-5">Boycotts suivis</h3>
          <div
            class="container-fluid d-flex flex-wrap justify-content-start my-5"
          ></div>
        </div>
      </section>
    </main>
    <FooterCo />
  </template>
  
  <script>
  import HeaderNav from "../components/HeaderNav.vue";
  import FooterCo from "../components/FooterCo.vue";
  import ProfilVueAutre from "../components/ProfilVueAutre.vue";
  import Boycott from "../components/Boycott.vue";
  import { mapActions } from "pinia";
  import { useBoycottStore } from "@/stores/boycottStore";
  import { mapState } from "pinia";
    
  
  export default {
    name: "App",
    components: {
    HeaderNav,
    FooterCo,
    Boycott,
    ProfilVueAutre
},
    data() {
      return {
        isEdit: false,
      };
    },
    created() {
      this.loadBoycottsOfUser(localStorage.getItem("utilisateurId"));
    },
    computed: {
      ...mapState(useBoycottStore, ["boycottsOfUser"]),
    },
    methods: {
      ...mapActions(useBoycottStore, ["loadBoycottsOfUser"]),
    },
  };
  </script>
  
  <style scoped>
  .card-profil {
    background-color: var(--vert-c2-o);
    border-radius: 10px;
  }
  
  .card-profil h4 {
    text-shadow: 0 2px 4px var(--noir-f);
  }
  
  .card-profil button {
    border-radius: 8px;
    border: none;
    background-color: var(--vert-f);
    color: var(--blanc);
    font-family: "Josefin Sans", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .card-profil img {
    border-radius: 100px;
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;
  }
  
  .card-pseudo {
    font-family: "Oswald", sans-serif;
    font-size: 1.8em;
    font-weight: 500;
    color: var(--vert-f);
    text-shadow: 1px 1px 1px var(--blanc);
  }
  
  .card-rang-user {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.3em;
    font-weight: 500;
  }
  
  .card-field {
    width: 100%;
    background-color: var(--blanc-c);
    border-radius: 10px;
    color: var(--vert-f);
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.2em;
  }
  
  .cardProfil {
    height: 500px;
    width: 1000px;
    margin-top: 100px;
    background-color: rgba(103, 158, 26, 0.4);
  }
  
  .cardBoycott {
    height: 350px;
    width: 300px;
  }
  </style>
  