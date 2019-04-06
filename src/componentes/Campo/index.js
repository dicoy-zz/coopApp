import React from 'react';
const Campo = ({ css, nombre, onChange, value }) => {
  return (
    <div className="flex flex-column pt1 pr3">
      <label>{nombre}</label>
      <input onChange={onChange}  value={value} className={`${css} f6 fw6 bb bw-3 bg`} />
    </div>
  );
};

export default Campo;