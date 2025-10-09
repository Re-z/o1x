// TODO: remove or disable any type
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { translations } from './locales'
import { LOCALES } from '@/locales/index'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: LOCALES.EN,
    fallbackLocale: LOCALES.UA,
    messages: translations as any,
})

import '@/assets/styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
