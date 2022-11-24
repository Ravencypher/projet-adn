<script setup>
import { useAuthStore } from '../stores/authStore';

const user = useAuthStore();

</script>

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
            <li class="nav-item">
              <router-link to="/" class="nav-link">À propos</router-link>
            </li>
            <li v-if="!user.loggedIn" class="nav-item">
              <router-link to="/creationBoycott" class="nav-link">Boycotter</router-link>
            </li>
            <li v-if="!user.loggedIn" class="nav-item">
              <router-link to="/inscription" class="nav-link">Inscription</router-link>
            </li>
            <li v-if="!user.loggedIn" class="nav-item">
              <router-link to="/connexion" class="nav-link">Connexion</router-link>
            </li>
             <li v-if="user.loggedIn"  class="nav-item">
              <router-link to="/" @click="logout" class="nav-link">Déconnexion</router-link>
            </li>
             <li v-if="user.loggedIn" class="nav-item">
              <router-link to="/rechercheMembre" class="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-kiss" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 8.58 8.58 0 0 1-.81-.622Zm-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.892 1.892 0 0 1-.31.593c-.077.107-.168.22-.275.343.107.124.199.24.276.347.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a14.87 14.87 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321.176.041.325.069.446.084a5.609 5.609 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.52 5.52 0 0 0 .5-.577 4.465 4.465 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001c.004 0 .006.002.006.002Zm.002 1.867-.006.001a.038.038 0 0 1 .006-.002ZM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8Zm2.757-.563a.5.5 0 0 0 .68-.194.934.934 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.934 1.934 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68ZM14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z"/>
</svg></router-link>
            </li>
            <li v-if="user.loggedIn" class="nav-item">
              <router-link to="/profilUtilisateur"><img src="http://via.placeholder.com/50"  ></router-link>
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
/*   position: fixed;
  z-index: 10; */
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
.nav-item:last-child img{
  width:40px;
  height:40px;
  border:2px solid var(--vert-f);
  border-radius:50%;
  margin-left:0.5rem;
}
.nav-item:last-child:hover img{
  border:2px solid var(--vert-c);
}
</style>