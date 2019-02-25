const {
  HashRouter,
  Switch,
  Route,
  IndexRoute,
  NavLink,
  hashHistory
} = ReactRouterDOM;
const { render } = ReactDOM;
const Fragment = React.Fragment;

//funciones de ayuda
const datos = {
  agregar: (nombre, valor) => {
    datos[nombre] = valor;
    localStorage.setItem(nombre, JSON.stringify(valor));
  },
  recibos:{
    agregar:({codigo, conceptos}) => {
      datos.agregar('recibos', datos.recibos.concat({codigo, conceptos}))
    }
  },
  nuevaTabla: (nombre) => {
    datos.agregar(nombre, valor);
  }
};

const copyStyles = (sourceDoc, targetDoc) => {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    if (styleSheet.cssRules) { // true for inline styles
      const newStyleEl = sourceDoc.createElement('style');

      Array.from(styleSheet.cssRules).forEach(cssRule => {
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) { // true for stylesheets loaded from a URL
      const newLinkEl = sourceDoc.createElement('link');

      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}

const uid = (() => {
  let i = 0;
  return () => {
    return i++;
  };
})();

//datos
datos.agregar("homeBoxes", [
  { box: "alumnos", size: "SmallBox" },
  { box: "pedidos", size: "SmallBox" },
  { box: "usuarios", size: "SmallBox" },
  { box: "nuevoRecibo", size: "BigBox" }
]);
datos.agregar("meses", [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic"
]);
datos.agregar("conceptos", [
  {nombre:"Cuota Social", precio: 100},
  {nombre:"Materiales", precio: 600},
  {nombre:"Emergencias", precio: 200},
  {nombre:"Foto 15 x 20", precio: 10},
  {nombre:"Foto 20 x 30", precio: 20},
  {nombre:"Foto llavero", precio: 30},
  {nombre:"Rifa", precio: 10},
  {nombre:"Extraordinaria", precio: 100},
  {nombre:"Donaciones", precio: 100}
]);
datos.agregar("salas", [
  {codigo: "s", color: "Rosa"},
  {codigo: "a", color: "Amarilla"},
  {codigo: "c", color: "Celeste"},
  {codigo: "j", color: "Roja"},
  {codigo: "v", color: "Verde"}
]);
datos.agregar("alumnos", [
  {nombre:'ANTONIA ARNESTO', codigo: 'st2'},
  {nombre:'MILAGROS BELLO', codigo: 'st3'},
  {nombre:'DELFINA BRANDOLINI', codigo: 'st4'},
  {nombre:'GIULIANA B. COLMAN PELAYTAY', codigo: 'st5'},
  {nombre:'JUANA GARCIA NAVARRO', codigo: 'st6'},
  {nombre:'MILENA HASSAN BRINGIOTTI', codigo: 'st7'},
  {nombre:'LUPE LEZCANO RANDAZZO', codigo: 'st8'},
  {nombre:'NOELIA LOPEZ LARA', codigo: 'st9'},
  {nombre:'MILAGROS MORETTI PERALTA', codigo: 'st10'},
  {nombre:'ITHIEL PARISI', codigo: 'st11'},
  {nombre:'CATALINA SERENO', codigo: 'st12'},
  {nombre:'THIAGO AVALOS', codigo: 'st13'},
  {nombre:'LUCIANO BASILE MALDONADO', codigo: 'st14'},
  {nombre:'LEON BENJAMIN DUARTE ', codigo: 'st15'},
  {nombre:'FELIPE ILLAILI', codigo: 'st16'},
  {nombre:'ALEJO JALAF FERNANDEZ', codigo: 'st17'},
  {nombre:'FABRIZIO NAVARRO TASSO', codigo: 'st18'},
  {nombre:'AARON DIEGO COLIGUANTE', codigo: 'sm1'},
  {nombre:'VALENTIN DE LA SERNA', codigo: 'sm2'},
  {nombre:'VICENTE ENCINA ROLDAN', codigo: 'sm3'},
  {nombre:'OLIVER JUAREZ', codigo: 'sm4'},
  {nombre:'SEBASTIAN POLEGZUK', codigo: 'sm5'},
  {nombre:'NICOLAS TORRES', codigo: 'sm6'},
  {nombre:'SOFIA ABDALA LASSA', codigo: 'sm7'},
  {nombre:'GUADALUPE ALGAMIZ', codigo: 'sm8'},
  {nombre:'MALENA JAZMIN BAEZ', codigo: 'sm9'},
  {nombre:'AILIN BALOR DALISSANDRO', codigo: 'sm10'},
  {nombre:'MARTINA BERON', codigo: 'sm11'},
  {nombre:'CLARITA CRISTALDO', codigo: 'sm12'},
  {nombre:'JOAQUINA DOMINGUEZ OLIV.', codigo: 'sm13'},
  {nombre:'JULIANA FERNANDEZ IP.', codigo: 'sm14'},
  {nombre:'MARTINA LOPEZ PAREDES', codigo: 'sm15'},
  {nombre:'EMILIA MAMPRIN', codigo: 'sm16'},
  {nombre:'CONSTANZA PAZ MERLO RUOFF', codigo: 'sm17'},
  {nombre:'OLIVIA SORRENTI', codigo: 'sm18'},

  {nombre:'ANGEL AKIKE', codigo: 'am1'},
  {nombre:'FABRIZIO ARIZA', codigo: 'am2'},
  {nombre:'BASTIAN AYALA', codigo: 'am3'},
  {nombre:'BAUTISTA CASCO', codigo: 'am4'},
  {nombre:'FIDEL ENRIQUE FERNANDEZ', codigo: 'am5'},
  {nombre:'JANO MAMPRIN', codigo: 'am6'},
  {nombre:'AITHAN ANDRES MACHUCA', codigo: 'am7'},
  {nombre:'BAUTISTA MARSILI MORE', codigo: 'am8'},
  {nombre:'CIRO MENDOZA', codigo: 'am9'},
  {nombre:'FELIPE SIMON MERLO RUOFF', codigo: 'am10'},
  {nombre:'VALENTINO MORETTA', codigo: 'am11'},
  {nombre:'LAUTARO PEREZ', codigo: 'am12'},
  {nombre:'SANTINO SIMON QUINTANS', codigo: 'am13'},
  {nombre:'DANTE SEPPIA', codigo: 'am14'},
  {nombre:'DANTE MANUEL VERA', codigo: 'am15'},
  {nombre:'FELIPE VIGGIANO', codigo: 'am16'},
  {nombre:'MALENA FRANCO', codigo: 'am17'},
  {nombre:'MARIA GUADALUPE ALBORNOZ', codigo: 'am18'},
  {nombre:'OLIVIA BARRANQUERO', codigo: 'am19'},
  {nombre:'GUILLERMINA GONZALEZ ', codigo: 'am20'},
  {nombre:'ALMA HIDALGO', codigo: 'am21'},
  {nombre:' MANDARADONI TOBAR GIULIA', codigo: 'am22'},
  {nombre:'AMBAR JULIETA MORE', codigo: 'am23'},
  {nombre:'LIBERTAD MORENO RICHIERI', codigo: 'am24'},
  {nombre:'ANA VALENTINA RODRIGUEZ ', codigo: 'am25'},
  {nombre:'CONSTANZA MARINA SOSA', codigo: 'am26'},
  {nombre:'AMBAR FRANCESCA SOSA SANCHEZ', codigo: 'am27'},
  {nombre:'NARELA YUNES FRANCO', codigo: 'am28'},
  {nombre:'ISABELA ESPOSITO', codigo: 'am29'},
  {nombre:'BAUTISTA DOMINGO ALI', codigo: 'at1'},
  {nombre:'MATEO JOSE AMARILLO', codigo: 'at2'},
  {nombre:'ELISEO BALZAROTTI', codigo: 'at3'},
  {nombre:'SIMON BIGGIOTTI', codigo: 'at4'},
  {nombre:'IGNACIO BUSQUETS STRAUBS', codigo: 'at5'},
  {nombre:'AGUSTIN CARRION', codigo: 'at6'},
  {nombre:'IGNACIO CURRA', codigo: 'at7'},
  {nombre:'LEON FERNANDEZ CASCO', codigo: 'at8'},
  {nombre:'TOMAS GIMENES', codigo: 'at9'},
  {nombre:'ROMEO LEON GONZALEZ ', codigo: 'at10'},
  {nombre:'PEDRO IGNACIO JONES', codigo: 'at11'},
  {nombre:'IAN DEMIR LEDESMA', codigo: 'at12'},
  {nombre:'VALENTIN MASSIMINO SOLOMITA', codigo: 'at13'},
  {nombre:'FRANCISCO PIEDRABUENA PEREZ', codigo: 'at14'},
  {nombre:'PEDRO SANCHEZ', codigo: 'at15'},
  {nombre:'FRANCISCO SANCHEZ', codigo: 'at16'},
  {nombre:'FLORENCIA CAPELLETTI', codigo: 'at17'},
  {nombre:'DULCE MARIA DE BONO SEGUNDO', codigo: 'at18'},
  {nombre:'SOL NAIARA DUARTE JAIMES', codigo: 'at19'},
  {nombre:'AMANDA GAJARDO DOMINGUEZ', codigo: 'at20'},
  {nombre:'JULIETA GONZALEZ ACEVEDO', codigo: 'at21'},
  {nombre:'JULIA INES LABORDE ', codigo: 'at22'},
  {nombre:'CATALINA MILAGROS LICITRA', codigo: 'at23'},
  {nombre:'CATALINA LOPEZ', codigo: 'at24'},
  {nombre:'AZUL VICTORIA MACCHI', codigo: 'at25'},
  {nombre:'BRISA MILAGROS MANSILLA', codigo: 'at26'},
  {nombre:'DELFINA MERLO', codigo: 'at27'},
  {nombre:'LIBERTAD MAURI CALOS', codigo: 'at28'},

  {nombre:'VALENTIN ALGAMIZ', codigo: 'am1'},
  {nombre:'RAMIRO AVILA LUNA', codigo: 'am2'},
  {nombre:'GAEL BARRAZA', codigo: 'am3'},
  {nombre:'ABRIL DEZE', codigo: 'am4'},
  {nombre:'FELIPE FERNANDEZ IPAR', codigo: 'am5'},
  {nombre:'BAUTISTA GALANTE', codigo: 'am6'},
  {nombre:'JEREMIAS GALEANO', codigo: 'am7'},
  {nombre:'VALENTIN IBARCENA', codigo: 'am8'},
  {nombre:'BAUTISTA ILLOBRE', codigo: 'am9'},
  {nombre:'SIMON MOJICA COPPOLA', codigo: 'am10'},
  {nombre:'MATEO SCALISE MORE', codigo: 'am11'},
  {nombre:'JUAN IGNACIO SCOTTO', codigo: 'am12'},
  {nombre:'MARTIN VEGA LISAN', codigo: 'am13'},
  {nombre:'GERONIMO VILLALBA', codigo: 'am14'},
  {nombre:'AINHOA AMELIE ACEVEDO', codigo: 'am15'},
  {nombre:'CATALINA AGUERO IRIBARREN', codigo: 'am16'},
  {nombre:'LUDMILA BAEZ', codigo: 'am17'},
  {nombre:'LOLA CASTRO COLLAZO', codigo: 'am18'},
  {nombre:'OLIVIA DE LA SERNA', codigo: 'am19'},
  {nombre:'ISABELLA ESPOSITO', codigo: 'am20'},
  {nombre:'MAILEN FAUSCIANA', codigo: 'am21'},
  {nombre:'LOLA PEREZ', codigo: 'am22'},
  {nombre:'JAZMIN PETRAGLIA', codigo: 'am23'},
  {nombre:'VERA RODRIGUEZ RICHIERI', codigo: 'am24'},
  {nombre:'ANA SOFIA ROMANO SANCHEZ', codigo: 'am25'},
  {nombre:'ISABELLA RUIZ DIAZ', codigo: 'am26'},
  {nombre:'JUSTINA SALADINO DARQUIER', codigo: 'am27'},
  {nombre:'ANTONIA VITELLI', codigo: 'am28'},
  {nombre:'THIAGO ROMERO', codigo: 'am29'},
  {nombre:'BENJAMIN AUDUBERT', codigo: 'at1'},
  {nombre:'ROMAN FEDERICO BELLO', codigo: 'at2'},
  {nombre:'MAXIMO AUGUSTO FERREYRA', codigo: 'at3'},
  {nombre:'PEDRO GARCIA NAVARRO', codigo: 'at4'},
  {nombre:'JEREMIAS SALVADOR GUZMAN', codigo: 'at5'},
  {nombre:'LUCIANO TAHIEL JAN', codigo: 'at6'},
  {nombre:'FRANCISCO LEON', codigo: 'at7'},
  {nombre:'TAHIEL MEDINA', codigo: 'at8'},
  {nombre:'LAUTARO IVAN PARDO NUÑEZ', codigo: 'at9'},
  {nombre:'SANTINO ROJAS', codigo: 'at10'},
  {nombre:'HECTOR JOSE ROLDAN', codigo: 'at11'},
  {nombre:'THIAGO ROMERO', codigo: 'at12'},
  {nombre:'MILAN SALVATIERRA', codigo: 'at13'},
  {nombre:'LEANDRO GABRIEL TORRES', codigo: 'at14'},
  {nombre:'JOAQUIEN BENICIO VENTUIZ', codigo: 'at15'},
  {nombre:'TIZIANO BENJAMIN YOVINO', codigo: 'at16'},
  {nombre:'GAIA FRANCESCA ABRAHAM', codigo: 'at17'},
  {nombre:'LUDMILA MARIA ALOMO', codigo: 'at18'},
  {nombre:'LUZ GERALDINE AMBROSONI', codigo: 'at19'},
  {nombre:'LIBERTAD COSMAN VEIGA', codigo: 'at20'},
  {nombre:'JUANA RENATA DUARTE', codigo: 'at21'},
  {nombre:'MAIA FIGUEROA', codigo: 'at22'},
  {nombre:'LARA ELUNEY GALAN', codigo: 'at23'},
  {nombre:'AGOSTINA IURO', codigo: 'at24'},
  {nombre:'NICOLE MAGALI MANSILLA', codigo: 'at25'},
  {nombre:'TIFFANY JULIETA SALINA', codigo: 'at26'},
  {nombre:'INDIA ELOISE SCIAN PERPEN', codigo: 'at27'},
  {nombre:'ISABELA WHEELER ', codigo: 'at28'},
  {nombre:'FRANCO CARETTI', codigo: 'at29'},

  {nombre:'FELIPE AGUIRRE JUAREZ', codigo: 'jm1'},
  {nombre:'JEREMIAS ARCE', codigo: 'jm2'},
  {nombre:'LIHUEL CASCO', codigo: 'jm3'},
  {nombre:'JOAQUIN COLIGUANTE', codigo: 'jm4'},
  {nombre:'HENRY ISMAEL DE MORA', codigo: 'jm5'},
  {nombre:'THIAN BENJAMIN GEREZ', codigo: 'jm6'},
  {nombre:'BENICIO JAN MADRID', codigo: 'jm7'},
  {nombre:'No sabemos como se llama', codigo: 'jm8'},
  {nombre:'JOAQUIN PEREZ BENTRON', codigo: 'jm9'},
  {nombre:'FRANCISCO RODRIGUEZ ', codigo: 'jm10'},
  {nombre:'AUGUSTO ROMAN', codigo: 'jm11'},
  {nombre:'ELIEL VERA MADOERY', codigo: 'jm12'},
  {nombre:'NEREA ARGAÑARAZ', codigo: 'jm13'},
  {nombre:'HUILEN BALOR DALISSANDRO', codigo: 'jm14'},
  {nombre:'ANITA CRISTALDO ', codigo: 'jm15'},
  {nombre:'MIA ABIGAIL CHIRILA', codigo: 'jm16'},
  {nombre:'GENESIS HOYOS SANDOVAL', codigo: 'jm17'},
  {nombre:'MIA ZAMARA IRAMAIN', codigo: 'jm18'},
  {nombre:'ORIANA ANTONELLA LOBO', codigo: 'jm19'},
  {nombre:'MAITE LOPEZ', codigo: 'jm20'},
  {nombre:'LOURDES MACHUCA', codigo: 'jm21'},
  {nombre:'UMA MORALES', codigo: 'jm22'},
  {nombre:'MIA BELEN MORE', codigo: 'jm23'},
  {nombre:'SOFIA VICTORIA NOBLE', codigo: 'jm24'},
  {nombre:'MARTINA AZUL ORONA', codigo: 'jm25'},
  {nombre:'OLIVIA ELBA PELLETIERI', codigo: 'jm26'},
  {nombre:'PALOMA RAMIREZ FARIAS', codigo: 'jm27'},
  {nombre:'LUDMILA VIDELA', codigo: 'jm28'},
  {nombre:'ABRIL ORIANA DEZE', codigo: 'jm29'},
  {nombre:'AGUSTIN ADDATI BRINGIOTTI', codigo: 'jt1'},
  {nombre:'BASTIAN ALEJO ARTAZA', codigo: 'jt2'},
  {nombre:'MATEO BELLO', codigo: 'jt3'},
  {nombre:'FRANCO ENRIQUE FERNANDEZ', codigo: 'jt4'},
  {nombre:'JOAQUIN GAUCHEZ', codigo: 'jt5'},
  {nombre:'DIEGO ETHAN HIDALGO AYALA', codigo: 'jt6'},
  {nombre:'JUAN MANUEL LOPEZ', codigo: 'jt7'},
  {nombre:'TOMAS NAHUEL MIRANDA', codigo: 'jt8'},
  {nombre:'FELIPE PAZ', codigo: 'jt9'},
  {nombre:'DANTE FEDERICO RIEDEL', codigo: 'jt10'},
  {nombre:'CIRO ROJAS', codigo: 'jt11'},
  {nombre:'TEO BENJAMIN SANCHEZ', codigo: 'jt12'},
  {nombre:'LUIS ANDRES VILLARROEL CORASPE', codigo: 'jt13'},
  {nombre:'SANTIAGO VIOLO', codigo: 'jt14'},
  {nombre:'AXEL URRUTIA', codigo: 'jt15'},
  {nombre:'PILAR CARRIZO VAZQUEZ', codigo: 'jt16'},
  {nombre:'ALMA COLMAN PELAYTAY', codigo: 'jt17'},
  {nombre:'SHEILA FARIAS ', codigo: 'jt18'},
  {nombre:"FRANCESCA FERREIRA D'ANGELO", codigo: 'jt19'},
  {nombre:'RENATA CLARA FRATI VANEGAS', codigo: 'jt20'},
  {nombre:'ORNELLA ALMA FRATI VANEGAS', codigo: 'jt21'},
  {nombre:'MIA PILAR HIDALGO ZEBALLOS', codigo: 'jt22'},
  {nombre:'DELFINA LOPEZ QUAGLIATA', codigo: 'jt23'},
  {nombre:'UMMA ABRIL MONJES', codigo: 'jt24'},
  {nombre:'VICTORIA MOREL', codigo: 'jt25'},
  {nombre:'EMMA SACHRITZ', codigo: 'jt26'},
  {nombre:'KYARA SILVA', codigo: 'jt27'},
  {nombre:'EMILCE NAHIARA YERBA ALCARAZ', codigo: 'jt28'},
  {nombre:'ANALIA LLANO ', codigo: 'jt29'},

  {nombre:'DIEGO BESTEIRO POLEDRI', codigo: 'vm1'},
  {nombre:'ISAAC RAMIRO BRITEZ', codigo: 'vm2'},
  {nombre:'BENJAMIN TOMAS DUARTE', codigo: 'vm3'},
  {nombre:'RAMIRO GENTILE', codigo: 'vm4'},
  {nombre:'ALAN GOMEZ COSTA', codigo: 'vm5'},
  {nombre:'JUAN FRANCISCO LOPEZ MORENO', codigo: 'vm6'},
  {nombre:'FELIPE LOPEZ PAREDES', codigo: 'vm7'},
  {nombre:'DANTE MALDONADO OCHOA', codigo: 'vm8'},
  {nombre:'CAMILO PERALTA CASTRO', codigo: 'vm9'},
  {nombre:'TAHIEL SORIA', codigo: 'vm10'},
  {nombre:'LUCIANO SOSA', codigo: 'vm11'},
  {nombre:'FELICITAS AGUIRRE', codigo: 'vm12'},
  {nombre:'ALMA BAEZ', codigo: 'vm13'},
  {nombre:'MARTINA ALICE', codigo: 'vm14'},
  {nombre:'AMBAR NEREA BAEZ', codigo: 'vm15'},
  {nombre:'ISABELA BERON', codigo: 'vm16'},
  {nombre:'JULIA DEL CASTILLO', codigo: 'vm17'},
  {nombre:'BIANCA MANDARADONI TOBAR', codigo: 'vm18'},
  {nombre:'JAZMIN PENELOPE PEREIRA', codigo: 'vm19'},
  {nombre:'ALMA QUIROGA', codigo: 'vm20'},
  {nombre:'LUANA RODRIGUEZ CISNEROS', codigo: 'vm21'},
  {nombre:'ADELA ELIS THAYER', codigo: 'vm22'},
  {nombre:'EMILIANA PIA TORRES', codigo: 'vm23'},
  {nombre:'PENELOPE TRIVIÑO', codigo: 'vm24'},
  {nombre:'EMMA TURK', codigo: 'vm25'},
  {nombre:'ALMA YAMIL VALENZUELA', codigo: 'vm26'},
  {nombre:'JULIA VITELLI', codigo: 'vm27'},
  {nombre:'EMILIA VITELLI', codigo: 'vm28'},
  {nombre:'BENJAMIN AVENTUROSO', codigo: 'vt1'},
  {nombre:'GAEL CENTURION MURUJOS', codigo: 'vt2'},
  {nombre:'BRUNO VALENTIN CRESCIULLO', codigo: 'vt3'},
  {nombre:'GIANFRANCO GUGLIELMETTI', codigo: 'vt4'},
  {nombre:'RENZO GUGLIELMETTI', codigo: 'vt5'},
  {nombre:'LOGAN NOHA HERLEIN', codigo: 'vt6'},
  {nombre:'BENJAMIN ILLAILI', codigo: 'vt7'},
  {nombre:'NATANAEL LLAUDET', codigo: 'vt8'},
  {nombre:'BRUNO LUNA ECHAZU', codigo: 'vt9'},
  {nombre:'BRUNO MAXIMO PERALTA', codigo: 'vt10'},
  {nombre:'JOAQUIN PEDRO PINTO', codigo: 'vt11'},
  {nombre:'MATEO RODRIGUEZ', codigo: 'vt12'},
  {nombre:'OLIVIA BASILE', codigo: 'vt13'},
  {nombre:'CATALINA LOURDES BUSQUETS STRUBS', codigo: 'vt14'},
  {nombre:'CATALINA BUSTAMANTE', codigo: 'vt15'},
  {nombre:'FRANCESCA BUSTAMANTE', codigo: 'vt16'},
  {nombre:'SOFIA CASALI', codigo: 'vt17'},
  {nombre:'GINA BIANCA CAPELLETTI', codigo: 'vt18'},
  {nombre:'VICTORIA GONZALEZ ACEVEDO', codigo: 'vt19'},
  {nombre:'MALENA GUANTAY', codigo: 'vt20'},
  {nombre:'SOFIA HOLMQUIST CARBONARO', codigo: 'vt21'},
  {nombre:'LUCRECIA MARTINEZ', codigo: 'vt22'},
  {nombre:'LUNA ATENEA RODRIGUEZ', codigo: 'vt23'},
  {nombre:'VALENTINA TRIPODI', codigo: 'vt24'},
  {nombre:'CAROLINA AYELEN ZALIEGA', codigo: 'vt25'},
  {nombre:'ALMA BELEN ZARATE HEE', codigo: 'vt26'},
  {nombre:'ALEX ALEGRE', codigo: 'vt27'},
  {nombre:'BENICIO MAS', codigo: 'vt28'},
]);
//contextos
const Gc = React.createContext();
class Gcc extends React.Component {

  constructor(props) { 
    super(props);
    const now = new Date();
    this.state = {
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
          cobrar: () => {
            console.log(this.state);
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

//elementos
const Nav = props => {
  const { links, children } = props;
  return (
    <Fragment>
      <section className="avenir w-100 pa2">
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l br3">
          <nav className="f6 fw6 ttu tracked">
            {links.map(link => (
              <NavLink
                to={`/${link.href}`}
                className={`link dim white dib mr3 hover-${link.color}`}
                activeClassName={link.color}
                exact
                key={uid()}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
        </header>
      </section>
      {children}
    </Fragment>
  );
};
const BigBox = ({ color, children }) => {
  return (
    <section className="avenir w-100 pa2 pt5">
      <article className="fl w-100 pa2">
        <div className={`bg-${color} white w-100 mt3 pa3 br3`}>{children}</div>
      </article>
    </section>
  );
};
const SmallBox = ({ color, children }) => {
  return (
    <article className="fl w-100 w-third-ns pa2">
      <div className={`bg-${color} white w-100 mt3 pa3 br3`}>{children}</div>
    </article>
  );
};
const Campo = ({ css, nombre, onChange, value }) => {
  return (
    <div className="flex flex-column pt1 pr3">
      <label>{nombre}</label>
      <input onChange={onChange}  value={value} className={`${css} f6 fw6 bb bw-3 bg`} />
    </div>
  );
};
const Autocomplete = ({css, nombre, changers, suggestions, value}) => {
  return (
    <Gc.Consumer>
      { context => (
        <div className="flex flex-column w-30">
          <Campo css={css} nombre={nombre} value={value} onChange={e=>changers.nombre(e.target.value)}  />
          <div className={`flex flex-column bg-white br3 pr3 ${css}`}>
            {
              context.state.nombre && suggestions
                .filter(s => s.nombre.toLowerCase().indexOf(context.state.nombre.toLowerCase())!=-1 && context.state.nombre.toLowerCase() != s.nombre.toLowerCase())
                .map(s => <button key={uid()} onClick={()=>changers.alumno(s)} className="br-pill b f4 white mh3 mv2 w-auto bg-gold b--gold shadow-3">{s.nombre}</button>)
            }
          </div>
        </div>
      )}
    </Gc.Consumer>
  );
}
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
        ? <DropDown color="gold" nombre="Mes" numero={numero} value={item.mes} changer={changers.mes} opciones={datos.meses} />
        : ''
      }
      { 
        item.concepto=='Fotos'
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

//secciones
const Home = props => {
  return (
    <Fragment>
      <section className="avenir w-100 pa2 pt5">
        <SmallBox color="pink">
          <Alumnos />
        </SmallBox>
        <SmallBox color="light-blue">
          <Reporte />
        </SmallBox>
        <SmallBox color="red">
          <Usuarios />
        </SmallBox>
      </section>
      <BigBox color="gold">
        <NuevoRecibo />
      </BigBox>
    </Fragment>
  );
};
const NuevoRecibo = props => {
  const now = new Date();
  const fecha = `${("0" + now.getDate()).slice(-2)} / ${
    datos.meses[now.getMonth()]
  } / ${now.getYear() - 100} `;
  return (
    <Gcc>
      <Gc.Consumer>
        { context => {
          return (
          <Fragment>
            <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
              <div className="ttu f6 fw9">Recibo</div>
              <div className="ttu f6 fw9">{fecha}</div>
              <div className="ttu f6 fw9">nro 0000 - 0007</div>
            </div>
            <div className="flex flex-column pt3">
              <div className="flex flex-row items-end">
                <Autocomplete css="gold" nombre="Nombre" value={context.state.nombre} changers={context.changers} suggestions={datos.alumnos} />
                {context.state.alumno.nombre && <label className="fw9 f4">
                  {`${context.state.alumno.nombre
                  } - Sala ${datos.salas.filter(s => context.state.alumno.codigo[0]==s.codigo)[0].color
                  } - Turno ${context.state.alumno.codigo[1]=="m"?"Mañana":"Tarde"}`}
                </label>}
              </div>
              {context.state.items.map((c, i)=> <Concepto item={c} numero={i} quitarItem={context.quitarItem} changers={context.changers} key={uid()} />)}
              <button onClick={context.nuevoItem} className="br-pill grow self-center b w4 f4 gold bg-white b--white shadow-3">+</button>
            </div>
            <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end">
              $ {context.state.items.reduce((a, c)=>a+=c.precio,0)}
            </div>
            <div className="pt2 w-100 inline-flex items-center justify-end">
              <button onClick={context.cobrar}  className="br-pill grow b f4 gold w4 bg-white b--white shadow-3">
                Cobrar
              </button>
            </div>
          </Fragment>
        )}}
      </Gc.Consumer>
    </Gcc>
  );
};
const Reportes = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Recibo</div>
        <div className="ttu f6 fw2">26 / 01 / 2019</div>
        <div className="ttu f6 fw2">nro 0000 - 0000</div>
      </div>
      <div className="flex flex-column pt3">
        <label>Nombre</label>
        <input className="green w-30 ttu mb3 f6 fw6 bb bw-3 bg w-50"/>
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Cuota Social</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Mes</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Marzo</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Pedido de Fotos</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Codigo</label>
            <input
              value="123456"
              className="green w-100 ttu mb3 f6 fw6 bb bw-3 bg"
            />
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Tamaño</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>15 x 20</option>
            </select>
          </div>
        </div>
        <button className="br-pill green w-10 bg-white b--white">+</button>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end">
        $ 50
      </div>
      <div className="pt2 w-100 inline-flex items-center justify-end">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Cobrar
        </a>
      </div>
    </Fragment>
  );
};
const Cajas = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Recibo</div>
        <div className="ttu f6 fw2">26 / 01 / 2019</div>
        <div className="ttu f6 fw2">nro 0000 - 0000</div>
      </div>
      <div className="flex flex-column pt3">
        <label>Nombre</label>
        <input
          value="Bianca Mandaradoni"
          className="green w-30 ttu mb3 f6 fw6 bb bw-3 bg"
        />
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Cuota Social</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Mes</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Marzo</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Pedido de Fotos</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Codigo</label>
            <input
              value="123456"
              className="green w-100 ttu mb3 f6 fw6 bb bw-3 bg"
            />
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Tamaño</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>15 x 20</option>
            </select>
          </div>
        </div>
        <button className="br-pill green w-10 bg-white b--white">+</button>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end">
        $ 50
      </div>
      <div className="pt2 w-100 inline-flex items-center justify-end">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Cobrar
        </a>
      </div>
    </Fragment>
  );
};
const Admin = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Resdfsdfcibo</div>
        <div className="ttu f6 fw2">26 / 01 / 2019</div>
        <div className="ttu f6 fw2">nro 0000 - 0000</div>
      </div>
      <div className="flex flex-column pt3">
        <label>Nombre</label>
        <input
          value="Bianca Mandaradoni"
          className="green w-30 ttu mb3 f6 fw6 bb bw-3 bg"
        />
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Cuota Social</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Mes</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Marzo</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row pt3">
          <div className="flex flex-column pt3 pr4">
            <label>Concepto</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>Pedido de Fotos</option>
            </select>
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Codigo</label>
            <input
              value="123456"
              className="green w-100 ttu mb3 f6 fw6 bb bw-3 bg"
            />
          </div>
          <div className="flex flex-column pt3 pr4">
            <label>Tamaño</label>
            <select className="green w-100 ttu mb3 f6 fw6 bb">
              <option>15 x 20</option>
            </select>
          </div>
        </div>
        <button className="br-pill green w-10 bg-white b--white">+</button>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end">
        $ 50
      </div>
      <div className="pt2 w-100 inline-flex items-center justify-end">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Cobrar
        </a>
      </div>
    </Fragment>
  );
};
const Reporte = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Pedidos</div>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center">49</div>
      <div className="pt2 w-100 inline-flex items-center justify-between">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Ver Lista
        </a>
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Editar
        </a>
      </div>
    </Fragment>
  );
};
const Alumnos = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Alumnos</div>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center">{datos.alumnos.length}</div>
      <div className="pt2 w-100 inline-flex items-center justify-between">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Reporte
        </a>
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Agregar
        </a>
      </div>
    </Fragment>
  );
};
const Usuarios = props => {
  return (
    <Fragment>
      <div className="w-100 pb1 bb b--white-50  inline-flex items-center justify-between">
        <div className="ttu f6 fw2">Usuarios</div>
      </div>
      <div className="pt3 f2 f2-m fw5 w-100 inline-flex items-center">13</div>
      <div className="pt2 w-100 inline-flex items-center justify-between">
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Reporte
        </a>
        <a className="link dim white ttu f6 fw6" href="#" title="Contact">
          Agregar
        </a>
      </div>
    </Fragment>
  );
};

const Root = () => {
  return (
    <HashRouter>
      <div>
        <Nav
          links={[
            { text: "Home", href: "", color: "pink" },
            { text: "Nuevo recibo", href: "nuevoRecibo", color: "gold" },
            { text: "Reportes", href: "reportes", color: "light-blue" },
            { text: "Cajas", href: "cajas", color: "red" },
            { text: "Admin", href: "admin", color: "green" }
          ]}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route
            path="/nuevoRecibo"
            component={() => (
              <Gcc>
                <BigBox color="gold">
                  <NuevoRecibo />
                </BigBox>
              </Gcc>
            )}
          />
          <Route
            path="/reportes"
            component={() => (
              <BigBox color="light-blue">
                <Reportes />
              </BigBox>
            )}
          />
          <Route
            path="/cajas"
            component={() => (
              <BigBox color="red">
                <Cajas />
              </BigBox>
            )}
          />
          <Route
            path="/admin"
            component={() => (
              <BigBox color="green">
                <Admin />
              </BigBox>
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

render(<Root />, document.querySelector("#app"));
