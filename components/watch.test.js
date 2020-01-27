import { createLocalVue, shallowMount } from '@vue/test-utils'
import watchtest from '~/components/watchtest.vue'


const localVue = createLocalVue()


describe('TestWatch', () => {
  let component


  beforeEach(() => {
    component = shallowMount(watchtest, {
      localVue,
      propsData: {
        test: 'first',
        test2: 'first'
      }
    })
  })

  describe('test watch', () => {
      it('with imeddiate', async () => {
        component.setProps({
          test: 'second'
        })
        await localVue.nextTick()
        expect(component.vm.test).toBe('second')
      })

      it('without immediate', async () => {
        component.setProps({
          test2: 'second'
        })
        await localVue.nextTick()
        expect(component.vm.test2).toBe('second')
      })
    }
  )
})
