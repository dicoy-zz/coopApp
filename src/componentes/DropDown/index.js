import React from 'react';
import {uid} from '../../tools';

const DropDown = ({ color, nombre, value, numero, changer, opciones }) => {
  return (
    <div className="flex flex-column pt1 pr3">
      <label>{nombre}</label>
      <select value={value} onChange={e=>changer(numero, e.target.value)} className={`${color} w-100 mb3 f6 fw6 bb`}>
        {opciones.map(opcion => <option key={uid()}>{opcion}</option>)}
      </select>
    </div>
  );
};

export default DropDown;