import React from 'react';

const CityProps = ({ data, icon }) => {
  console.log(data);
  return (
    <>
      <h3>{data.name}</h3>
      <img width="80px" height="80px" src={icon.url} alt={data.weather[0].decription} />
      <ul className="city__list">
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Температура</span>
            <span>{(data.main.temp - 273.15).toFixed(2)}&nbsp;°C</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Влажность</span>&nbsp;
            <span>{data.main.humidity}&nbsp;%</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Скорость ветра</span>&nbsp;
            <span>{data.wind.speed}&nbsp;м\с</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Давление</span>&nbsp;
            <span>{((data.main.pressure * 760) / 1000).toFixed(2)}&nbsp;мм.рт.ст</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CityProps;
