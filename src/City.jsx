import React from 'react';

import CityInfo from './CityInfo.jsx';

const City = ({ city }) => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const KEY = process.env.REACT_APP_KEY;

  React.useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {loading ? (
        <div className="city">
          <h1>Loading</h1>
        </div>
      ) : (
        <CityInfo data={data} />
      )}
    </>
  );
};

export default City;
