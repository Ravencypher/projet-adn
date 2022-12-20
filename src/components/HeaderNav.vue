<template>
  <header>
    <nav class="navbar navbar-expand-lg p-0 my-1">
      <div class="container-fluid">
        <a class="" href="#">
          <img src="../assets/Logo.png" alt="logo adn">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav mx-auto mb-0 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" aria-current="page" class="nav-link">Accueil</router-link>
            </li>
            <li v-if="loggedIn" class="nav-item">
              <router-link to="/creationBoycott" class="nav-link">Boycotter</router-link>
            </li>
            <li v-if="!loggedIn" class="nav-item">
              <router-link to="/inscription" class="nav-link">Inscription</router-link>
            </li>
            <li v-if="!loggedIn" class="nav-item">
              <router-link to="/connexion" class="nav-link">Connexion</router-link>
            </li>
             <li v-if="loggedIn" class="nav-item">
              <router-link to="/rechercheMembre" class="nav-link">Rechercher</router-link>
            </li>
            <li v-if="loggedIn" class="nav-item">
              <router-link to="/profilUtilisateur">Profil</router-link>
             </li> 
             <li v-if="loggedIn"  class="nav-item">
              <router-link to="/" @click="logout()" class="nav-link">Déconnexion</router-link>
            </li>          
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>

import { useAuthStore } from '../stores/authStore';
import { mapActions } from 'pinia';
import { mapState } from 'pinia';

export default {
  computed:{
    ...mapState(useAuthStore, ['loggedIn']),
  },
  methods:{
    ...mapActions(useAuthStore, ['logout']),
  }
}
</script>


<style scoped>
header { 
  width: 100%;
  height: auto;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-bottom: 5px solid var(--vert-f);
}

nav>div>a:first-child {
  width: 10%;
}

nav ul {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

nav ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  color: var(--vert-f);
  font-family: 'Oswald', sans-serif;
  font-weight:600;
  font-size: 1.5rem;
}

nav ul li a:hover {
  color: var(--vert-c);
}
.nav-item img{
  width:45px;
  height:45px;
  border:2px solid var(--vert-f);
  border-radius:50%;
  margin-left:0.5rem;
}
.nav-item img:hover{
  border:2px solid var(--vert-c);
}
</style>