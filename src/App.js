import React, { Component } from 'react';
import RealEstate from "./components/realEstate"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Listings from "./components/Listings"
import listingsData from "./components/data/listingsData.js"


class App extends Component {
  constructor(){
    super()
    this.state ={
      name: 'Aslam',
      listingsData
    }
  }

  render(){
    console.log(this.state.listingsData)
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    );
  }
}

export default App;
