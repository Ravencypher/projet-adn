<template>
    <div class="info-boycott p-5 m-3">
        <div class="d-flex flew-wrap justify-content-between">
          <h4>{{ boycott.titre }}</h4>
          <div class="signalement d-flex align-items-center">
            <span>56</span>
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" size="3x" />
            <button @click="$emit('delete', id)" class="btn btn-danger my-2">Supprimer</button>
          </div>
        </div>
        <div class="d-flex flew-wrap justify-content-start">
          <figure>
            <img :src="'https://images.kalanso.top/' + boycott.image" alt="image boycott" />
          </figure>
          <div class="d-flex flex-column align-items-start justify-content-center ms-3">
            <h5>Résumé</h5>
            <p class="my-3">{{ boycott.resume }}</p>
          </div>
        </div>
        <div class="">
          <div class="accordion accordion-flush" id="Description-boycott">
            <div class="accordion-item">
              <div class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#accordion1" aria-expanded="false" aria-controls="accordion1">
                  <h4>Description</h4>
                </button>
              </div>
              <div id="accordion1" class="accordion-collapse collapse" aria-labelledby="Description-boycott"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <p>
                    {{boycott.description}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  <script>
  export default {
    props: {
      boycott: null,
    },
    $emits: ['delete'],
  };
  </script>
  
  <style scoped>
.info-boycott {
  border: 2px solid var(--vert-f);
  border-radius: 10px;
  width: 100%;
  background-color: var(--vert-c-o);
}

.info-boycott img {
  max-width: 150px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

.signalement {
  color: var(--vert-f);
}

.signalement span {
  font-size: 1.5em;
  font-weight: 500;
  font-family: 'Josefin Sans', sans-serif;
}

.accordion {
  border: 2px solid var(--vert-f);
  border-radius: 10px;
  overflow: hidden;
}

.accordion button {
  margin: 0;
}

.accordion-button {
  width: 100%;
  font-family: 'Oswald', sans-serif;
  background-color: none !important;
  text-transform: none;
}

.accordion-header {
  border-bottom: 1px solid var(--vert-f);
}

.accordion-button:focus {
  background-color: var(--vert-c-o2);
  border-radius: 10px 10px 0 0;

}
</style>