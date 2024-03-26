import React from 'react';
import './FondList.scss';

const FondElem = () => {
  return (
    <div>
      <div className="elem">
        <img src="./fond_icon.svg" alt="fond_icon" className="fond_icon" />
        <div className="fond_name">ФОТ</div>
        <input type="number" min="0" max="100" className="counter" />
        <div className="accums">-$1000</div>
      </div>
    </div>
  );
};

export default FondElem;
