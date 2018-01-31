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
      filmData: []
    }
  }


  async componentDidMount () {
    const filmData = await getFilmData();
    this.setState({filmData}, () => {
      console.log(this.state.filmData)
    })
  }

  async getCorrectApi() {
    let data;
    if(this.state.buttonClass === 'people') {
      data = await getPeopleData();
    } else if(this.state.buttonClass === 'planets') {
      data = await getPlanetData();
    } else if(this.state.buttonClass === 'vehicles') {
      data = await getVehicleData();
    }

    this.setState({data}, () => {
      localStorage.setItem(this.state.buttonClass, this.state.data)
    })
  }

  getButtonClass = (className) => {
    this.setState({buttonClass: className}, () => 
      this.getCorrectApi()
    
    ) 

  }

  render() {
    return (
      <div className="App">
        <header>
        
        </header>
        <Controls getButtonClass={this.getButtonClass}/>


        
  
        {
          this.state.data.length &&
          <CardContainer data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
