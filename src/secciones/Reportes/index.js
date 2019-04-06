import React, {Fragment, useRef} from 'react';
import ReactToPrint from 'react-to-print';

import {Gcc, Gc} from '../../contexts';
import Editable from '../../componentes/Editable';
import Autocomplete from '../../componentes/Autocomplete';
import Concepto from '../../componentes/Concepto';
import {uid} from '../../tools';

class Ticket extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const NuevoRecibo = props => {

  const componentRef = useRef();
  const now = new Date();
  const fecha = `${
    ("0" + now.getDate()).slice(-2)} / ${
    datos.meses[now.getMonth()]} / ${
    now.getYear() - 100} `;
  const numero = `nro 0000 - ${("000"+datos.recibos.length).slice(-4)}`;
  return (
    <Gcc>
      <Gc.Consumer>
        { context => {
          const {nombre, alumno, items} = context.state;
          return (
          <Fragment>
            <div className="w-100 pb1 inline-flex items-center justify-between">
              <div className="ttu f6 fw9">Recibo</div>
              <Editable valor={fecha} className="ttu f6 fw9" changer={context.changers.fecha} />
              <Editable valor={numero} className="ttu f6 fw9" changer={context.changers.numero} />
            </div>
            <div className="flex flex-column pt3">
              <div className="flex flex-row items-end">
                <Autocomplete css="gold" nombre="Nombre" value={nombre} changers={context.changers} suggestions={datos.alumnos} />
                {alumno.nombre && <label className="fw9 f4">
                  {`${alumno.nombre
                  } - Sala ${datos.salas.filter(s => alumno.codigo[0]==s.codigo)[0].color
                  } - Turno ${alumno.codigo[1]=="m"?"Mañana":"Tarde"}`}
                </label>}
              </div>
              {items.map((c, i)=> <Concepto item={c} numero={i} quitarItem={context.quitarItem} changers={context.changers} key={uid()} />)}
              <button onClick={context.nuevoItem} className="br-pill grow self-center b w4 f4 gold bg-white b--white shadow-3">+</button>
            </div>
            <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end">
              $ {items.reduce((a, c)=>a+=c.precio,0)}
            </div>
            <div className="pt2 w-100 inline-flex items-center justify-end">
            {context.state.cobrado?
              <Fragment>
          <ReactToPrint
            trigger={() => 
            <button className="br-pill grow b f4 gold w4 bg-white b--white mr2 shadow-3">Imprimir</button>}
            content={() => componentRef.current}
          />
            <button onClick={context.nuevoRecibo}  className="br-pill grow b f5 h2 gold w4 bg-white b--white shadow-3">
              Nuevo Recibo
            </button>
            </Fragment>
          :
            <button onClick={() => {context.cobrar(fecha, numero)}}  className="br-pill grow b f4 gold w4 bg-white b--white shadow-3">
              Cobrar
            </button>}
          }
          </div>
            {context.state.cobrado?
          <Fragment>
          <h3>Comprobante</h3>
          <Ticket ref={componentRef}>
            <div className="overflow-hidden items-center flex flex-column black h-100 h5 pa4">
              <img src="dist/logo.jpg" className="z-0 o-40 h-100 absolute" />
              <div className="w-50 pb1 bb inline-flex items-center justify-between">
                <p className="f6 fw9 w5">Asociación Cooperadora del jardin Nº 902 Ricardo Gutiérrez</p>
                <div className="flex flex-column">
                  <div className="ttu f6 fw9">{fecha}</div>
                  <div className="ttu f6 fw9">{`Recibo nro: ${numero}`}</div>
                </div>
              </div>
              <p className="relative z-1 f6">Recibi de la familia de {nombre} </p>
              <p className="relative z-1 f6">La suma de $ {items.reduce((a, c)=>a+=c.precio,0)} </p>
              <p className="relative z-1 f6">en concepto de:</p>
              <ul>
                {items.map(c=> <li className="relative z-1 f6" key={uid()}>{c.concepto}{c.concepto=="Cuota Social"?` de ${c.mes}`:""}{` $ ${c.precio}`}</li>)}
              </ul>

            </div>
          </Ticket>
          </Fragment>
          :''}
        </Fragment>
      )}}
    </Gc.Consumer>
  </Gcc>
  );
};

export default NuevoRecibo; 