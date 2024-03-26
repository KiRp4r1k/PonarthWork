import React from 'react';
import FondList from '../components/FondList';
import CategoryReport from '../components/CategoryReport';

const Fonds = () => {
  return (
    <div className="fonds">
      <div className="fonds-header">
        <CategoryReport />
      </div>
      <div className="content_sales">
        <div className="sales">
          <div className="title_date_box">
            <h1 className="title">Объем продаж</h1>
            <h2 className="date">18.01.2024</h2>
          </div>
          <h3 className="percent">+10%</h3>
          <h2 className="capasity">165 000 л</h2>
        </div>

        <div className="table_titles">
          <div className="table_title">фонд</div>
          <div className="table_title">р/л</div>
          <div className="table_title">накопления</div>
        </div>
        <FondList />
        <hr />
        <FondList />
        <hr />
        <FondList />
      </div>
    </div>
  );
};

export default Fonds;
