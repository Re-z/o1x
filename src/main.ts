// TODO: remove or disable any type
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { translations } from './locales'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'ua',
    /* eslint-disable @typescript-eslint/no-explicit-any */
    messages: translations as any,
})

import '@/assets/styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
