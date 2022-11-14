import { createApp } from "vue";
import { createPinia } from "pinia";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);



import App from "./App.vue";
import router from "./router";

import "./assets/styles.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
