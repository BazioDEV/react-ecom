/* eslint-disable no-template-curly-in-string */
import React from 'react';
// eslint-disable-next-line
import Benz from './../../assets/Benz.jpg';
// eslint-disable-next-line
import Audi from './../../assets/Audi.png';
// eslint-disable-next-line
import BMW from './../../assets/BMW.jpg';
// eslint-disable-next-line
import Toyota from './../../assets/Toyota.png';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
          backgroundImage: `url(${Benz})`
        }}
        >
        <a>
          Mercedez Benz
        </a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Audi})`
        }}
      >
        <a>
          Audi
        </a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${BMW})`
        }}
      >
        <a>
          BMW
        </a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${Toyota})`
        }}
      >
        <a>
          Toyota
        </a>
      </div>
      </div>
    </div>
  );
};

export default Directory;
