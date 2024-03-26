import React from 'react';
import './SwitchAdmin.scss';

const SwitchAdmin = ({ value, value1, onChangeLists, onChangeButtons }) => {
  const btns = ['Все', 'Добавить'];
  const lst = ['Контрагенты', 'Маркет', 'Банеры'];

  return (
    <div className='switch'>
      <div class="switch_list">
      {lst.map((value_lst, l) => (
        <button
          key={l}
          onClick={() => onChangeLists(l)}
          className={value1 === l ? 'list active' : 'list'}>
          {value_lst}
        </button>
      ))}
      </div>
    <div class="switch_button">
      {btns.map((value_btn, i) => (
        <button
          key={i}
          onClick={() => onChangeButtons(i)}
          className={value === i ? 'active_btn' : 'button'}>
          {value_btn}
        </button>
      ))}
    </div>
    </div>
  );
};

export default SwitchAdmin;
