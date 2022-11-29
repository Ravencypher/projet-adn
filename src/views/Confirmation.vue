<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <HeaderNav />
    <main class="">
      confirmationCode: {{ $route.params.confirmationCode }}
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
import { useConfirmStore } from "@/stores/confirmStore";
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
  created() {
    this.verifyUtilisateur(this.$route.params.confirmationCode);
  },
  methods:{
    ...mapActions(useConfirmStore, ['verifyUtilisateur']),
  }
}

</script>
