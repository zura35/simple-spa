import Vue from 'vue'
import Vuetify from 'vuetify'

import { mount, createLocalVue } from '@vue/test-utils'
import FriendListItem from '@/components/FriendListItem.vue'
import FriendDetails from '@/components/FriendDetails.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
const friend = {
  '_id':'73dba524-2fb9-42e6-ae3b-e11c8205d0af',
  'picture':'http://placehold.it/175x244',
  'name':{'first':'Camacho','last':'Wagner'},
  'email':'camacho.wagner@undefined.com',
  'location':{'latitude':22.3417661,'longitude':null}
}

describe('FriendListItem.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('show avatar and name in friend-list-item', () => {
    const wrapper = mount(FriendListItem, {
      localVue,
      vuetify,
      propsData: {
        friend: friend
      }
    })
    expect(wrapper.html()).toContain(friend.picture)
    expect(wrapper.html()).toContain(friend.name.first + ' ' + friend.name.last)
  })
})

describe('FriendDetails.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('show error msg when friend is null', () => {
    const wrapper = mount(FriendDetails, {
      localVue,
      vuetify,
      propsData: {
        value: true
      }
    })

    expect(wrapper.html()).toContain('No details available.')
  })

  it('show map and details', () => {
    const wrapper = mount(FriendDetails, {
      localVue,
      vuetify,
      propsData: {
        value: true,
        friend: friend,
        mapKey: 'Fake Key',
      }
    })

    expect(wrapper.html()).toContain('https://www.google.com/maps/embed/v1/place')
    expect(wrapper.html()).toContain(friend.picture)
    expect(wrapper.html()).toContain(friend.name.first + ' ' + friend.name.last)
    expect(wrapper.html()).toContain(friend.email)
  })
})
