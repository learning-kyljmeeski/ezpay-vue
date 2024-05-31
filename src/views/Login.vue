<template>
    <v-container>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-card>
                    <v-card-title class="text-center">Login</v-card-title>
                    <v-card-text>
                        <form>
                            <div class="form-group">
                                <v-text-field label="Username" v-model="username"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-btn color="primary" @click="login">Log in</v-btn>
                            </div>
                        </form>
                        <div class="text-center mt-2">
                            <p>or <router-link to="/signup">Sign up</router-link></p>
                        </div>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
import AuthService from "@/service/auth-service";
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
<<<<<<< HEAD
            await AuthService.login(this.username, this.password);
=======
            await AuthService.login(this.username, this.password)
>>>>>>> d452266e0b1d58b1a1a2ac02a42591ef38c6bb39
        }
    }
}
</script>
