import React from 'react'
import { shallow } from 'enzyme'
import NotFound from '../../components/pages/NotFound'

test('should render NotFound correctly', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot()
})