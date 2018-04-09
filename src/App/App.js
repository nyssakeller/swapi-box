import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer.js';
import Controls from '../Controls/Controls.js';
import ScrollingText from '../ScollingText/ScrollingText.js';
import './App.css';
import {
  getPeopleDetails,
  getPlanetDetails,
  getVehicleDetails,
  getFilmDetails
} from '../apiHelper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: null,
      people: [],
      planets: [],
      vehicles: [],
      filmData: [],
      favorites: []
    };
  }

  async componentDidMount () {
  try{    
    const filmData = await getFilmDetails(`https://swapi.co/api/films`);
    this.setState({filmData});
  } catch (error) {
    console.log('error')
  }
  }

  getButtonClass = (category) => {
    this.setState({category}, () => {
      
      !localStorage[category] ? 
        this.getCorrectApi() : this.getFromLocalStorage();
    }); 
  }

  async getCorrectApi() {
    let data;
    const {category} = this.state;
    
    if (category === 'people') {
      data = await getPeopleDetails(`https://swapi.co/api/people`);
    } else if (category === 'planets') {
      data = await getPlanetDetails(`https://swapi.co/api/planets`);
    } else if (category === 'vehicles') {
      data = await getVehicleDetails(`https://swapi.co/api/vehicles`);
    } else {
      data = this.state.favorites;
    }

    this.setState({[category]: data}, () => {
      localStorage.setItem([category], JSON.stringify(data));
    });
  }
  
  getFromLocalStorage = () => {
    const {category} = this.state;
    let data = localStorage.getItem(category);
    
    data = [... JSON.parse(data)];
    this.setState({ [category]: data });
  } 

  setLocalStorage = (category, data) => {
    data = JSON.stringify(data);
    return localStorage.setItem(category, data);
  }

  favoriteCard = async(dataObj) => {
    const {category} = this.state;
    const favsArray = this.state.favorites;
    const match = this.state[category].find(card => card === dataObj);
    match.favoriteStatus = !match.favoriteStatus;
  
    const favorites = match.favoriteStatus ? 
      [...favsArray, match] : favsArray.filter(card => card !== dataObj);

    await this.setState({favorites});
    await this.setLocalStorage('favorites', this.state.favorites);
  }

  render() {
    const {category} = this.state;

    return (
      <div className="App">
        <header></header>
        <Controls 
          getButtonClass={this.getButtonClass}
          favorites={this.state.favorites} />

        {
          !category && this.state.filmData.length &&
          <ScrollingText filmData={this.state.filmData} />
        }
     

        {
          category &&
          <CardContainer 
            data={this.state[category]}
            favoriteCard={this.favoriteCard} />
        }

        {
          category === 'favorites' && !this.state.favorites.length && 
          <h1>you do not have any favorites</h1>
        }

      </div>
    );
  }
}

export default App;
