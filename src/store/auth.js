// Utilities
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from '@/firebase'
import { signInWithPopup, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import router from '@/router'

const provider = new GithubAuthProvider();

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const token = ref('');

  function init(){
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        user.value = {
          uid: userDetails.uid,
          name: userDetails.displayName,
          email: userDetails.email,
          photoURL: userDetails.photoURL,
        }
        token.value = localStorage.getItem('token');
      } else {
        user.value = {};
        token.value = '';
      }
    });
  }

  const getToken = computed(() => token.value);
  const isLoggedIn = computed(() => {
    if(token.value) return true
    else return false
  });

  function logIn() {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential =  GithubAuthProvider.credentialFromResult(result);
      token.value = credential.accessToken;
      localStorage.setItem( 'token', credential.accessToken);
      router.push('home');
    })
    .catch((error) => {
      console.log('Error al intentar autenticar:', error.message);
    })
  }

  async function logOut() {
    await signOut(auth);
    user.value = {};
    token.value = '';
    await localStorage.clear();
    router.replace('/');
  }

  return { getToken, isLoggedIn, init, logIn, logOut }
});
