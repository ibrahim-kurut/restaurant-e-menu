import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { far } from "@fortawesome/free-nular-svg-icons"; //all reg. icons
import { fas } from "@fortawesome/free-solid-svg-icons"; //all solid. icons
//import { fab } from "@fortawesome/free-brand-svg-icon" //all brand icons

library.add(fas)



createApp(App)
    .use(store)
    .component('FontAwesome', FontAwesomeIcon)
    .use(router)
    .mount("#app");







