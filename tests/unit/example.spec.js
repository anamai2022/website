import { shallowMount } from '@vue/test-utils'
import StepHeader from '@/components/widgets/StepHeader.vue'

describe('StepHeader.vue', () => {
  it('renders props.msg when passed', () => {
    const poll = 'new message'
    const mode = 'Create'
    const wrapper = shallowMount(StepHeader, {
      propsData: { poll,mode }
    })
    expect(wrapper.text()).toMatch(poll,mode)
  })
})
