import React from "react";

import "./AdminForm.scss";

import DepButtons from "../DepButtons";

const AdminForm = () => {
    return (
        <div className="form__user">
            <div className="form--content">
                <input type="text" placeholder="ФИО" />
                <input type="text" placeholder="Роль" />
                <input type="text" placeholder="Номер телефона" />
                <input type="text" placeholder="Надежный пароль" />
                <input
                    type="number"
                    placeholder="Ставка (руб/литр)"
                    min="0"
                    max="100"
                    className="counter"
                />
                <DepButtons value={true} />
                <button className="save" type="submit">
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default AdminForm;
