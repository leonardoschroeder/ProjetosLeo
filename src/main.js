import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFutbol);


createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
