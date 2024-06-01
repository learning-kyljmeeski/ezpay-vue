<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="companies"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Company List</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="fetchCompanies">Refresh</v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item, index }">
        <tr :key="index" :data-id="item.id">
          <td><router-link :to="{ path: '/companies/' + item.id }">{{ item.companyName }}</router-link></td>
          <td>{{ item.businessType }}</td>
          <td>{{ item.supportPhone }}</td>
          <td>{{ item.currency }}</td>
          <td>${{ item.price.toFixed(2) }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import CompanyService from '@/service/company-service';
export default {
  data() {
    return {
      headers: [
        { title: 'Company Name', value: 'companyName' },
        { title: 'Business Type', value: 'businessType' },
        { title: 'Support Phone', value: 'supportPhone' },
        { title: 'Currency', value: 'currency' },
        { title: 'Price', value: 'price' },
      ],
      companies: []
    }
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      this.companies = await CompanyService.getAllCompanies();
    },
    goToCompany(item) {
      this.$router.push(`/companies/${item.id}`);
    }
  }
}
</script>

<style scoped>
tr:hover {
  cursor: pointer;
}
</style>
