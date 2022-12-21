<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card-boycott m-3 d-flex flex-column align-items-center">
    <img
      class="card-img-top"
      :src="'https://images.kalanso.top/' + boycott.image"
      alt="image boycott"
    />
    <h3>{{ boycott.titre }}</h3>
    <div class="resume px-2 pt-4">
      <p>{{ boycott.resume }}</p>
    </div>
    <div class="icons d-flex justify-content-between px-5">
      <div class="d-flex align-items-center">
        <router-link :to="`/pageBoycott/${boycott?._id}`" class="nav-link"><font-awesome-icon icon="fa-solid fa-eye" shake size="2x" /></router-link>        
      </div>
      <div class="likes d-flex align-items-center">
        <span class="pe-3">{{ boycott?.followers.length }}</span>
        <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" @click="() => suivreBoycott(this.boycott._id)" />
      </div>
    </div>
    <!-- <div class="card-author mb-3">{{ user?.pseudo }}</div> -->
    <div class="card-author mb-3"><router-link :to="`/profilAutre/${user?._id}`" class="nav-link">{{ user?.pseudo }}</router-link></div>
  </div>
</template>
<script>
import { useUserStore } from "@/stores/userStore";
import { useBoycottStore } from "@/stores/boycottStore";
import { mapActions } from "pinia";
export default {
  props: {
    boycott: null,
  },
  data() {
    return {
      user: null
    }
  },
  async created() {
    this.user = await this.getUser(this.boycott.idUtilisateur);
  },
  methods: {
    ...mapActions(useUserStore, ["getUser"]),
    ...mapActions(useBoycottStore, ["suivreBoycott"]),    
  },
};
</script>
