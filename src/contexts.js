import React from 'react';

const Gc = React.createContext();
class Gcc extends React.Component {

  constructor(props) { 
    super(props);
    const now = new Date();
    this.state = {
      cobrado: false,
      alumno: {},
      nombre: "",
      items: [{concepto: "Cuota Social", mes: datos.meses[now.getMonth()], precio: datos.conceptos.filter(c=>c.nombre=="Cuota Social")[0].precio}]
    };
  }


  render() {
    return (
      <Gc.Provider
        value={{
          state: this.state,
          cobrar: (fecha, numero) => {
            datos.agregarRecibo({...this.state, fecha, numero});
            client.auth.loginWithCredential(new stitch.UserApiKeyCredential("pnty2vnbwU84txZ5sTITSrb9WAVHJJksqG2fq5IeYa5cxUzauNWLO62d1IIG4MSm"))
.then(authedId => {
     console.log(authedId);
  })

  .then(user => db.collection('coopapp').insertOne({owner_id: client.auth.user.id, ...this.state, fecha, numero}))
  .then(result => console.log("insert ", result))
            this.setState({
              cobrado: true
            });
          },
          nuevoRecibo: () => {
            this.setState({
              cobrado: false,
              alumno: {},
              nombre: "",
              items: [{concepto: "Cuota Social", precio: datos.conceptos.filter(c=>c.nombre=="Cuota Social")[0].precio}]
            });
          },
          nuevoItem: () => this.setState({items:this.state.items.concat({
            concepto: "Cuota Social", 
            mes: "Mar", 
            precio: datos.conceptos.filter(c=>c.nombre=="Cuota Social")[0].precio
          })}),
          quitarItem: (numero) => {
            this.setState({
              items:this.state.items.filter((item, index)=>{
                return index != numero
              })
            })
          },
          changers: {
            nombre: (nombre) => {
              this.setState({nombre});
            },
            alumno: ({codigo, nombre}) => {
              this.setState({alumno:{codigo, nombre}, nombre});
            },
            fecha: (fecha) => {
              this.setState({fecha});
            },
            numero: (numero) => {
              this.setState({numero});
            },
            acto: ({codigo, nombre}) => {
              this.setState({acto:{codigo, nombre}, nombre});
            },
            codigo: ({codigo, nombre}) => {
              this.setState({codigo:{codigo, nombre}, nombre});
            },
            concepto: (numero, concepto) => {
              this.setState({
                items:this.state.items.map((item, index) =>
                  numero == index 
                    ? {
                        ...item, 
                        concepto, 
                        precio: datos.conceptos.filter(c=>c.nombre==concepto)[0].precio
                      }
                    : item
                )
              });
            },
            mes: (numero, mes) => {
             
              this.setState({
                items:this.state.items.map((item, index) =>
                  numero == index ? {...item, mes} : item
                )
              });
            },
            tamaño: (numero, tamaño) => {
              this.setState({
                items:this.state.items.map((item, index) =>
                  numero == index 
                    ? {...item, tamaño, precio: datos.tamaños.filter(t=>t.medidas==tamaño)[0].precio} 
                    : item
                )
              });
            },
          }
        }}
      >
        {this.props.children}
      </Gc.Provider>
    );
  }
}

export {Gcc, Gc};