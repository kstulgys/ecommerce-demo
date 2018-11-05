import React from 'react'
import CartItemsCount from '../src/components/navigation/cart/CartItemsCount'
import toJSON from 'enzyme-to-json'
import { shallow, mount, render } from 'enzyme'

describe('<CartItemsCount/>', () => {
  it('render', () => {
    shallow(<CartItemsCount count={10} />)
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(<CartItemsCount count={11} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('updates via props', () => {
    const wrapper = shallow(<CartItemsCount count={50} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper.setProps({ count: 10 })
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
