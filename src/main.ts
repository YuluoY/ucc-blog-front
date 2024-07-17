import { createApp } from 'vue'
import App from '@/App.vue'
import 'animate.css'
import 'normalize.css'
import '@/assets/styles/index.scss'

import router from '@/router'
import i18n from './locales/index'

const app = createApp(App).use(router)
app.mount('#app')

app.use(i18n)

export default app
