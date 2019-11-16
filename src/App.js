import React, { Component } from 'react';
import Header from "./components/Header"
import Filter from "./components/Filter"
import Listings from "./components/Listings"
import listingsData from "./components/data/listingsData.js"


class App extends Component {
  constructor(){
    super()
    this.state ={
      name: 'Aslam',
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false
    }

    this.change = this.change.bind(this)
  }

  change(event){
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }

  render(){
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    );
  }
}

export default App;
