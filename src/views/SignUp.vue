<template>
    <v-container>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-card>
                    <v-card-title class="text-center">Sign up</v-card-title>
                    <v-card-text>
                        <form>
                            <div class="form-group">
                                <v-text-field label="First Name" v-model="firstName"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-text-field label="Last Name" v-model="lastName"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-text-field label="Phone" v-model="phone"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-text-field label="Username" v-model="username"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                            </div>
                            <div class="form-group">
                                <v-btn color="primary" @click="signup">Sign Up</v-btn>
                            </div>
                        </form>
                    </v-card-text>
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            username: '',
            password: ''
        }
    },
    methods: {
        signup() {
            console.log('First Name:', this.firstName);
            console.log('Last Name:', this.lastName);
            console.log('Phone:', this.phone);
            console.log('Username:', this.username);
            console.log('Password:', this.password);
        }
    }
}
</script>
