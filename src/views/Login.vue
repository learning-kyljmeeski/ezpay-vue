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
            <div>
              <v-btn class="bg-danger text-white d-block w-100" @click="dialog = true">Забыли пароль?</v-btn>
            </div>
          </v-card-text>
        </v-card>
        <div class="text-center pa-4">
          <v-dialog
            v-model="dialog"
          >
            <v-card
              prepend-icon="mdi-lock-reset"
              text="Введите свой email"
              title="Сброс пароля"
            >
              <v-text-field type="text" id="email" class="mx-3" v-model="forgotUsername"></v-text-field>
              <template v-slot:actions>
                <v-btn
                  class="ms-auto bg-danger d-block text-white mx-auto"
                  text="Сбросить"
                  @click="resetPassword"
                ></v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
        <div class="text-center pa-4">
          <v-dialog
            v-model="send"
          >
            <v-card
              prepend-icon="mdi-lock-reset"
              text="Ссылка отправлена на почту"
              title="Проверьте почту"
            >
              <template v-slot:actions>
                <v-btn
                  class=" bg-success d-block text-white mx-auto"
                  text="Ок"
                  @click="send = false"
                ></v-btn>
              </template>
            </v-card>
          </v-dialog>
        </div>
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
      forgotUsername: '',
      error: '',
      dialog: false,
      send: false
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

     async resetPassword() {
      await AuthService.resetPassword(this.forgotUsername);
      this.forgotUsername = '';
      this.dialog = false;
      this.send = true;
    },

    resetError() {
      this.error= ''
    }
  }
}
</script>
