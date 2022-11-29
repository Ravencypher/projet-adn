<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeaderNav />
    <main class="">
      <section id="profil-user">
        <div class="container d-flex flex-column">
          <h3 class="mt-5">Inscription confirmée !</h3>
         </div>
      </section>
    </main> 
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import { useAuthStore } from "@/stores/authStore";
import { mapActions } from 'pinia';

export default {
  components: {
    HeaderNav,
    // eslint-disable-next-line vue/no-unused-components
    FooterCo,
    
  },
 
  data(){
    return{
      code: null
    }
  },
  methods:{
    verifyUtilisateur(){
  // eslint-disable-next-line no-undef
  if (code.match.path === "/confirmation/:confirmationCode") {
   // eslint-disable-next-line prettier/prettier, no-undef
   return confirmStore.verifyUser(this.code.match.params.confirmationCode);
}
},

    ...mapActions(useAuthStore, ['login']),
  }
}

</script>
