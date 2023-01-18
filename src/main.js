import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config"; // PrimeVue

import "./assets/main.css";
import "../node_modules/normalize.css"; // normalize

import "primevue/resources/themes/arya-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// component imports
import Tooltip from "primevue/tooltip";

import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputNumber from "primevue/inputnumber";
import Slider from "primevue/slider";
import ToggleButton from "primevue/togglebutton";

const app = createApp(App);
const head = createHead();

// component registration
app.directive("tooltip", Tooltip);

app.component("Button", Button);
app.component("Checkbox", Checkbox);
app.component("InputNumber", InputNumber);
app.component("Slider", Slider);
app.component("ToggleButton", ToggleButton);

app.use(createPinia());
app.use(router);
app.use(PrimeVue); // PrimeVue
app.use(head);

app.mount("#app");
