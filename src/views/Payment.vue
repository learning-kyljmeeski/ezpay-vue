<template>
    <v-app>
        <v-container>
            <div class="payment-page">
                <v-row justify="center">
                    <v-col cols="12" md="8">
                        <v-card>
                            <v-card-title>
                                <h2 class="text-center w-100">Payment Information</h2>
                            </v-card-title>
                            <v-card-subtitle>
                                <div class="text-center w-100">
                                    <h3>Amount to be paid: $50.00</h3>
                                </div>
                            </v-card-subtitle>
                            <v-card-text>
                                <form>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Email" v-model="email" outlined dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Card Number" v-model="cardNumber" outlined
                                                dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field label="Expiry Date" v-model="expiryDate" outlined
                                                dense></v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field label="CVC" v-model="cvc" outlined dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field label="Full name on card" v-model="fullName" outlined
                                                dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-btn color="primary" @click="submitPayment">
                                                Pay Now
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
            fullName: ''
        };
    },
    methods: {
        submitPayment() {
            console.log(this.email);
            console.log(this.cardNumber);
            console.log(this.expiryDate);
            console.log(this.cvc);
            console.log(this.fullName);
        }
    }
};
</script>

<style>
.payment-page {
    padding: 50px 0;
}
</style>