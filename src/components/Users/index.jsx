import React from "react";
import edit from '../../assets/edit.svg'
import trash from '../../assets/trash.svg'


import "./Users.scss";

const Users = ({ value, lnum }) => {
  //const [] = React.useState(0);
  return (
    <div className="root-users">
      <div className="user_image"></div>
      <div className="name">
        <span>Ann li</span>
        <span className="topics">2 topics</span>
      </div>
      {/* <span className="moneys">2000</span> */}
      <img src={edit} alt="pencil" className="pencil" />
      <img src={trash} alt="pencil" className="trash" />
    </div>
  );
};

export default Users;
