import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer.js';
import Controls from '../Controls/Controls.js';
import ScrollingText from '../ScollingText/ScrollingText.js'
import './App.css';
import {
  getPeopleData,
  getPlanetData,
  getVehicleData,
  getFilmData
} from '../apiHelper.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonClass: null,
      people: [],
      planets: [],
      vehicles: [],
      filmData: [],
      favorites: [],
      active: ''
    }
  }


  async componentDidMount () {
    // const filmData = await getFilmData();
    // this.setState({filmData}, () => {
    //   console.log(this.state.filmData)
    // })
  }
  getFromLocalStorage = () => {
      let category = this.state.buttonClass
      let data = localStorage.getItem(this.state.buttonClass)
      
      data = [... JSON.parse(data)]
      this.setState({ [category]: data })
  } 

  async getCorrectApi() {
    let data;
    let category = this.state.buttonClass;
    
    if (category === 'people') {
      data = await getPeopleData();
    } else if(category === 'planets') {
      data = await getPlanetData();
    } else if(category === 'vehicles') {
      data = await getVehicleData();
    } else {
      data = this.state.favorites
    }

    this.setState({[category]: data}, () => {
      localStorage.setItem([category], JSON.stringify(data))
    });
  }

  getButtonClass = (className, button) => {
    this.setState({buttonClass: className}, () => {
      !localStorage[this.state.buttonClass] ? 
        this.getCorrectApi() : this.getFromLocalStorage()
    }) 
  }

  favoriteCard = (card, id) => {
    let category = this.state[this.state.buttonClass];
    const match = category.find( card => card.name === id )
    const favorites = [...this.state.favorites, match]
    
    this.setState({favorites}, () => {
      card.classList.toggle('favorite')
    })
  }

  render() {
    let category = this.state.buttonClass;

    return (
      <div className="App">
        <header></header>
        <Controls getButtonClass={this.getButtonClass}/>

        {
          this.state.buttonClass &&
          <CardContainer 
            data={this.state[category]}
            favoriteCard={this.favoriteCard} />
        }

      </div>
    );
  }
}

export default App;
