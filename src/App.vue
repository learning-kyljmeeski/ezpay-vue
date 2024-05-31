<template>
  <v-app>
    <SideBar />
    <TopBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import SideBar from "@/components/SideBar.vue";
import TopBar from "@/components/TopBar.vue";
</script>
