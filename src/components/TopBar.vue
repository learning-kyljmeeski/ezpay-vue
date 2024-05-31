<template>
    <v-app-bar class="px-5">
      <v-app-bar-title style="cursor: pointer" @click="$router.push('/home')">Home</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home">Главная</v-btn>
      <v-btn  to="/about">О нас</v-btn>
      <v-btn  to="/contacts">Контакты</v-btn>
      <v-btn  to="/login">Войти</v-btn>
    </v-app-bar>
</template>
<script setup>
</script>

<style scoped>
  a.v-btn--active {
    background-color: #F74D4D;
    color: white;
  }
</style>
