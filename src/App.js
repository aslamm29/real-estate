import React from 'react';
import RealEstate from "./components/realEstate"
import Header from "./components/Header"
import Filter from "./components/Filter"
import Listings from "./components/Listings"


function App() {
  return (
    <div>
      <Header />
      <section id="content-area">
        <Filter />
        <Listings />
      </section>
    </div>
  );
}

export default App;
