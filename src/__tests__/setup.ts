import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { createI18n } from 'vue-i18n'
import { createRouter, createMemoryHistory } from 'vue-router'
import { vi } from 'vitest'
import ua from '@/locales/ua.json'
import en from '@/locales/en.json'
import { LOCALES } from '@/locales/index'

const i18n = createI18n({
    legacy: false,
    locale: LOCALES.UA,
    fallbackLocale: LOCALES.EN,
    messages: {
        en,
        ua,
    },
})

const router = createRouter({
    history: createMemoryHistory(),
    routes: [],
})

export function mountComponent(component: any) {
    return mount(component, {
        global: {
            plugins: [createTestingPinia({ createSpy: vi.fn }), i18n, router],
            stubs: ['AppButton'],
        },
    })
}
