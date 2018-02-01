import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer.js';

const mockData = [
  {name: 'vehicle1', type: 'toyota', description: 'rav4', number: 5},
  {name: 'vehicle1', type: 'chevy', description: 'equinox', number: 6}
]

describe('CardContainer', () => {

  it('match snapshot', () => {
    const wrapper = shallow(<CardContainer 
                              data={mockData} />)
    expect(wrapper).toMatchSnapshot();
  })

  it('card for every object in the dataArray', () => {
    const wrapper = shallow(<CardContainer 
                              data={mockData} />)
    expect(wrapper.find('Card').length).toEqual(2);
  })

})