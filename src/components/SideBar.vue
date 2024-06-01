<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    v-if="auth"
  >
    <v-list>
      <v-list-item
        :prepend-avatar="profile_photo_url"
        subtitle="sandra_a88@gmailcom"
        :title="user"
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
import {mapGetters} from "vuex";

export default {
  data () {
    return {
      drawer: true,
      rail: true,
    }
  },
  computed: {
    ...mapGetters(["role",  "user", "profile_photo_url", "auth"]),
  },
}
</script>
