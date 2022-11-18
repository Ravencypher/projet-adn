<template>
  <HeaderNav />
  <main class="container">
    <h1>Administrateur</h1>

    <button class="btn btn-primary" type="button">Tous les Boycotts</button>
    <button class="btn btn-primary" type="button">Boycotts signalés</button>
    ``
    <h2>Boycotts créés</h2>
    <div class="infoBoy">
      <div class="row">
        <div class="col">
          <h3>Nom du boycott</h3>
          <figure>
            <img src="http://via.placeholder.com/350x200.png" alt="image boycott" />
          </figure>
        </div>
        <div class="col">
          <div>
            <h3 class="align-item-end">Résumé</h3>
            <p>Produit de crotte</p>
          </div>
        </div> <div class="col">
          <div>
            <h3 class="align-item-end"><font-awesome-icon icon="fa-solid fa-triangle-exclamation" /></h3>
            <p>56</p>
          </div>
        </div>
      </div>
      </div>

      <div class="accordionBoy accordion accordion-flush" id="accordionBoycott">
        <div class="accordion-item">
          <h3 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <h3>Description</h3>
            </button>
          </h3>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p>
                Aromatic so, variety, mazagran chicory organic brewed mocha aroma that.
                Trifecta mazagran, qui con panna, eu et variety beans black. Galão cortado
                coffee black decaffeinated that aromatic. Kopi-luwak arabica to go et,
                dark redeye trifecta, mug chicory wings cup wings. Lungo cinnamon at id
                crema instant as id sugar. Carajillo percolator crema in cup galão cream.
                Black so blue mountain decaffeinated froth, bar , a single origin pumpkin
                spice skinny blue mountain. Acerbic body percolator flavour affogato crema
                cinnamon. Breve id, dripper, sweet mazagran body iced ristretto flavour.
                Beans est organic pumpkin spice foam half and half mug medium saucer.
                Aromatic so, variety, mazagran chicory organic brewed mocha aroma that.
                Trifecta mazagran, qui con panna, eu et variety beans black. Galão cortado
                coffee black decaffeinated that aromatic. Kopi-luwak arabica to go et,
                dark redeye trifecta, mug chicory wings cup wings. Lungo cinnamon at id
                crema instant as id sugar. Carajillo percolator crema in cup galão cream.
                Black so blue mountain decaffeinated froth, bar , a single origin pumpkin
                spice skinny blue mountain. Acerbic body percolator flavour affogato crema
                cinnamon. Breve id, dripper, sweet mazagran body iced ristretto flavour.
                Beans est organic pumpkin spice foam half and half mug medium saucer.
              </p>
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
h1 {
  margin-top: 50px;
  margin-bottom: 50px;
}

h2 {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}
.btn {
  background-color: rgb(63, 125, 32);
  border: 1px solid rgb(63, 125, 32);
  margin-right: 50px;
}
.btn:hover {
  background-color: var(--vert-c);
}
.btn:focus {
  background-color: var(--vert-c);
}
.accordionBoy {
  border: 5px solid rgb(63, 125, 32);
  width: 1000px;
  margin: auto;
  margin-bottom: 150px;
}
.accordion-header {
  border: 1px solid rgb(63, 125, 32);
}
.accordion-item {
  border: 1px solid rgb(63, 125, 32);
}
.accordion-button {
  border: 1px solid rgb(63, 125, 32);
}
.accordion-button:hover {
  background-color: var(--vert-c);
}
.accordion-button:focus {
  background-color: var(--vert-c);
}
.infoBoy {
  text-align: center;
  width: 1000px;
  border: 5px solid rgb(63, 125, 32);
  margin:auto
}
</style>
