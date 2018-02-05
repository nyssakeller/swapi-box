/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import ScrollingText from './ScrollingText.js';

const mockFilm = [
  {
    title: 'a new hope',
    opening_crawl: 'text',
    release_date: 'yesterday'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
  {
    title: 'another title',
    opening_crawl: 'more text',
    release_date: 'tomorrow'
  },
];


describe('ScrollingText', () => {
 
  it('snapshot test', () => {
    const wrapper = shallow(<ScrollingText filmData={mockFilm} />)
    expect(wrapper).toMatchSnapshot();
  });

});