<template>
    <HeaderNav />
    <main class="body-home">
      <BannHome />
      <section id="vedette" class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="m-3">Boycotts en vedettes</h2>
        <div class="container d-flex flex-wrap justify-content-center m-5">
            <div class="card-boycott m-3 d-flex flex-column align-items-center">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>
              <h3>Titre du boycott</h3>
              <div class="resume px-2 pt-4">
                <p>Roast percolator robust chicory crema in extraction galão.</p>
              </div>
              <div class="icons d-flex justify-content-between px-5">
                <div class="d-flex align-items-center">
                  <font-awesome-icon icon="fa-solid fa-eye" shake size="2x"/>
                </div>
                <div class="likes d-flex align-items-center">
                  <span class="pe-3">666</span>
                  <font-awesome-icon icon="fa-solid fa-heart" beat size="2x"/>
                </div>
              </div>
              <div class="card-author mb-3">Auteur</div>
            </div>
            <div class="card-boycott m-3 d-flex flex-column align-items-center">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>
              <h3>Titre du boycott</h3>
              <div class="resume px-2 pt-4">
                <p>Roast percolator robust chicory crema in extraction galão.</p>
              </div>
              <div class="icons d-flex justify-content-between px-5">
                <div class="d-flex align-items-center">
                  <font-awesome-icon icon="fa-solid fa-eye" shake size="2x"/>
                </div>
                <div class="likes d-flex align-items-center">
                  <span class="pe-3">666</span>
                  <font-awesome-icon icon="fa-solid fa-heart" beat size="2x"/>
                </div>
              </div>
              <div class="card-author mb-3">Auteur</div>
            </div>
            <div class="card-boycott m-3 d-flex flex-column align-items-center">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>
              <h3>Titre du boycott</h3>
              <div class="resume px-2 pt-4">
                <p>Roast percolator robust chicory crema in extraction galão.</p>
              </div>
              <div class="icons d-flex justify-content-between px-5">
                <div class="d-flex align-items-center">
                  <font-awesome-icon icon="fa-solid fa-eye" shake size="2x"/>
                </div>
                <div class="likes d-flex align-items-center">
                  <span class="pe-3">666</span>
                  <font-awesome-icon icon="fa-solid fa-heart" beat size="2x"/>
                </div>
              </div>
              <div class="card-author mb-3">Auteur</div>
            </div>
            <div class="card-boycott m-3 d-flex flex-column align-items-center">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>
              <h3>Titre du boycott</h3>
              <div class="resume px-2 pt-4">
                <p>Roast percolator robust chicory crema in extraction galão.</p>
              </div>
              <div class="icons d-flex justify-content-between px-5">
                <div class="d-flex align-items-center">
                  <font-awesome-icon icon="fa-solid fa-eye" shake size="2x"/>
                </div>
                <div class="likes d-flex align-items-center">
                  <span class="pe-3">666</span>
                  <font-awesome-icon icon="fa-solid fa-heart" beat size="2x"/>
                </div>
              </div>
              <div class="card-author mb-3">Auteur</div>
            </div>
        </div>
      </section>
      <section id="vedette" class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="m-3">Découvrir les boycotts</h2>
        <div class="container-card d-flex m-5">
            <div class="card-boycott d-flex flex-column align-items-center">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>
              <h3>Titre du boycott</h3>
              <div class="resume px-2 py-4">
                <p>Roast percolator robust chicory crema in extraction galão.</p>
              </div>
              <div class="icons d-flex justify-content-between px-5">
                <div class="d-flex align-items-center">
                  <font-awesome-icon icon="fa-solid fa-eye" shake size="2x"/>
                </div>
                <div class="likes d-flex align-items-center">
                  <span class="pe-3">666</span>
                  <font-awesome-icon icon="fa-solid fa-heart" beat size="2x"/>
                </div>
              </div>
            </div>
        </div>
      </section>

    </main>
    <FooterCo />
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";
import BannHome from "../components/BannHome.vue";
import FooterCo from "../components/FooterCo.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    BannHome,
    FooterCo,
  }
}
</script>

