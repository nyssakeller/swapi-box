import {
  fetchJson,
  getFilmData,
  getPeopleData,
  getPlanetsData,
  getVehicleData,
  fetchPlanetResidents,
  getVehcileDetails
} from './apiHelper.js';

describe('fetchJson', () => {

  const { url } = {
    type: "cors", 
    url: "https://swapi.co/api/vehicles/", 
    redirected: true, 
    status: 200, 
    ok: true
  }

  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(
        url
      )
  }));
})

  it('called with correct params', async() => {
    const expectedParams = `https://swapi.co/api/vehicles/`
    await window.fetch
    await fetchJson(url)
    expect(window.fetch).toBeCalledWith(expectedParams)
  })

})

// describe('getVehicleData', () => {
//   const mockVehicleData = [
//     {
//       title: 'car',
//       model: 'model2',
//       vehicle_class: 'class2',
//       numberOfPassengers: 2
//     }, 
//     {
//       title: 'boat',
//       model: 'model1',
//       vehicle_class: 'class9',
//       numberOfPassengers: 92
//     }
//   ]
  
//   beforeAll(() => {

//   })

//   it('called with correct params', () => {
//     const expectedParams = `https://swapi.co/api/vehicles`
//     window.fetch = jest.fn().mockImplementation(() => {
//       return Promise.resolve({
//         ok: true,
//         status: 200,
//         json: () => Promise.resolve({
//           mockVehicleData
//         })
//       })
//     })
//     getVehicleData(mockVehicleData)
//     expect(window.fetch).toBeCalledWith(expectedParams)
//   })

//   it('returns and object if the status code is ok', () => {
//     expect(addGrocery(mockGrocery)).resolves.toEqual({mockFilmData})
//   })


// })