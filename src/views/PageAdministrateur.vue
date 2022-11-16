<template>
  <HeaderNav />
  <div class="row">
    <div class="col">
     <h1>Administrateur</h1>
    <button class="btn btn-primary" type="button">Tous les Boycotts</button>
    <button class="btn btn-primary" type="button">Boycotts signalés</button>
    </div>

<h2>Boycotts créés</h2>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class=" cardBoycott card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="cardBoycott card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="cardBoycott card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>

  </div>

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
.tag{

}
h1{
    text-align: left;
}

</style>
