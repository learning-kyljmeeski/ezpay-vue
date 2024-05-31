<template>
  <v-layout>
    <v-app>
      <SideBar/>
      <TopBar/>
      <v-main>
        <router-view/>
      </v-main>
      <v-footer class="bg-transparent container mt-4">

        <div class="me-auto">
          <p>© 2024 Copyright, All Right Reserved, Made by Ilya Yugai with</p>
        </div>

        <div class="ms-auto">
          <img src="./assets/social.png" alt="social media" class="img-fluid">
        </div>
      </v-footer>
    </v-app>
  </v-layout>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
</script>
