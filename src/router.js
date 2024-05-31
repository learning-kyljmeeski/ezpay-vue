import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import Contacts from "@/views/Contacts.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {path: '/home', component: Home},
  {path: '/about', component: AboutUs},
  {path: '/contacts', component: Contacts},
  {path: '/login', component: Login},
  {path: '/signup', component: SignUp},
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
