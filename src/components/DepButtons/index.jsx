import React from "react";
import "./dep_buttons.css";

const DepButtons = ({ value }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const OnClickBtn = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="buttons_block">
            <div className="first_column">
                <button
                    onClick={() => OnClickBtn(1)}
                    className={
                        activeIndex === 1 ? "active_long_btn" : "long_button"
                    }
                >
                    Логистика
                </button>
                <button
                    onClick={() => OnClickBtn(2)}
                    className={
                        activeIndex === 2 ? "active_short_btn" : "short_button"
                    }
                >
                    Админ
                </button>
            </div>
            <div className="second_column">
                <button
                    onClick={() => OnClickBtn(3)}
                    className={
                        activeIndex === 3 ? "active_short_btn" : "short_button"
                    }
                >
                    Офис
                </button>
                <button
                    onClick={() => OnClickBtn(4)}
                    className={
                        activeIndex === 4 ? "active_long_btn" : "long_button"
                    }
                >
                    Производство
                </button>
            </div>
        </div>
    );
};

export default DepButtons;
