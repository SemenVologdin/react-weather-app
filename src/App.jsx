import React from 'react';
// import axios from 'axios';

import City from './City';

function App() {
  return (
    <div className="wrapper">
      <h1>Weather App 🌅</h1>
      <div className="country">
        <h1>Россия</h1>
        <div className="cities">
          <City city="Moscow" />
          <City city="Kazan" />
          <City city="Ekaterinburg" />
        </div>
      </div>
    </div>
  );
}

export default App;
