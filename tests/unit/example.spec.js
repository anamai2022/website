import { shallowMount } from '@vue/test-utils'
import UserMenu from '@/components/UserMenu.vue'

describe('UserMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const mode = 'websiteName'
    const wrapper = shallowMount(UserMenu, {
      propsData: { poll }
    })
    expect(wrapper.text()).toMatch(poll,mode)
  })
})
