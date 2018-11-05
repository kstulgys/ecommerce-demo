import React from 'react'
import ItemPreview from '../src/components/item/ItemPreview'
import waait from '../src/utils/waait'
import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from 'react-apollo/test-utils'
import { fakeItem } from '../src/utils/testUtils'
import { ITEM_QUERY } from '../src/graphql/queries/'

describe('<ItemPreview/>', () => {
  it.skip('renders with proper data', async () => {
    const mocks = [
      {
        // when someone makes a request with this query and variable combo
        request: { query: ITEM_QUERY, variables: { id: '123' } },
        // return this fake data (mocked data)
        result: {
          data: {
            item: fakeItem(),
          },
        },
      },
    ]
    const outer = mount(
      <MockedProvider mocks={mocks}>
        <ItemPreview id="123" />
      </MockedProvider>,
    )
    const Children = outer.prop('children')
    const wrapper = mount(<Children />)

    console.log(wrapper.debug())

    // expect(wrapper.text()).toContain('Loading...')
    // await wait()
    // wrapper.update()
    // console.log(wrapper.debug())
    // expect(toJSON(wrapper.find('h2'))).toMatchSnapshot()
    // expect(toJSON(wrapper.find('img'))).toMatchSnapshot()
    // expect(toJSON(wrapper.find('p'))).toMatchSnapshot()
  })

  // it('Errors with a not found item', async () => {
  //   const mocks = [
  //     {
  //       request: { query: SINGLE_ITEM_QUERY, variables: { id: '123' } },
  //       result: {
  //         errors: [{ message: 'Items Not Found!' }],
  //       },
  //     },
  //   ]
  //   const wrapper = mount(
  //     <MockedProvider mocks={mocks}>
  //       <SingleItem id="123" />
  //     </MockedProvider>,
  //   )
  //   await wait()
  //   wrapper.update()
  //   console.log(wrapper.debug())
  //   const item = wrapper.find('[data-test="graphql-error"]')
  //   expect(item.text()).toContain('Items Not Found!')
  //   expect(toJSON(item)).toMatchSnapshot()
  // })
})
