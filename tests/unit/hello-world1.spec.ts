import { mount } from '@vue/test-utils'
import HelloWorld1 from '@/components/HelloWorld1.vue'

describe('HelloWorld.vue', () => {
  it('vuetify v-btn clicked', async () => {
    const wrapper = mount(HelloWorld1)
    const btn = wrapper.find('[data-test="btn"]')
    await btn.trigger('click')
    expect(wrapper.vm.count).toBe(1)
    expect(btn.text()).toContain(1)
    const chip = wrapper.find('#test-chip')
    expect(chip.text()).toBe('1')
  })
})
