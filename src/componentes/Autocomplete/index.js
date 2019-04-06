import {Gcc, Gc} from '../../contexts';
import React from 'react';
import {uid} from '../../tools';
import Campo from '../Campo';

const Autocomplete = ({css, nombre, changers, suggestions, value}) => {
  return (
    <Gc.Consumer>
      { context => (
        <div className="flex flex-column w-30">
          <Campo css={css} nombre={nombre} value={value} onChange={e=>changers.nombre(e.target.value)}  />
          <div className={`flex flex-column bg-white br3 pr3 ${css}`}>
            {(()=>{
              console.log(context.state.nombre);
              return context.state.nombre && suggestions
                .filter(s => s.nombre.toLowerCase().indexOf(context.state.nombre.toLowerCase())!=-1 && context.state.nombre.toLowerCase() != s.nombre.toLowerCase())
                .map(s => <button key={uid()} onClick={()=>changers.alumno(s)} className="br-pill b f4 white mh3 mv2 w-auto bg-gold b--gold shadow-3">{s.nombre}</button>)
            })()
            }
          </div>
        </div>
      )}
    </Gc.Consumer>
  );
}

export default Autocomplete;