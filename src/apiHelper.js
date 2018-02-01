  const fetchJson = async(apiUrl) => {
    const initialFetch = await fetch(apiUrl)
    return initialFetch.json();
  }

  export const getPeopleData = async() => {
    const peopleData = await fetchJson(`https://swapi.co/api/people/`);
    return getPeopleDetails(peopleData.results);
  }

  const getPeopleDetails = (peopleArray) => {
    const pendingPromises = peopleArray.map(async (person) => {
      const { name, homeworld, species, population } = person
      let speciesData = await fetchJson(species);
      let homeworldData = await fetchJson(homeworld)
      
      return {
        name: person.name,
        description: homeworldData.name,
        type: speciesData.name,
        number: homeworldData.population
      }
    })
    return Promise.all(pendingPromises)
  }

  export const getPlanetData = async() => {
    const planetData = await fetchJson(`https://swapi.co/api/planets/`);
    return getPlanetDetails(planetData.results) 
  }

  const getPlanetDetails = (planetArray) => {
    const pendingPromises = planetArray.map(async (planet) => {
      const { name, terrain, climate, population, residents } = planet

      return {
        name: planet.name,
        description: planet.climate,
        type: planet.terrain,
        number: planet.population
      }
    })
    return Promise.all(pendingPromises)
  }

  export const getVehicleData = async() => {
    const vehicleData = await fetchJson(`https://swapi.co/api/vehicles/`);
    return getVehicleDetails(vehicleData.results) 
  }

  const getVehicleDetails = (vehicleArray) => {
    const pendingPromises = vehicleArray.map(async (vehicle) => {
      const { name, model, vehicle_class, passengers } = vehicle;
     
      return {
        name: vehicle.name,
        description: vehicle.vehicle_class,
        type: vehicle.model,
        number: vehicle.passengers
      }
    })
    return Promise.all(pendingPromises)
  }

  export const getFilmData = async() => {
    const filmData = await fetchJson(`https://swapi.co/api/films/`);
    return getFilmDetails(filmData.results) 
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
  // fetchBios(arrayOfBios) {
  //   const unresolvedPromises = arrayOfBios.map(async (staffMember) => {
  //     let initialFetch = await fetch(staffMember.info)
  //     let bio = await initialFetch.json()
  //     return {...staffMember, ...bio}
  //   })



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
