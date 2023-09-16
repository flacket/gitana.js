// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_PROJECT_ID + ".firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_PROJECT_ID + ".appspot.com",
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: "1:" + import.meta.env.VITE_FIREBASE_SENDER_ID +
    ":web:" + import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
