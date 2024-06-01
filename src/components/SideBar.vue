<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        :prepend-avatar="image_url"
        :title="username"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item color="red" prepend-icon="mdi-account-circle-outline" title="Account"  to="/account"></v-list-item>
      <v-list-item color="red" prepend-icon="mdi mdi-domain" title="Companies"  to="/companies"></v-list-item>
      <v-list-item color="red" prepend-icon="mdi-bank-transfer" title="Транзакции" to="/transactions"></v-list-item>
      <v-list-item color="red" prepend-icon="mdi-cash" title="Прибыль" to="/revenue"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import LocalstorageService from '@/service/localstorage-service';
export default {
  data () {
    const user = JSON.parse(LocalstorageService.getter("vuex"));
    return {
      username: user.user,
      image_url: user.profile_photo_url,
      drawer: true,
      rail: true,
    }
  },
}
</script>
