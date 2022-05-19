import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
/////////////////////////////////////////FireBase/////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo916f5ijdjFBTYpIPkQeA4CyiwnLul0g",
  authDomain: "practica-4-e67c5.firebaseapp.com",
  projectId: "practica-4-e67c5",
  storageBucket: "practica-4-e67c5.appspot.com",
  messagingSenderId: "537613830782",
  appId: "1:537613830782:web:ee3d1664a8cb3c165ca62f"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);


/////////////////////////////////////////FireBase/////////////////////////////
const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(appFireBase);
  
router.isReady().then(() => {
  app.mount('#app');
});

