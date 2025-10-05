import { describe, test, expect, vi } from 'vitest'
import { mountComponent } from '@/__tests__/setup'
import SocialsBlock from '@/components/SocialsBlock/SocialsBlock.vue'

describe('SocialsBlock.vue tests', () => {
    test('basic tests', async () => {
        const wrapper = mountComponent(SocialsBlock)
        const socialButton = wrapper.find('[data-test-id="socials-button"]')
        // snapshot
        expect(wrapper.html()).toMatchSnapshot()
        // check if navigation works correctly
        vi.spyOn(window, 'open').mockImplementation(vi.fn())

        await socialButton.trigger('click')
        expect(window.open).toHaveBeenCalled()
    })
})
