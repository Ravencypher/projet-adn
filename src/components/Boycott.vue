<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card-boycott m-3 d-flex flex-column align-items-center">
    <img class="card-img-top" :src="'https://images.kalanso.top/' + boycott.image" alt="image boycott"/>    
    <h2>{{ boycott.titre }}</h2>
    <div class="resume px-2 pt-4">
      <p>{{ boycott.resume }}</p>
    </div>
    <div class="icons d-flex justify-content-between px-5">
      <div class="d-flex align-items-center">
        <font-awesome-icon icon="fa-solid fa-eye" shake size="2x" />
      </div>
      <div class="likes d-flex align-items-center">
        <span class="pe-3">666</span>
        <font-awesome-icon icon="fa-solid fa-heart" beat size="2x" />
      </div>
    </div>
    <div class="card-author mb-3">Auteur</div>
  </div>
</template>
<script>
export default {
  props: {
    boycott: null,
  },
};
</script>
