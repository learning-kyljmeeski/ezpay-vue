/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

// Components
import App from './App.vue'

import router from './router'
import './main.css'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')
