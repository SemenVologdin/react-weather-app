import React from 'react';
import Flags from 'country-flag-icons/react/3x2';

import CityCard from './CityCard.jsx';

const Country = ({ country }) => {
  const flag = country.icons;
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
