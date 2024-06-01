<template>
  <v-app-bar>
    <v-app-bar-title style="cursor: pointer" @click="$router.push('/home')">Home</v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <v-btn  to="/home">Главная</v-btn>
      <v-btn  to="/about">О нас</v-btn>
      <v-btn  to="/contacts">Контакты</v-btn>
      <template v-if="auth">
        <v-btn color="purple-accent-3" icon="mdi-logout" size="small" @click="logout"/>
      </template>
      <template v-else>
        <v-btn  to="/login">Войти</v-btn>
      </template>

    </div>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="spec"></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer v-if="isSmallScreen" v-model="drawer" app temporary>
    <v-list>
      <v-list-item to="/home">
        <v-list-item-title>Главная</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-title>О нас</v-list-item-title>
      </v-list-item>
      <v-list-item to="/contacts">
        <v-list-item-title>Контакты</v-list-item-title>
      </v-list-item>
      <v-list-item to="/login">
        <v-list-item-title>Войти</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';
import {useStore} from "vuex";
import router from "@/router";

const drawer = ref(false);
const { mdAndDown } = useDisplay();

const isSmallScreen = computed(() => mdAndDown.value);
const store = useStore();

const auth = computed(() => store.getters.auth);
const user = computed(() => store.getters.user);

const logout = () => {
  store.dispatch('user', null);
  store.dispatch('role', null);
  store.dispatch('auth', false);
  store.dispatch('systemUser', false);
  localStorage.removeItem('token');
  router.push('/home');
};
</script>

<style scoped>
a.v-btn--active {
  background-color: #F74D4D;
  color: white;
}
.hidden-sm-and-down {
  display: none;
}
@media (min-width: 960px) {
  .hidden-sm-and-down {
    display: block;
  }

  .spec {
    display: none;
  }
}
</style>
