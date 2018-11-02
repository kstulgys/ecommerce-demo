import React from 'react'
import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// Enzyme.configure({ adapter: new Adapter() })

import React from 'react'
import ItemComponent from '../src/components/item/Item'
import { shallow, mount, render } from 'enzyme'

const fakeItem = {
  id: '123',
  title: 'hello',
  price: 1000,
  description: 'hello hello',
  image: 'smth.jpg',
  largeImage: 'smth.jpg',
}

describe('<Item/>', () => {
  it('renders and displays properly', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />)
    console.log(wrapper.debug())
  })
})

// {
//   "presets": ["env"],
//   "env": {
//     "test": {
//       "presets": ["env"]
//     }
//   }
// }
