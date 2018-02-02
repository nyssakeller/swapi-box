export const fetchJson = async(apiUrl) => {
    const initialFetch = await fetch(apiUrl)
    return await initialFetch.json();
}

export const fetchApi = async(category) => {
    const data = await fetchJson(`https://swapi.co/api/${category}`)
    
    if (category === 'people') {
      return getPeopleDetails(data.results);
    } else if (category === 'planets') {
      return getPlanetDetails(data.results);
    } else if (category === 'vehicles') {
      return getVehicleDetails(data.results)
    } else if(category === 'films') {
      return getFilmDetails(data.results)
    }

  }

  const getPeopleDetails = (peopleArray) => {
    console.log(peopleArray)
    const pendingPromises = peopleArray.map(async (person) => {
      const { name, homeworld, species, population } = person
      let speciesData = await fetchJson(species);
      let homeworldData = await fetchJson(homeworld)
      
      return {
        name: person.name,
        description: 'Homeworld: ' + homeworldData.name,
        type: 'Species: ' + speciesData.name,
        number: 'Homeworld Population: ' + homeworldData.population
      }
    })
    return Promise.all(pendingPromises)
  }

  const getPlanetDetails = (planetArray) => {
    const pendingPromises = planetArray.map(async (planet) => {
      const { name, terrain, climate, population, residents } = planet
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

  const getVehicleDetails = (vehicleArray) => {
    const pendingPromises = vehicleArray.map(async (vehicle) => {
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
    return Promise.all(pendingPromises)
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
