set('authorization', validToken)
/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import {mockFilm, mockVehicle, mockPlanets, mockPeople} from '../mockData.js';

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

window.fetch = jest.fn()

describe('App', () => {
  let wrapper;

  beforeEach(async() => {
    wrapper = await shallow(<App />, {disableLifecycleMethods: true});
  
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
          status: 200,
          json: () => Promise.resolve({  })
        })
      )
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
      global.localStorage = {
        setItem: () => {},
        getItem: (category) => {
          return JSON.stringify(mockPeople)
        }
      };
      global.localStorage.setItem('people', JSON.stringify(mockPeople))
      wrapper.setState({category: 'people'})
      wrapper.instance().getFromLocalStorage()

      wrapper.update()
      expect(wrapper.state('people')).toEqual(mockPeople);
    });

    it('getButtonClass calls get getCorrectApi() if localStorage is empty', async() => {
    global.localStorage = {
      setItem: () => {},
      getItem: (category) => {
        return JSON.stringify(locallyStoredData[category])
      } 
    };
      // wrapper.instance().getButtonClass('people');
      // expect(wrapper.instance().getCorrectApi()).toHaveBeenCalled();
    });
  });

  describe('getCorrectApi', () => { 

    it('getCorrectApi should call the correct fetch function', async() => {
      wrapper.setState({category: 'people'});
      await wrapper.instance().getCorrectApi('people');
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ 
          results: mockPeople
        })
      }))

      expect(wrapper.state('people')).toEqual(mockPeople);
    });

  });

  describe('getFromLocalStorage', () => {

    it('set state based off of localStorage', () => {
      wrapper.instance().getFromLocalStorage();
      global.localStorage = {
        setItem: () => {},
        getItem: (people) => {
          return JSON.parse(mockPeople)
        }
      };

      global.localStorage.getItem(people)
      expect(wrapper.state('people')).toEqual(mockPeople);
    });

  });

  describe('favoriteCard function', () => {
    it('should add card to favorites in state when card is clicked', () => {
      expect(wrapper.state().favorites.length).toEqual(0);

      wrapper.find('.people').simulate('click', 
        {target: {closest: () => { return {innerText: 'people'}; }}});
      wrapper.find('.favorite-button').first().simulate('click');

      expect(wrapper.state().favorites.length).toEqual(1);
    });

  });
  
});















