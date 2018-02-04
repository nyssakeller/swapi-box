/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { shallow, mount } from 'enzyme';
import {mockFilm, mockVehicle, mockPlanets, mockPeople} from '../mockData.js';
import getPeopleDetails from '../apiHelper.js';


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
    wrapper = await mount(<App />)
  });
  
  it('initial states', () => {
    expect(wrapper.state().people).toEqual([])
    expect(wrapper.state().vehicles).toEqual([])
    expect(wrapper.state().planets).toEqual([])
    expect(wrapper.state().filmData).toEqual([])
    expect(wrapper.state().favorites).toEqual([])
    expect(wrapper.state().category).toEqual(null)
  });

  it('category updates after get getButtonClass is called', async() => {
    window.fetch
    await wrapper.instance().getButtonClass('people');
    expect(wrapper.state('category')).toEqual('people');
  });

  it('getButtonClass calls getFromLocalStoarage() if there is data in localStorage', () => {
    global.localStorage = {
      setItem: () => {},
      getItem: (category) => {
        return JSON.stringify(locallyStoredData[category]);

        wrapper.instance().getButtonClass('people');
        expect(wrapper.instance().getFromLocalStoarage()).toHaveBeenCalled();
      }
    }
  });

  // it('getButtonClass calls get getCorrectApi() if localStorage is empty', async() => {
  //   await wrapper.instance().getButtonClass('people');
  //   expect(wrapper.instance().getCorrectApi()).toHaveBeenCalled();
  // });

  // it('getCorrectApi should call the correct fetch function', async() => {
  //   const category = 'people';
  //   const data = mockPeople
  //   await wrapper.instance().getCorrectApi('people');
  //   expect(wrapper.state('people')).toEqual(data);
  // })

  it('', () => {
    const category = 'peope';
    wrapper.instance().getFromLocalStorage();
    localStorage.getItem('people')
    expect(wrapper.state('people')).toEqual(mockPeople);
  });

});















