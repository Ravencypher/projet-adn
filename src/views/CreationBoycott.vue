<template>
    <HeaderNav />
    <main class="body-container-onepage">
       <main class="body-container-onepage">
    <form method="post" action="" class="formulaire">
      <h2>Proposer un Boycott</h2>
      <label for="nomProduit">Nom du Produit:</label>
      <input type="text" id="nomProduit" name="nomProduit" required="required">
      <label for="resume">Résumé:</label>
      <input type="text" id="resume" name="resume" required="required">
      <label for="image">Image du produit:</label>
      <input type="file" class="form-control-file" id="image" @change="onFileChange">
      <label for="description">Description:</label>
      <textarea class="form-control" id="description" rows="3"></textarea>
      <button type="submit">Proposer</button>   
          <router-link to="/creationBoycott"></router-link>
    </form>
  </main>
    </main>
    <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import FooterCo from "../components/FooterCo.vue";

export default {
  components: {
    HeaderNav,
    FooterCo,

 
  }
}
</script>