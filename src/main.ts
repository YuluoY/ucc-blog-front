import { createApp } from 'vue'
import App from '@/App.vue'
import 'animate.css'
import 'normalize.css'
import '@/assets/styles/index.scss'

import router from '@/router'
import i18n from './locales/index'
import ui from './ui'

import beforehand from './beforehand'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(ui)

beforehand(app).then(() => {
  app.mount('#app')
})

export default app
