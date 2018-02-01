import { getFilmData } from './apiHelper.js';
import { getFilmDetails } from './apiHelper.js';

let mockFilm;
let mockFilms;

beforeEach(() => {
  mockFilm = {name: 'Attack of the Clones', year: '03'}
  mockFilms = [
    {name: 'Attack of the Clones', year: '03'},
    {name: 'A New Hope', year: '77'}
  ]
})

describe('getFilmData', () => {
  it('fetch is called with the correct params', () => {
    const expectedParams = 'https://swapi.co/api/films'
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve({
        filmData: mockFilms
      })
    })
  })
    
    expect(window.fetch).toBeCalledWith(expectedParams)
  })
}) 