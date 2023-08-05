

import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./style.css";
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMasksTheater, faLanguage, faBowlFood, faWineGlass, faBullseye, faPlane, faSquareParking, faStore, faWifi, faBurger, faMugHot, faPersonRifle } from '@fortawesome/free-solid-svg-icons'
library.add(faMasksTheater, faLanguage, faStore, faBowlFood, faWineGlass, faBullseye, faPlane, faSquareParking, faWifi, faBurger, faMugHot, faPersonRifle)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(ElementPlus)
  .use(router)
  .mount("#app");
