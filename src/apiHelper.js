export const fetchJson = async(apiUrl) => {
  try {
    const initialFetch = await fetch(apiUrl);
    const data = await initialFetch.json();
    return data;
  } catch(error) {
    throw new Error('error');
  }
}

export const getPeopleDetails = async(category) => {
  try { 
    const {results} = await fetchJson(category);

    const pendingPromises = results.map(async (person) => {
      const { name, homeworld, species, population } = person;
      const speciesData = await fetchJson(species);
      const homeworldData = await fetchJson(homeworld);
      
      return {
        name: person.name,
        description: 'Homeworld: ' + homeworldData.name,
        type: 'Species: ' + speciesData.name,
        number: 'Homeworld Population: ' + homeworldData.population,
        favoriteStatus: null
      }
    })
    return Promise.all(pendingPromises);
  } catch(error) {
    throw new Error('error')
  }

}

export const getPlanetDetails = async(category) => {
   try { 
    const {results} = await fetchJson(category);

    const pendingPromises = results.map(async (planet) => {
      const { name, terrain, climate, population, residents } = planet;
      const residentNames = await getPlanetResidents(residents);

      return {
        name: planet.name,
        description: 'Climate: ' + planet.climate,
        type: 'Terrain: ' + planet.terrain,
        number: 'Population: ' + planet.population,
        residents: 'residents: ' + residentNames.join(', '),
        favoriteStatus: null
      }
    })
    return Promise.all(pendingPromises);
  } catch(error) {
    throw new Error('error');
  }
}

const getPlanetResidents = (residents) => {
  const pendingPromises = residents.map(async (resident) => {
    const {name} = await fetchJson(resident);
    return name;
  })
  return Promise.all(pendingPromises);
}

export const getVehicleDetails = async(category) => {
  try {
    const {results} = await fetchJson(category);

    const pendingPromises = results.map(async (vehicle) => {
      const { name, model, vehicle_class, passengers } = vehicle;
     
      return {
        name: vehicle.name,
        description: 'Class: ' + vehicle.vehicle_class,
        type: 'Model: ' + vehicle.model,
        number: 'Number of Passengers: ' + vehicle.passengers,
        favoriteStatus: null
      }
    })
    return Promise.all(pendingPromises)
  } catch(error) {
    throw new Error('error');
  }
}

export const getFilmDetails = async(category) => {
  try {
    const {results} = await fetchJson(category)
    const pendingPromises = results.map(async (film) => {
      const { opening_crawl, title, release_date } = film;
     
      return {
        description: film.opening_crawl,
        title: film.title,
        date: release_date.film,
        favoriteStatus: null
      }
    })
    return Promise.all(pendingPromises);
  } catch (error) {
    throw new Error('error');
  }
}

