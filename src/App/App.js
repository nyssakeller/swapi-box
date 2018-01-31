import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer.js';
import Controls from '../Controls/Controls.js';
import './App.css';
import {
  getPeopleData,
  getPlanetData,
  getVehicleData
} from '../apiHelper.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonClass: '',
      data: [],
      peopleData: []
    }
  }

  // async fetchApi() {
  //   let initial = await fetch(`https://swapi.co/api/${this.state.buttonClass}/`)
  //   let { url } = await initial.json()
  //   let data = await this.fetchSpecies(url)
  //   debugger;
  //   // response => response.json())
  //   //   .then(data => this.setState({ data: data.results }, () => this.cleanData())) 
  //     // .then(this.cleaner)
  // }

  // fetchSpecies() {

  // }

  componentDidMount () {
    getVehicleData();
  }

  // cleanData () {
  //     this.state.data.map(person => {
  //       fetch(person.species)
  //         .then(data => this.setState({peopleData}))
  //     })
  // }

  async getCorrectApi() {
    let data;
    if(this.state.buttonClass === 'people') {
      data = await getPeopleData()
    } else if(this.state.buttonClass === 'planets') {
      data = await getPlanetData()
    } 
    //else {
    //   const data = getVehicleData()
    // }

    this.setState({data}, () => {
      console.log(this.state.data)
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
          !this.state.data.length &&
          <h1>Category Select You Will</h1>
        }
        {
          this.state.data.length &&
          <CardContainer data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
