<template>
  <div class="home">
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link>
    <b-container>
      <b-row>
        <b-col cols="8" class="mx-auto">
          <h1 class="mt-4 fw-bold">Bienvenidos a la ventana de Usuarios registrados</h1>
          <h4 class="mt-4">Has sido bendecido por el Piolin que me envio mi tia al whatsapp</h4>
          <img class="mt-4" src="@/assets/piolin.jpeg" alt="piolin que me envio mi tia">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>
