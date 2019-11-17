import React, { Component } from 'react';
import Header from "./components/Header"
import Filter from "./components/Filter"
import Listings from "./components/Listings"
import listingsData from "./components/data/listingsData.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Aslam",
      listingsData,
      city: "All",
      homeType: "All",
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData
    };

    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }

  change(event) {
    let name = event.target.name;
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
  }

  filteredData() {
    let newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorSpace >= this.state.min_floor_space &&
        item.floorSpace <= this.state.max_floor_space && item.rooms >=this.state.bedrooms
      );
    });

    if(this.state.city != 'All'){
      newData = newData.filter((item) => {
        return item.city === this.state.city
      })
    }

    if(this.state.homeType != 'All'){
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType
      })
    }

    this.setState({
      filteredData: newData
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

export default App;
