import React from 'react';

import './CategoryReport.scss';

import parishes from './images/parishes.png';
import cookings from './images/cooking.png';
import drain from './images/drain.png';
import delivery from './images/delivery.png';

const CategoryReport = () => {
  return (
    <div className="root-category">
      <ul className="category">
        <li className="category__items">
          <a href="">
            <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
              <g opacity="100%">
                <ellipse
                  cx="24"
                  cy="24"
                  rx="24"
                  ry="24"
                  fill="#c2c2c2"
                  filter="url(#filter_dshadow_0_0_0_00000014)"></ellipse>
              </g>
              <defs>
                <filter
                  id="filter_dshadow_0_0_0_00000014"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse">
                  <feFlood flood-opacity="0" result="bg-fix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="alpha"></feColorMatrix>
                  <feOffset dx="0" dy="0"></feOffset>
                  <feGaussianBlur stdDeviation="0"></feGaussianBlur>
                  <feComposite in2="alpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="bg-fix"
                    result="bg-fix-filter_dshadow_0_0_0_00000014"></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="bg-fix-filter_dshadow_0_0_0_00000014"
                    result="shape"></feBlend>
                </filter>
              </defs>
            </svg>
            Ярошук
          </a>
        </li>
        <li className="category__items">
          <a href="">
            <img src={parishes} alt="" />
            Приходы
          </a>
        </li>
        <li className="category__items">
          <a href="">
            <img src={cookings} alt="" />
            Варки
          </a>
        </li>
        <li className="category__items">
          <a href="">
            <img src={drain} alt="" />
            Сливы
          </a>
        </li>
        <li className="category__items">
          <a href="">
            <a href="">
              <img src={delivery} alt="" />
              Выдачи
            </a>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoryReport;
