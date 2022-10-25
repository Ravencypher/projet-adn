<template>
    <header>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/Logo.png" alt="logo adn">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">À propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Boycotter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Connexion</a>
        </li>
      </ul>
<!--       <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
  </header>
</template>

<style scoped>
header {
    width: 100%;
    height: auto;
    background-color: rgb(255, 255, 255);
    position: fixed;
    z-index: 10;
    text-align: center;
    font-family: 'northerncaps';
    color:var(--vert-f) !important;
    border-bottom:5px solid var(--vert-f);
}
</style>