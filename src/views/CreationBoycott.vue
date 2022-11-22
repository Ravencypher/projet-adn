<template>
    <HeaderNav />
    <main class="body-container container-fluid d-flex justify-content-center align-items-center flex-column">
    <form @submit.prevent="addBoycott" class="p-5 d-flex flex-column">
      <h2 class="text-center">Proposer un Boycott</h2>
      <label for="nomProduit">Nom du Produit:</label>
      <input type="text" id="nomProduit" v-model="nomProduit" required="required">
      <label for="resume">Résumé:</label>
      <input type="text" id="resume" v-model="resume" required="required">
      <label for="image">Image du produit:</label>
      <input type="file" class="form-control-file" id="image" @change="onFileChange">
      <label for="description">Description:</label>
      <textarea class="form-control" id="description" v-model="description" rows="3"></textarea>
      <button type="submit" class="mx-auto mt-4 p-2 d-flex align-items-center justify-content-center">Proposer</button>   
      <router-link to="/creationBoycott"></router-link>
    </form>
  </main>
    <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";
import { useBoycottStore } from "@/stores/boycottStore";
import { mapActions } from 'pinia';

export default {
  components: {
    HeaderNav,
    FooterCo, 
  },
  data(){
    return{
      nomProduit:'',
      resume:'',
      description:'',
      image: null
    }
  },
  methods:{
    onFileChange(e){
      this.image = e.target.files[0];
    },
    addBoycott(){
      this.creerBoycott({
        nomProduit: this.nomProduit,
        resume: this.resume,
        description: this.description,
        image: this.image
      })
    },

    ...mapActions(useBoycottStore, ['creerBoycott']),
  }
}
</script>