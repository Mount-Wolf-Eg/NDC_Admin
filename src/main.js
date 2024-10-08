import "@/assets/main.scss";
import "@/assets/media-queries.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

import "bootstrap";

app.mount("#app");
