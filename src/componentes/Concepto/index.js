import datos from '../../datos';
import React, {Fragment} from 'react';
import DropDown from '../DropDown';

const Concepto = ({numero, changers, item, quitarItem}) => {
  return (
    <div className="flex flex-row items-center pt3">
      <button onClick={()=>quitarItem(numero)} className="br-pill b f4 gold w2 grow h2 mr3 bg-white b--white shadow-3">-</button>
      <DropDown 
        color="gold" nombre="Concepto" 
        numero={numero} 
        value={item.concepto} 
        changer={changers.concepto} 
        opciones={datos.conceptos.map(c=>c.nombre)} 
      />
      {
        item.concepto == 'Cuota Social'
        ? <DropDown color="gold" nombre="Mes" numero={numero} value={item.mes} changer={changers.mes} opciones={datos.meses.slice(2)} />
        : ''
      }
      { 
        item.concepto.includes('Foto')
        ? (<Fragment>
            <Campo css="gold w-50" nombre="Acto" numero={numero} changer={changers.acto} />
            <Campo css="gold w-50" nombre="Codigo" numero={numero} changer={changers.codigo} />
          </Fragment>)
        : ''
      }
      <div className="flex flex-column pr3">
        <label>Precio</label>
        <label>${datos.conceptos.filter(c=>c.nombre==item.concepto)[0].precio}</label>
      </div>
    </div>
  );
};

export default Concepto;