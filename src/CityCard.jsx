import React from 'react';

import CityProps from './CityProps';
import './loader.scss';

const CityCard = ({ city }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const KEY = process.env.REACT_APP_KEY;

  React.useEffect(() => {
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.en}&appid=${KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="city">
        <h3>{city.ru}</h3>
        {loading ? <div class="lds-dual-ring"></div> : <CityProps data={data} />}
      </div>
    </>
  );
};

export default CityCard;
