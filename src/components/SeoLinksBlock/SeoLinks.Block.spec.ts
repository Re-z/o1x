import { describe, test, expect } from 'vitest'
import { mountComponent } from '@/__tests__/setup'
import SeoLinksBlock from '@/components/SeoLinksBlock/SeoLinksBlock.vue'

describe('SeoLinksBlock.vue tests', () => {
    test('snapshot tests', async () => {
        const wrapper = mountComponent(SeoLinksBlock)
        // snapshot
        expect(wrapper.html()).toMatchSnapshot()
    })
})
