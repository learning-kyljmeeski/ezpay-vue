<template class="container">
    <v-app-bar>
      <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">Home</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home">Главная</v-btn>
      <v-btn  to="/home">О нас</v-btn>
      <v-btn  to="/home">Контакты</v-btn>
      <v-btn  to="/home">Войти</v-btn>
    </v-app-bar>
</template>
<script setup>
</script>
