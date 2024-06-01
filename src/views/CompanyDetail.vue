<template>
    <v-container>
      <v-card v-if="company">
        <v-card-title>{{ company.companyName }}</v-card-title>
        <v-card-subtitle>{{ company.businessType }}</v-card-subtitle>
        <v-card-text>
          <v-list dense>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ company.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Tax ID</v-list-item-title>
                <v-list-item-subtitle>{{ company.taxId }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Support Phone</v-list-item-title>
                <v-list-item-subtitle>{{ company.supportPhone }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Address</v-list-item-title>
                <v-list-item-subtitle>{{ company.addressCompany }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Create Date</v-list-item-title>
                <v-list-item-subtitle>{{ new Date(company.createDate).toLocaleDateString() }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Price</v-list-item-title>
                <v-list-item-subtitle>{{ company.price }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Currency</v-list-item-title>
                <v-list-item-subtitle>{{ company.currency }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-alert v-else type="info" dismissible>
        Loading company details...
      </v-alert>
    </v-container>
  </template>
  
  <script>
  import CompanyService from '@/service/company-service';
  export default {
    data() {
      return {
        company: null, 
      };
    }, 
    async mounted() {
      this.companyId = this.$route.params.id;
      this.company = await this.fetchCompany();
      console.log(this.company);
    },
    methods: {
      async fetchCompany() {
        const response = await CompanyService.getCompany(this.companyId);
        return response;
      }
    }
  }
  </script>
  
  <style scoped>
  .v-card {
    max-width: 600px;
    margin: auto;
  }
  .v-list-item {
    border-bottom: 1px solid #e0e0e0;
  }
  </style>
  