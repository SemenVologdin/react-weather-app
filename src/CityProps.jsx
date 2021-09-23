import React from 'react';

const CityProps = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="city__list">
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Температура</span>&nbsp;
            <span>{(data.main.temp - 273.15).toFixed(2)}(°C)</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Влажность</span>&nbsp;
            <span>{data.main.humidity}%</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Скорость ветра</span>&nbsp;
            <span>{data.wind.speed}м\с</span>
          </div>
        </li>
        <li>
          <div className="city__prop">
            <span className="city__prop__title">Давление</span>&nbsp;
            <span>{((data.main.pressure * 760) / 1000).toFixed(2)}мм.рт.ст</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default CityProps;
