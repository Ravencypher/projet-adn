  <template>
  <HeaderNav />
 
  <main class="body-container-onepage">
 <h1>Profil</h1>
  <div class=" cardProfil card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-5">
      <h5 class="card-title">Informations</h5>
      <img src="http://via.placeholder.com/50" class="img-fluid rounded-start" alt="logo">
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <p class="card-text">Date de l'inscription</p>
        <p class="card-text">Email</p>
        <p class="card-text">Ville</p>
        <p class="card-text">Pays</p>
      </div>
    </div>
  </div>
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


<h2>Boycotts suivis</h2>
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="cardBoycott card h-100">
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
.cardProfil{
    height: 500px;
    width: 1000px;
    margin-top: 100px;
    background-color: rgba(103,158,26, 0.40);
    
}
.cardBoycott{
    height: 350px;
    width: 300px;
}


</style>