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
    fetchCompanies() {
      // Here you can make an API call to fetch data
      // For this example, using static data
      this.companies = [
        {
          id: "cb4d5112-ba37-4d06-821b-11033fcb76a2",
          email: "example@example.com",
          companyName: "Example Company",
          businessType: "Technology",
          taxId: "123456789",
          supportPhone: "+1234567890",
          createDate: "2024-06-01T05:22:57.865782",
          price: 99.99,
          addressCompany: "1234 Example Street, Example City, EX 12345",
          statementDescription: null,
          currency: "USD"
        }
      ];
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
