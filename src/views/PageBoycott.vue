<template>
  <HeaderNav />
  <main class="body-container-onepage">
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            src="../assets/soulier.svg"
            class="rounded float-start"
            alt="image boycott"
          />
        </div>
        <div class="col">
          <h1>Titre du Boycott</h1>
          <h2>Phrase de résumé</h2>
          <p>
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
            froth, bar , a single origin pumpkin spice skinny blue mountain. Acerbic body
            percolator flavour affogato crema cinnamon. Breve id, dripper, sweet mazagran
            body iced ristretto flavour. Beans est organic pumpkin spice foam half and
            half mug medium saucer.
          </p>

        <button type="button" class="btn btn-primary btn-lg">Auteur</button>
        <button type="button" class="btn btn-primary btn-lg">Date de création</button>
        <button type="button" class="btn btn-primary btn-lg">Likes</button>
         <div>
        <button type="button" class="btn btn-primary btn-lg">Boycotter avec nous ?</button>
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
.btn{
    margin-right: 20px;
}
</style>
