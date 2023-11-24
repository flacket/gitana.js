// Utilities
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
//import { useRouter } from 'vue-router';

const provider = new GithubAuthProvider();
//const auth = getAuth();
//const router = useRouter();

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const isLogged = ref(false);
  const token = ref('');

  const getUser = computed(() => user);
  const getToken = computed(() => token);
  const isLoggedIn = computed(() => isLogged);

  function logIn() {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      this.token.value = credential.accessToken;
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

  function logOut() {
    const auth = getAuth()
    signOut(auth)
    .then(() => {
      alert("sesion finalizada")
    })
    .catch((error) => {
      alert('Ocurrió un error al intentar cerrar sesion: ', error.message);
    });
  }

  return { user, token, getUser, getToken, isLoggedIn, logIn, logOut }
});
