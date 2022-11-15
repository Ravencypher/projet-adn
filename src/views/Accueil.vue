<template>
    <HeaderNav />
    <main class="body-home">
      <BannHome />

      <section id="vedette" class="d-flex justify-content-center align-items-center flex-column">
        <h2 class="m-3">Boycotts en vedettes</h2>
        <div class="container-card d-flex">
            <div class="card-boycott">
              <figure>
                <img src="http://via.placeholder.com/350x200.png" alt="image boycott">
              </figure>

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

