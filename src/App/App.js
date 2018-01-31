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
      buttonClass: '',
      data: [],
      filmData: [],
      favorites: []
    }
  }


  async componentDidMount () {
    // const filmData = await getFilmData();
    // this.setState({filmData}, () => {
    //   console.log(this.state.filmData)
    // })
  }

  async getCorrectApi() {
    let data;
    if(this.state.buttonClass === 'people') {
      data = await getPeopleData();
    } else if(this.state.buttonClass === 'planets') {
      data = await getPlanetData();
    } else if(this.state.buttonClass === 'vehicles') {
      data = await getVehicleData();
    } else {
      data = this.state.favorites
    }

    this.setState({data}, () => {
      console.log('')
    })
  }

  getButtonClass = (className, button) => {
    button.classList.toggle('active')
    console.log(button)
    this.setState({buttonClass: className}, () => 
      this.getCorrectApi()
    
    ) 

  }

  favoriteCard = (card) => {
    let favorites = [];
    console.log(card)
    card.classList.toggle('favorite')
    console.log(favorites)
  }

  render() {
    return (
      <div className="App">
        <header>
        
        </header>
        <Controls getButtonClass={this.getButtonClass}/>

        {
          this.state.filmData.length &&
          <ScrollingText filmData={this.state.filmData} />
        }

  
        {
          this.state.data.length &&
          <CardContainer 
            data={this.state.data}
            favoriteCard={this.favoriteCard}
          />
        }
      </div>
    );
  }
}

export default App;
