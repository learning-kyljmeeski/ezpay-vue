<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item link to="/">
          <v-row align="center" justify="center" no-gutters>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Home</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-title>О нас</v-list-item-title>
        </v-list-item>
        <!-- Добавьте другие пункты меню, если необходимо -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script setup>
</script>
