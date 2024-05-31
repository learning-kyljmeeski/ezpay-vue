import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import Contacts from "@/views/Contacts.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Account from "@/views/Account.vue";
import Transactions from "@/views/Transactions.vue";
import Revenue from "@/views/Revenue.vue";

const routes = [
  {path: '/home', component: Home},
  {path: '/about', component: AboutUs},
  {path: '/contacts', component: Contacts},
  {path: '/login', component: Login},
  {path: '/dashboard', component: Dashboard},
  {path: '/account', component: Account},
  {path: '/transactions', component: Transactions},
  {path: '/revenue', component: Revenue},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
