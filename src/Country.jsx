import React from 'react';

import CityCard from './CityCard.jsx';

const Country = ({ country }) => {
  return (
    <>
      <div className="country">
        <h2>{country.name}&nbsp;</h2>

        <div className="row">
          {country.cities.map((item) => {
            return <CityCard city={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Country;
