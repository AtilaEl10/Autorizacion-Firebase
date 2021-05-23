<template>
  <div class="hello">
    <div class="shadow card mx-auto mt-5 p-5" style="width: 500px">
      <h1 class="mb-3">Iniciar Sesión</h1>
      <div class="form-group">
        <label for="">Usuario</label>
        <input type="email" class="form-control" v-model="usuario" />
      </div>
      <div class="form-group">
        <label for="">Contraseña</label>
        <input type="password" class="form-control" v-model="contrasena" />
      </div>
      <div class="mx-auto mt-3">
        <button @click="login()" class="btn btn-primary">Ingresar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
//
    };
  },

  computed: {
    usuario: {
      get() {
        return this.user
      },
      set(v) {
        this.updateUser(v)
      }
    },
    contrasena: {
      get() {
        return this.pass
      },
      set(v) {
        this.updatePass(v)
      }
    },

    ...mapState(["user", "pass"])
  },
  methods: {
    ...mapMutations(["login", "updateUser", "updatePass"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
