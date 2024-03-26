import React from 'react';

import './Users.scss';

const Users = () => {
  return (
    <div className="root-users">
      <div className="user">
        <div className="user__logo">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
            <g opacity="100%">
              <ellipse
                cx="12"
                cy="12"
                rx="12"
                ry="12"
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
        </div>
        <input type="text" value="Ann Li" />
        <input type="text" value={20000} />
        <button type="submit">
          <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 24 24"
              fill="#7b7b7b"
              x="0"
              y="0"
              opacity="100%">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
            <defs>
              <filter
                id="filter_dshadow_10_0_2_0000001a"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="bg-fix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="alpha"></feColorMatrix>
                <feOffset dx="0" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                <feComposite in2="alpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="bg-fix"
                  result="bg-fix-filter_dshadow_10_0_2_0000001a"></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="bg-fix-filter_dshadow_10_0_2_0000001a"
                  result="shape"></feBlend>
              </filter>
            </defs>
          </svg>
        </button>
        <button type="submit">
          <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="10"
              height="10"
              fill="#7e7e7e"
              x="0"
              y="0"
              opacity="100%">
              <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
            </svg>
            <defs>
              <filter
                id="filter_dshadow_0_0_0_00000014"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse">
                <feFlood floodOpacity="0" result="bg-fix"></feFlood>
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
        </button>
      </div>
    </div>
  );
};

export default Users;
