<template>
    <HeaderNav />
    <main class="body-container container-fluid d-flex justify-content-center align-items-center">
        <div class="container-confirmation px-5 py-4 d-flex flex-column align-items-center justify-content-between">
          <h2 class="text-center">Inscription confirmée !</h2>
          <p class="text-center mt-3">
          Vous désirez boycotter avec nous tout de suite ?
          
      </p>
      <div><router-link to="/connexion">Se connecter</router-link></div>
         </div>
    </main>
    <FooterCo /> 
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import { useConfirmStore } from "@/stores/confirmStore";
import { mapActions } from 'pinia';

export default {
  components: {
    HeaderNav,
    FooterCo,
  },
 
  data(){
    return{
      code: null
    }
  },
  created() {
    this.verifyUtilisateur(this.$route.params.confirmationCode);
  },
  methods:{
    ...mapActions(useConfirmStore, ['verifyUtilisateur']),
  }
}

</script>
<style scoped>
.container-confirmation{
  max-width:550px;
  width:100%;
  min-height:200px;
  background-color: var(--vert-c-3);
  border-radius:20px;
  border:2px solid var(--vert-f);
}
.container-confirmation a{
  color:var(--vert-f);
  font-weight:700;
  font-size:1.2rem;
}
</style>