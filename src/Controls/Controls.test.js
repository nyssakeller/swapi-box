/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls.js';

describe('Controls', () => {

  const mockFavorites = [{}, {}, {}];
  
  it('snapshot test', () => {
    const wrapper = shallow(<Controls favorites={mockFavorites}/>);
    expect(wrapper).toMatchSnapshot();
  });

});

