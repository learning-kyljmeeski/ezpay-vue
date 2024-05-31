<template>
  <v-app-bar>
    <v-app-bar-title style="cursor: pointer" @click="$router.push('/')">Home</v-app-bar-title>
    <v-spacer></v-spacer>
      <v-btn color="purple-accent-3" to="/home">Home</v-btn>
      <v-btn color="purple-accent-3" icon="mdi-logout" size="small" @click="() => {}"/>
  </v-app-bar>
</template>
