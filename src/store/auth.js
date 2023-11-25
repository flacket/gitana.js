// Utilities
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { auth } from '@/firebase'
import { signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import router from '@/router'

const provider = new GithubAuthProvider();

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null);
  const token = ref('');

  const getUser = computed(() => user);
  const getToken = computed(() => token);
  const isLoggedIn = computed(() => {
    if(user.value === null) return false
    else return true
  });

  function logIn() {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      token.value = credential.accessToken;
      user.value = result.user;
      router.push('home');
      // The signed-in user info.
      /*this.user = {
        name: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL
      };*/
    })
    .catch((error) => {
      console.log('Error al intentar autenticar:', error.message);
    })
  }

  async function logOut() {
    await signOut(auth);
    user.value = null;
    router.replace('/');
  }

  return { user, token, getUser, getToken, isLoggedIn, logIn, logOut }
});
