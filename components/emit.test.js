import { createLocalVue, shallowMount } from '@vue/test-utils'
import EmitTest from '~/components/EmitTest.vue'


const localVue = createLocalVue()

describe('EmitTest', () => {
  let component


  beforeEach(() => {
    component = shallowMount(EmitTest, {
      localVue
    })
  })

  describe('test', () => {
      it('should change', async () => {
        component.find('#v2').vm.$emit('something')
        expect(component.vm.v2).toBe(true)
        component.find('#v1').vm.$emit('something')
        expect(component.vm.v1).toBe(true)
      })
    }
  )
})
