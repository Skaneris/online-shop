import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Header from './Header.vue'
import Footer from './Footer.vue'
import App from './App.vue'
import router from './router'

import 'the-new-css-reset/css/reset.css'
import './assets/sass/style.sass'

const pinia = createPinia()

const header = createApp(Header)
header.use(pinia).use(router)
header.mount('#header')

const app = createApp(App)
app.use(pinia).use(router)
app.mount('#app')

const footer = createApp(Footer)
footer.mount('#footer')