import {
  fetchJson,
  getFilmData,
  getPeopleData,
  getPlanetsData,
  getVehicleData,
  fetchPlanetResidents
} from './apiHelper.js';

describe('getFilmData', () => {
  const mockFilmData = [
    {
      title: 'A New Hope',
      crawl: 'text',
      date: 'a long time ago'
    }, 
    {
      title: 'Empire Strikes Back',
      crawl: 'more text',
      date: 'yesterday'
    }
  ]
  
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        mockFilmData
      )
  }));
})

  it('called with correct params', async() => {
    const expectedParams = `https://swapi.co/api/films`
    await window.fetch
    await getFilmData(mockFilmData)
    expect(window.fetch).toBeCalledWith(expectedParams)
  })

})

describe('getVehicleData', () => {
  const mockVehicleData = [
    {
      title: 'car',
      model: 'model2',
      vehicle_class: 'class2',
      numberOfPassengers: 2
    }, 
    {
      title: 'boat',
      model: 'model1',
      vehicle_class: 'class9',
      numberOfPassengers: 92
    }
  ]
  
  beforeAll(() => {

  })

  it('called with correct params', () => {
    const expectedParams = `https://swapi.co/api/vehicles`
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          mockVehicleData
        })
      })
    })
    getVehicleData(mockVehicleData)
    expect(window.fetch).toBeCalledWith(expectedParams)
  })

  it('returns and object if the status code is ok', () => {
    expect(addGrocery(mockGrocery)).resolves.toEqual({mockFilmData})
  })


})