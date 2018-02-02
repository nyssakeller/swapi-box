import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';

describe('Card', () => {
  const mockName = 'Luke';
  const mockDescription = 'Tatoonie';
  const mockType = 'human';
  const mockNumber = '9320304';

  it('match snapshot', () => {
    const wrapper = shallow(<Card 
                              name={mockName}
                              description={mockDescription}
                              type={mockType}
                              number={mockNumber}/>);
    expect(wrapper).toMatchSnapshot();
  });

});