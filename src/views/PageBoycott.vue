<template>
  <HeaderNav />
  <main class="body-container d-flex justify-content-center align-items-center">
    <div class="container boycott">
      <div class="row g-0">
        <div class="col-6 d-flex justify-content-start align-items-center">
          <figure>
            <img src="../assets/soulier.jpg" alt="image boycott" />
          </figure>
        </div>
        <div class="col-6 d-flex flex-column">
          <h3 class="my-5">Titre du Boycott</h3>
          <h4 class="">Phrase de résumé</h4>
          <p class="py-3">
            Aromatic so, variety, mazagran chicory organic brewed mocha aroma that.
            Trifecta mazagran, qui con panna, eu et variety beans black. Galão cortado
            coffee black decaffeinated that aromatic. Kopi-luwak arabica to go et, dark
            redeye trifecta, mug chicory wings cup wings. Lungo cinnamon at id crema
            instant as id sugar. Carajillo percolator crema in cup galão cream. Black so
            blue mountain decaffeinated froth, bar , a single origin pumpkin spice skinny
            blue mountain. Acerbic body percolator flavour affogato crema cinnamon. Breve
            id, dripper, sweet mazagran body iced ristretto flavour. Beans est organic
            pumpkin spice foam half and half mug medium saucer. Aromatic so, variety,
            mazagran chicory organic brewed mocha aroma that. Trifecta mazagran, qui con
            panna, eu et variety beans black. Galão cortado coffee black decaffeinated
            that aromatic. Kopi-luwak arabica to go et, dark redeye trifecta, mug chicory
            wings cup wings. Lungo cinnamon at id crema instant as id sugar. Carajillo
            percolator crema in cup galão cream. Black so blue mountain decaffeinated
            froth, bar , a single origin pumpkin spice skinny blue mountain.
          </p>
          <div class="d-flex justify-content-center">
            <div class="boycott-info">Auteur</div>
            <div class="boycott-info">Date de création</div>
            <div class="boycott-info">Likes</div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="px-5 py-3">Boycotter avec nous ?</button>
          </div>
        </div>
      </div>
    </div>
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
<style scoped>
.boycott img{
  max-width:550px;
  width:100%;
  max-height:650px;
  height:550px;
  min-height:100%;
  border-radius:20px;
  object-fit: cover;
}
.boycott-info{
  padding:1rem 1.5rem;
  background-color:var(--vert-c);
  border-radius:10px;
  color:var(--blanc);
  font-family: 'Josefin Sans', sans-serif;
  font-size:1.5em;
  margin:1rem;
}
</style>
