<template>
  <HeaderNav />
  <main class="body-container d-flex justify-content-center align-items-center">
    <div class="container boycott">
      <div class="row g-0">
        <div class="col-6 d-flex justify-content-start align-items-center">
          <figure>
            <img
              class="card-img-top"
              :src="'https://images.kalanso.top/' + boycott?.image"
              alt="image boycott"
            />
          </figure>
        </div>
        <div class="col-6 d-flex flex-column">
          <h3 class="my-5">{{ boycott?.titre }}</h3>
          <h4 class="">{{ boycott?.resume }}</h4>
          <p class="py-3">
            {{ boycott?.description }}
          </p>
          <div class="d-flex justify-content-center">
            <div class="boycott-info">{{ user?.pseudo }}</div>
            <div class="boycott-info">{{ formatDate(boycott?.createdAt) }}</div>
            <div class="boycott-info">Likes: {{ boycott?.followers.length }}</div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="px-5 py-3">Boycotter avec nous ?</button>
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
import { useBoycottStore } from "@/stores/boycottStore";
import { useUserStore } from "@/stores/userStore";
import { mapActions } from 'pinia';
import moment from "moment";

export default {
  name: "App",
  components: {
    HeaderNav,
    FooterCo,
  },
  data() {
    return {
      boycott: null,
      user: null
    }
  },
  async created() {
    this.boycott = await this.getBoycott(this.$route.params.id);
    this.user = await this.getUser(this.boycott.idUtilisateur);
  },
  methods:{
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD hh:mm:ss");
      }
    },
    ...mapActions(useBoycottStore, ['getBoycott']),
    ...mapActions(useUserStore, ["getUser"]),
  }
};
</script>
<style scoped>
.boycott img{
  max-width:550px;
  width:100%;
  max-height:650px;
  height:550px;
  min-height:100%;
  border-radius:20px;
  object-fit: cover;
}
.boycott-info{
  padding:1rem 1.5rem;
  background-color:var(--vert-c);
  border-radius:10px;
  color:var(--blanc);
  font-family: 'Josefin Sans', sans-serif;
  font-size:1.5em;
  margin:1rem;
}
</style>
