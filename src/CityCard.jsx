import React from 'react';

import CityProps from './CityProps';
import './loader.scss';

const CityCard = ({ city }) => {
  const [data, setData] = React.useState({});
  const [icon, setIcon] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const KEY = process.env.REACT_APP_KEY;

  React.useEffect(() => {
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&lang=ru`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          fetch(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
            .then((response) => response)
            .then((icon) => {
              setIcon(icon);
              setLoading(false);
            });
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <div className="city">
        {loading ? <div className="lds-dual-ring"></div> : <CityProps data={data} icon={icon} />}
      </div>
    </>
  );
};

export default CityCard;
