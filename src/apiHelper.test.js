import {
  getFilmDetails,
  getPlanetDetails,
  getPeopleDetails,
  getVehicleDetails,
  fetchJson
} from './apiHelper.js';

import {mockFilm, mockVehicle, mockPlanets, mockPeople} from './mockData.js';
describe('fetchJson', () => {

  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'return results',
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    fetchJson();
    expect(window.fetch).toBeCalled();
  });

  it('throw an error when catch is hit', () => {

  });

});

describe('getFilmDetails', () => {

  beforeAll(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockFilm
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await getFilmDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an object of results', async() => {
    const filmData = await getFilmDetails(7);
    expect(typeof filmData).toEqual('object');
  })

});


describe('getVehicleDetails', () => {

  beforeAll(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockVehicle
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await getVehicleDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an object of results', async() => {
    const vehicleData = await getVehicleDetails();

    expect(typeof vehicleData).toEqual('object');
  });

});

describe('getPlanetDetails', () => {

  beforeAll(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPlanets
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await getPlanetDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an object of results', async() => {
    const planetData = await getPlanetDetails();

    expect(typeof planetData).toEqual('object');
  });

});

describe('getPeopleDetails', () => {

  beforeAll(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: mockPeople
      })
    }));
  });

  it('fetch gets called', async() => {
    expect(window.fetch).not.toHaveBeenCalled();
    await getPeopleDetails();
    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an object of results', async() => {
    const peopleData = await getPeopleDetails();

    expect(typeof peopleData).toEqual('object');
  })

});