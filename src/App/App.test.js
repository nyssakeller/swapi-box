/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import {mockFilm, mockVehicle, mockPlanets, mockPeople} from '../mockData.js';
import getPeopleDetails from '../apiHelper.js';
import 'jest-localstorage-mock';


const locallyStoredData = {
  people: mockPeople,
  vehicles: mockVehicle,
  planets: mockPlanets,
  filmData: mockFilm
}

global.localStorage = {
  setItem: () => {},
  getItem: (category) => {
    return JSON.stringify(locallyStoredData[category]);
  }
};

window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve({
    results: mockPeople,
  })
}));

describe('App', () => {
  let wrapper;

  beforeEach(async() => {
    wrapper = await mount(<App />, {disableLifecycleMethods: true})
  });
  
  it('initial states', () => {
    expect(wrapper.state().people).toEqual([])
    expect(wrapper.state().vehicles).toEqual([])
    expect(wrapper.state().planets).toEqual([])
    expect(wrapper.state().filmData).toEqual([])
    expect(wrapper.state().favorites).toEqual([])
    expect(wrapper.state().category).toEqual(null)
  });

  describe('getButtonClass', () => { 

    it('the state of category should update when button is clicked', () => {
      wrapper.find('.people').simulate('click');
      expect(wrapper.state('category')).toEqual('people');
    });

    it('getButtonClass calls getFromLocalStoarage() if there is data in localStorage', async() => {
      wrapper.instance().getButtonClass('people');

      global.localStorage = {
        setItem: (category) => {
          return JSON.stringify(locallyStoredData[category]);
        },
        getItem: () => {}
      };
     
  
      expect(wrapper.instance().getFromLocalStorage()).toHaveBeenCalled();
    });

    it.only('render cards when a button is clicked', () => {
      wrapper.find('.people').simulate('click')
    
      expect(wrapper.find('Card').length).toBeGreaterThan();
    });

      // it('getButtonClass calls get getCorrectApi() if localStorage is empty', async() => {
    //   global.localStorage = {
    //     setItem: () => {},
    //     getItem: (category) => {
    //       return JSON.stringify(locallyStoredData[category]);
    //   await wrapper.instance().getButtonClass('people');
    //   expect(wrapper.instance().getCorrectApi()).toHaveBeenCalled();
    // });
  });

  describe('getCorrectApi', () => { 

    it('getCorrectApi should call the correct fetch function', async() => {
      const category = 'people';
      const data = mockPeople
      await wrapper.instance().getCorrectApi('people');
      expect(wrapper.state('people')).toEqual(data);
    });

  });

  describe('getFromLocalStorage', () => {

    it('', () => {
      const category = 'peope';
      wrapper.instance().getFromLocalStorage();
      localStorage.getItem('people')
      expect(wrapper.state('people')).toEqual(mockPeople);
    });

  });

  describe('favoriteCard function', () => {
    // it('favoriteCard sets the state of favorites', () => {
    //   const dataObj = {name: 'Luke', type: 'human', description:'earth', number: '2', favoriteStatus: true};
    //   wrapper.instance().favoriteCard(dataObj);
    //   global.localStorage = {
    //     setItem: (favorites) => dataObj
    //   }
    //   expect(wrapper.state('favorites')).toEqual([dataObj])
    // });
  });
});















