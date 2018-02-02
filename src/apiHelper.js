export const fetchJson = async(apiUrl) => {
    const initialFetch = await fetch(apiUrl);
    console.log(initialFetch)
    const data = await initialFetch.json();
    return data;
}

export  const getPeopleDetails = async(category) => {
    const {results} = await fetchJson(category);
  
    const pendingPromises = results.map(async (person) => {
      const { name, homeworld, species, population } = person;
      const speciesData = await fetchJson(species);
      const homeworldData = await fetchJson(homeworld);
      
      return {
        name: person.name,
        description: 'Homeworld: ' + homeworldData.name,
        type: 'Species: ' + speciesData.name,
        number: 'Homeworld Population: ' + homeworldData.population
      }
    })
    return Promise.all(pendingPromises);
  }

export  const getPlanetDetails = async(category) => {
    const {results} = await fetchJson(category);

    const pendingPromises = results.map(async (planet) => {
      const { name, terrain, climate, population, residents } = planet;
      const residentNames = await getPlanetResidents(residents);

      return {
        name: planet.name,
        description: 'Climate: ' + planet.climate,
        type: 'Terrain: ' + planet.terrain,
        number: 'Population: ' + planet.population,
        residents: 'residents: ' + residentNames.join(', ')
      }
    })
    return Promise.all(pendingPromises);
  }

  const getPlanetResidents = (residents) => {
    const pendingPromises = residents.map(async (resident) => {
      const residentData = await fetchJson(resident);
      return residentData.name;
    })
    return Promise.all(pendingPromises);
  }

export const getVehicleDetails = async(category) => {
    const {results} = await fetchJson(category);

    const pendingPromises = results.map(async (vehicle) => {
      const { name, model, vehicle_class, passengers } = vehicle;
     
      return {
        name: vehicle.name,
        description: 'Class: ' + vehicle.vehicle_class,
        type: 'Model: ' + vehicle.model,
        number: 'Number of Passengers: ' + vehicle.passengers
      }
    })
    return Promise.all(pendingPromises)
  }

  const getFilmDetails = (filmArray) => {
    const pendingPromises = filmArray.map(async (film) => {
      const { opening_crawl, title, release_date } = film;
     
      return {
        description: film.opening_crawl,
        title: film.title,
        date: release_date.film
      }
    })
    return Promise.all(pendingPromises);
  }



// export const cleanData = (data) => {
//   let cleanData = dataValues.map(value => {
//     return fetch(`https://swapi.co/api/${value}`)
//       .then(response => response.json())
//   })
//   console.log(Promise.all(data))
// }

// getData();

// const cleaner = (data) => {
//   const cleanData = {
//     name: data.name, 
//     description: data.populationOfHomeworld,
//     type: data.species 
//     // number: data.populationOfHomeworld
//   }
//   console.log(cleanData)
// }

// export default cleaner

// export const planetsCleaner = (data) => {
//   return {
//     name: data.name, 
//     description: data.homeworld || data.terrain,
//     type: data.species
//     // number: data.populationOfHomeworld
//   }
// }

// export const vehiclesCleaner = (data) => {
//   return {
//     name: data.name, 
//     description: data.terrain,
//     type: data.
//     // number: data.populationOfHomeworld
//   }
// }

// export const fetchApi = async(category) => {
//     const data = await fetchJson(`https://swapi.co/api/${category}`)
//     return data.results
    // if (category === 'people') {
    //   return getPeopleDetails(data.results);
    // } else if (category === 'planets') {
    //   return getPlanetDetails(data.results);
    // } else if (category === 'vehicles') {
    //   return getVehicleDetails(data.results)
    // } else if(category === 'films') {
    //   return getFilmDetails(data.results)
    // }

  // }
