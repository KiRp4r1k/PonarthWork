import React from "react";

import CategoryReport from "../components/CategoryReport";
import AdminForm from "../components/AdminForm";

import Users from "../components/Users";
import SwitchAdmin from "../components/SwitchAdmin/";

const Admin = () => {
  const [activeFrom, setActiveForm] = React.useState(0);
  const [activeList, setActiveList] = React.useState(0);
  return (
    <div className="root-adm">
      <div className="user-content">
        <div className="header">
          <CategoryReport />
        </div>
        <SwitchAdmin
          value={activeFrom}
          value1={activeList}
          onChangeButtons={(i) => setActiveForm(i)}
          onChangeLists={(l) => setActiveList(l)}
        />
        {activeFrom ? (
          <AdminForm />
        ) : (
          <div className="user-container">
            <h4>Пользователи</h4>
            <div className="user-container__users">
              <Users value={activeList} lnum={(l) => setActiveList(l)} />
              <Users />
              <Users />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
