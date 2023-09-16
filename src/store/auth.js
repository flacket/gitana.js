// Utilities
import { defineStore } from "pinia";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";

const provider = new GithubAuthProvider();
const auth = getAuth();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      isloggedIn: false,
      data: null,
    },
    token: null
  }),

  getters: {
    useAppStore: (state) => state.user,
    isLoggedIn: (state) => { return state.user.isloggedIn }
  },

  actions: {
    async logIn() {
      await signInWithPopup(auth, provider).then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const userData = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL
        }
        this.user.isloggedIn = true;
        this.user.data = userData;
        this.token = token
      })
      .catch((error) => {
        console.log('Error authStore:', error)
        throw new Error('Error al intentar Autenticar')
      })
    },

    async logOut() {
      await signOut(auth);
      this.user.isloggedIn = false;
      this.user.data = null;
    },
  },
});
