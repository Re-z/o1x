import { describe, test, expect } from 'vitest'
import { mountComponent } from '@/__tests__/setup'
import BusinessBanner from '@/components/BusinessBanner/BusinessBanner.vue'

describe('BusinessBanner.vue tests', () => {
    test('renders correctly (snapshot)', () => {
        const wrapper = mountComponent(BusinessBanner)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
