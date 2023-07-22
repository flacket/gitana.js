<template>
  <div>
    <v-btn
    @click=isLoggedIn?handleSignOut():handleSignIn()
    prepend-icon="mdi-github"
    color="primary"
    variant="flat"
    rounded>
      {{isLoggedIn?"Cerrar Sesión":"Iniciar Sesión"}}
    </v-btn>
  </div>
</template>

<script setup>
  import {onMounted, ref} from "vue";
  import {useRouter} from 'vue-router'
  import {getAuth, onAuthStateChanged, signInWithPopup, GithubAuthProvider, signOut} from "firebase/auth";
  
  const router = useRouter();
  const provider = new GithubAuthProvider();
  const isLoggedIn = ref(false);
  let auth;

  onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedIn.value = true;
      } else {
        isLoggedIn.value = false;
      }
    });
  });
  
  
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      localStorage.setItem("tokenId", token);
      localStorage.setItem("user", user);
      router.push("home");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.customData.email;
      // The AuthCredential type that was used.
      //const credential = GithubAuthProvider.credentialFromError(error);
      
      alert("Ocurrio un error (" + errorCode + "): " + errorMessage);
    });
  };



  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    });
  };
  /*methods: {
    githubLogin() {
      var provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("repo");
      console.log("provider creado");
      var result = null;
      await firebaseApp
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          console.log("then creado");
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user.displayName;
          localStorage.setItem("tokenId", token);
          localStorage.setItem("user", user);
        })
        .catch(function(error) {
          result = error;
        });
      if (!result) this.$router.go({ path: "estadisticas" });
      else {
        console.log("errorCode: ", result.code);
        console.log("errorMessage: ", result.message);
        // The email of the user's account used.
        console.log("email: ", result.email);
        // The firebase.auth.AuthCredential type that was used.
        console.log("credential: ", result.credential);
      }
    },
    githublogout() {
      var self = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          localStorage.setItem("tokenId", null);
          localStorage.setItem("user", null);
          self.isLoggedIn = false;
          self.$router.go({ path: "home" });
        })
        .catch(function(error) {
          self.$router.go({ path: "home" });
          console.log("errorCode: ", error.code);
          console.log("errorMessage: ", error.message);
        });
    },
  },*/
</script>
