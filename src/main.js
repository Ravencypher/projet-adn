import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope,faTriangleExclamation,faHeart,faEye,faPencil)

import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./router";

import "./assets/styles.css";

const app = createApp(App);

const options = {

};

app.use(createPinia());
app.use(Toast, options);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");
