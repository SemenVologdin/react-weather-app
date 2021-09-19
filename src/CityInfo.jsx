import React from 'react';

const CityInfo = ({ data }) => {
  return (
    <>
      <div className="city">
        <h3>{data.name}</h3>
        <div className="row">
          <div className="city__temp__title">Температура</div>
          <div className="city__temp__value">
            <h4>{(data.main.temp - 273.15).toFixed(2)}(°C)</h4>
          </div>
        </div>

        <div className="row small-text">
          <div>Влажность</div>
          <div>{data.main.humidity}%</div>
        </div>

        <div className="row small-text">
          <div>Скорость ветра</div>
          <div>{data.wind.speed}м\с</div>
        </div>
        <div className="row small-text">
          <div>Давление</div>
          <div>{((data.main.pressure * 760) / 1000).toFixed(2)}мм.рт.ст</div>
        </div>
      </div>
    </>
  );
};

export default CityInfo;
