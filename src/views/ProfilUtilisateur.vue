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
            </div>   <!-- py-2 px-3 d-flex align-items-center -->
            <div class="col-3 d-flex justify-content-end">
              <button type="button" class="py-2 px-3 d-flex align-items-center"><span class="pt-1">Éditer</span>
                <font-awesome-icon icon="fa-solid fa-pencil" size="m" class="ms-2" />
              </button>
            </div>
          </div>
          <div class="row g-0 d-flex flex-wrap justify-content-between">
            <div class="col-3 m-4 d-flex flex-column align-items-center flex-fill">
              <figure>
                <img src="http://via.placeholder.com/200x200.png" alt="image boycott">
              </figure>
              <div class="card-pseudo p-2">Pseudonyme</div>
              <div class="card-rang-user p-2">Utilisateur</div>
            </div>
            <div class="col-8 m-4 d-flex flex-column justify-content-evenly align-items-center">
              <div class="card-field px-3 py-2 my-2">Date d'inscription</div>
              <div class="card-field px-3 py-2 my-2">Email</div>
              <div class="card-field px-3 py-2 my-2">Ville</div>
              <div class="card-field px-3 py-2 my-2">Pays</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="boycott-create">
      <div class="container">
        <h3 class="mt-5">Boycotts créés</h3>
        <div class="container-fluid d-flex flex-wrap justify-content-start my-5">
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
            </div>
          </div>
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
            </div>
          </div>
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="boycott-follow">
      <div class="container">
        <h3 class="mt-5">Boycotts suivis</h3>
        <div class="container-fluid d-flex flex-wrap justify-content-start my-5">
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
            </div>
          </div>
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
            </div>
          </div>
          <div class="card-boycott me-5 d-flex flex-column align-items-center">
            <figure>
              <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
            </figure>
            <h3>Titre du boycott</h3>
            <div class="resume px-2 pt-4">
              <p>Roast percolator robust chicory crema in extraction galão.</p>
            </div>
            <div class="icons d-flex justify-content-center px-5">
              <div class="likes d-flex align-items-center">
                <span class="pe-3">666</span>
                <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
              </div>
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
import FooterCo from "../components/FooterCo.vue";

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterCo,
  }
}
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
  font-family: 'Josefin Sans', sans-serif;
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
  font-family: 'Oswald', sans-serif;
  font-size: 1.8em;
  font-weight: 500;
  color: var(--vert-f);
  text-shadow: 1px 1px 1px var(--blanc);
}

.card-rang-user {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.3em;
  font-weight: 500;
}

.card-field {
  width: 100%;
  background-color: var(--blanc-c);
  border-radius: 10px;
  color: var(--vert-f);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
}

.cardProfil {
  height: 500px;
  width: 1000px;
  margin-top: 100px;
  background-color: rgba(103, 158, 26, 0.40);
}

.cardBoycott {
  height: 350px;
  width: 300px;
}
</style>