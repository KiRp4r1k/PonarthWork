import React from "react";
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'


import "./Users.scss";

const Users = ({ value }) => {
  return (
    <div className={value === 1 ? "root-users limos" : "root-users"}>
      <div className="user_image"></div>
      <div className="name">
        <span>Ann li</span>
        {value === 0 && <span className="topics">2 topics</span>}
      </div>
      {value === 1 && <span className="moneys">2000</span>}
      <img src={edit} alt="pencil" className="pencil" />
      <img src={trash} alt="pencil" className="trash" />
    </div>
  );
};

export default Users;
