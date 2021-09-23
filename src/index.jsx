import React from 'react';

import Country from './Country';
import data from './data.js';

const Index = () => {
  return (
    <>
      <div className="wrapper">
        <div className="title">
          <h1>Weather App ⛅</h1>
          <h3>
            by&nbsp;
            <a href="https://github.com/SemenVologdin" target="_blank">
              @SemenVologdin
            </a>
          </h3>
        </div>

        <Country country={data.Russia} />
        <Country country={data.USA} />
        <Country country={data.Israel} />
        <Country country={data.Argentina} />
        <Country country={data.Australia} />
        <Country country={data.Germany} />
        <Country country={data.Finland} />
        <Country country={data.Salvador} />
      </div>
    </>
  );
};

export default Index;
