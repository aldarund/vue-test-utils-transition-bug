import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vue from 'vue'
import TransitionTest from '~/components/TransitionTest.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()
const vuetify = new Vuetify()
localVue.use(vuetify)



describe('TransitionTest', () => {
  let component


  beforeEach(() => {
    component = mount(TransitionTest, {
      localVue,
      vuetify
    })
  })

  describe('test', () => {
      it('shouldn\'t render unexpanded scroll translationd if expanded is true', async () => {
        component.vm.expanded = true
        await localVue.nextTick()
        console.log(component.html())
        expect(component.find('[data-t=xxx]').exists()).toBe(false)
      })
    }
  )
})
