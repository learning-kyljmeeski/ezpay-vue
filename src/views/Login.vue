<template>
  <v-container>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <error v-if="error" :error="error"/>
        <v-card>
          <v-card-title class="text-center">Login</v-card-title>
          <v-card-text>
            <form>
              <div class="form-group">
                <v-text-field label="Username" v-model="username" required
                @input="resetError"></v-text-field>
              </div>
              <div class="form-group">
                <v-text-field label="Password" v-model="password" type="password" required
                @input="resetError"></v-text-field>
              </div>
              <div class="form-group">
                <v-btn color="primary" @click="login">Log in</v-btn>
              </div>
            </form>
            <div class="text-center mt-2">
              <p>or
                <router-link to="/signup">Sign up</router-link>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import AuthService from '../service/auth-service.js'
import Error from "@/components/Error.vue";

export default {
  components: {
    Error,
  },
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login() {
      try {
        await AuthService.login(this.username, this.password);
      } catch(e) {
        console.error(e)
        this.username = '';
        this.password = '';
        this.error = 'Неверная почта или пароль'
      }

    },
    resetError() {
      this.error= ''
    }
  }
}
</script>
