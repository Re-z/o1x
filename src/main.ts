import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import { translations } from './locales'

const i18n = createI18n({
    legacy: false, // сучасний Composition API синтаксис
    globalInjection: true, // дозволяє використовувати $t у шаблонах без імпорту
    locale: 'ua', // мова за замовчуванням
    fallbackLocale: 'ua', // fallback, якщо ключа немає
    messages: translations as any,
})

import '@/assets/styles/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
