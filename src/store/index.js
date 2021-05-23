import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import firebase from "firebase"


Vue.use(Vuex); 

export default new Vuex.Store({
  state: {
      user: "",
      pass: "",
  },
  mutations: {
    updateUser(state,payload) {
      state.user = payload
    },
    updatePass(state,payload) {
      state.pass = payload
    },
    async login(state) {
      try {
        const request = firebase.auth().signInWithEmailAndPassword(state.user, state.pass)
        console.log(request);
        router.push("home")
      } catch (error) {
        if (error.code === "auth/invalid-email" || error.code === "auth/wrong-password")
          return alert("Usuario o Contraseña incorrectos");
      }
    }
  },
});
