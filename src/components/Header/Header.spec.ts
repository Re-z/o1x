import { describe, it, expect } from 'vitest'
import { mountComponent } from '@/__tests__/setup'
import Header from '@/components/Header/Header.vue'

describe('Header.vue tests', () => {
    it('renders correctly (snapshot)', () => {
        const wrapper = mountComponent(Header)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
