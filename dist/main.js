!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){c(e,t,o[t])})}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}function l(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?i(e):t}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=ReactRouterDOM,R=b.HashRouter,d=b.Switch,u=b.Route,N=(b.IndexRoute,b.NavLink),I=(b.hashHistory,ReactDOM.render),g=React.Fragment,f={agregar:function(e,t){f[e]=t,localStorage.setItem(e,JSON.stringify(t))},recibos:JSON.parse(localStorage.getItem("recibos"))||[],agregarRecibo:function(e){var t=e.alumno,o=e.fecha,n=e.numero,c=e.items;f.agregar("recibos",f.recibos.concat({codigo:t.codigo,fecha:o,numero:n,items:c}))},nuevaTabla:function(e){f.agregar(e,valor)}};console.log(JSON.parse(localStorage.getItem("recibos")));var O,L=(O=0,function(){return O++});f.agregar("homeBoxes",[{box:"alumnos",size:"SmallBox"},{box:"pedidos",size:"SmallBox"},{box:"usuarios",size:"SmallBox"},{box:"nuevoRecibo",size:"BigBox"}]),f.agregar("meses",["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"]),f.agregar("conceptos",[{nombre:"Cuota Social",precio:100},{nombre:"Materiales",precio:600},{nombre:"Emergencias",precio:200},{nombre:"Foto 15 x 20",precio:10},{nombre:"Foto 20 x 30",precio:20},{nombre:"Foto llavero",precio:30},{nombre:"Rifa",precio:10},{nombre:"Extraordinaria",precio:100},{nombre:"Donaciones",precio:100}]),f.agregar("salas",[{codigo:"s",color:"Rosa"},{codigo:"a",color:"Amarilla"},{codigo:"c",color:"Celeste"},{codigo:"j",color:"Roja"},{codigo:"v",color:"Verde"}]),f.agregar("alumnos",[{nombre:"ANTONIA ARNESTO",codigo:"st2"},{nombre:"MILAGROS BELLO",codigo:"st3"},{nombre:"DELFINA BRANDOLINI",codigo:"st4"},{nombre:"GIULIANA B. COLMAN PELAYTAY",codigo:"st5"},{nombre:"JUANA GARCIA NAVARRO",codigo:"st6"},{nombre:"MILENA HASSAN BRINGIOTTI",codigo:"st7"},{nombre:"LUPE LEZCANO RANDAZZO",codigo:"st8"},{nombre:"NOELIA LOPEZ LARA",codigo:"st9"},{nombre:"MILAGROS MORETTI PERALTA",codigo:"st10"},{nombre:"ITHIEL PARISI",codigo:"st11"},{nombre:"CATALINA SERENO",codigo:"st12"},{nombre:"THIAGO AVALOS",codigo:"st13"},{nombre:"LUCIANO BASILE MALDONADO",codigo:"st14"},{nombre:"LEON BENJAMIN DUARTE ",codigo:"st15"},{nombre:"FELIPE ILLAILI",codigo:"st16"},{nombre:"ALEJO JALAF FERNANDEZ",codigo:"st17"},{nombre:"FABRIZIO NAVARRO TASSO",codigo:"st18"},{nombre:"AARON DIEGO COLIGUANTE",codigo:"sm1"},{nombre:"VALENTIN DE LA SERNA",codigo:"sm2"},{nombre:"VICENTE ENCINA ROLDAN",codigo:"sm3"},{nombre:"OLIVER JUAREZ",codigo:"sm4"},{nombre:"SEBASTIAN POLEGZUK",codigo:"sm5"},{nombre:"NICOLAS TORRES",codigo:"sm6"},{nombre:"SOFIA ABDALA LASSA",codigo:"sm7"},{nombre:"GUADALUPE ALGAMIZ",codigo:"sm8"},{nombre:"MALENA JAZMIN BAEZ",codigo:"sm9"},{nombre:"AILIN BALOR DALISSANDRO",codigo:"sm10"},{nombre:"MARTINA BERON",codigo:"sm11"},{nombre:"CLARITA CRISTALDO",codigo:"sm12"},{nombre:"JOAQUINA DOMINGUEZ OLIV.",codigo:"sm13"},{nombre:"JULIANA FERNANDEZ IP.",codigo:"sm14"},{nombre:"MARTINA LOPEZ PAREDES",codigo:"sm15"},{nombre:"EMILIA MAMPRIN",codigo:"sm16"},{nombre:"CONSTANZA PAZ MERLO RUOFF",codigo:"sm17"},{nombre:"OLIVIA SORRENTI",codigo:"sm18"},{nombre:"ANGEL AKIKE",codigo:"am1"},{nombre:"FABRIZIO ARIZA",codigo:"am2"},{nombre:"BASTIAN AYALA",codigo:"am3"},{nombre:"BAUTISTA CASCO",codigo:"am4"},{nombre:"FIDEL ENRIQUE FERNANDEZ",codigo:"am5"},{nombre:"JANO MAMPRIN",codigo:"am6"},{nombre:"AITHAN ANDRES MACHUCA",codigo:"am7"},{nombre:"BAUTISTA MARSILI MORE",codigo:"am8"},{nombre:"CIRO MENDOZA",codigo:"am9"},{nombre:"FELIPE SIMON MERLO RUOFF",codigo:"am10"},{nombre:"VALENTINO MORETTA",codigo:"am11"},{nombre:"LAUTARO PEREZ",codigo:"am12"},{nombre:"SANTINO SIMON QUINTANS",codigo:"am13"},{nombre:"DANTE SEPPIA",codigo:"am14"},{nombre:"DANTE MANUEL VERA",codigo:"am15"},{nombre:"FELIPE VIGGIANO",codigo:"am16"},{nombre:"MALENA FRANCO",codigo:"am17"},{nombre:"MARIA GUADALUPE ALBORNOZ",codigo:"am18"},{nombre:"OLIVIA BARRANQUERO",codigo:"am19"},{nombre:"GUILLERMINA GONZALEZ ",codigo:"am20"},{nombre:"ALMA HIDALGO",codigo:"am21"},{nombre:" MANDARADONI TOBAR GIULIA",codigo:"am22"},{nombre:"AMBAR JULIETA MORE",codigo:"am23"},{nombre:"LIBERTAD MORENO RICHIERI",codigo:"am24"},{nombre:"ANA VALENTINA RODRIGUEZ ",codigo:"am25"},{nombre:"CONSTANZA MARINA SOSA",codigo:"am26"},{nombre:"AMBAR FRANCESCA SOSA SANCHEZ",codigo:"am27"},{nombre:"NARELA YUNES FRANCO",codigo:"am28"},{nombre:"ISABELA ESPOSITO",codigo:"am29"},{nombre:"BAUTISTA DOMINGO ALI",codigo:"at1"},{nombre:"MATEO JOSE AMARILLO",codigo:"at2"},{nombre:"ELISEO BALZAROTTI",codigo:"at3"},{nombre:"SIMON BIGGIOTTI",codigo:"at4"},{nombre:"IGNACIO BUSQUETS STRAUBS",codigo:"at5"},{nombre:"AGUSTIN CARRION",codigo:"at6"},{nombre:"IGNACIO CURRA",codigo:"at7"},{nombre:"LEON FERNANDEZ CASCO",codigo:"at8"},{nombre:"TOMAS GIMENES",codigo:"at9"},{nombre:"ROMEO LEON GONZALEZ ",codigo:"at10"},{nombre:"PEDRO IGNACIO JONES",codigo:"at11"},{nombre:"IAN DEMIR LEDESMA",codigo:"at12"},{nombre:"VALENTIN MASSIMINO SOLOMITA",codigo:"at13"},{nombre:"FRANCISCO PIEDRABUENA PEREZ",codigo:"at14"},{nombre:"PEDRO SANCHEZ",codigo:"at15"},{nombre:"FRANCISCO SANCHEZ",codigo:"at16"},{nombre:"FLORENCIA CAPELLETTI",codigo:"at17"},{nombre:"DULCE MARIA DE BONO SEGUNDO",codigo:"at18"},{nombre:"SOL NAIARA DUARTE JAIMES",codigo:"at19"},{nombre:"AMANDA GAJARDO DOMINGUEZ",codigo:"at20"},{nombre:"JULIETA GONZALEZ ACEVEDO",codigo:"at21"},{nombre:"JULIA INES LABORDE ",codigo:"at22"},{nombre:"CATALINA MILAGROS LICITRA",codigo:"at23"},{nombre:"CATALINA LOPEZ",codigo:"at24"},{nombre:"AZUL VICTORIA MACCHI",codigo:"at25"},{nombre:"BRISA MILAGROS MANSILLA",codigo:"at26"},{nombre:"DELFINA MERLO",codigo:"at27"},{nombre:"LIBERTAD MAURI CALOS",codigo:"at28"},{nombre:"VALENTIN ALGAMIZ",codigo:"am1"},{nombre:"RAMIRO AVILA LUNA",codigo:"am2"},{nombre:"GAEL BARRAZA",codigo:"am3"},{nombre:"ABRIL DEZE",codigo:"am4"},{nombre:"FELIPE FERNANDEZ IPAR",codigo:"am5"},{nombre:"BAUTISTA GALANTE",codigo:"am6"},{nombre:"JEREMIAS GALEANO",codigo:"am7"},{nombre:"VALENTIN IBARCENA",codigo:"am8"},{nombre:"BAUTISTA ILLOBRE",codigo:"am9"},{nombre:"SIMON MOJICA COPPOLA",codigo:"am10"},{nombre:"MATEO SCALISE MORE",codigo:"am11"},{nombre:"JUAN IGNACIO SCOTTO",codigo:"am12"},{nombre:"MARTIN VEGA LISAN",codigo:"am13"},{nombre:"GERONIMO VILLALBA",codigo:"am14"},{nombre:"AINHOA AMELIE ACEVEDO",codigo:"am15"},{nombre:"CATALINA AGUERO IRIBARREN",codigo:"am16"},{nombre:"LUDMILA BAEZ",codigo:"am17"},{nombre:"LOLA CASTRO COLLAZO",codigo:"am18"},{nombre:"OLIVIA DE LA SERNA",codigo:"am19"},{nombre:"ISABELLA ESPOSITO",codigo:"am20"},{nombre:"MAILEN FAUSCIANA",codigo:"am21"},{nombre:"LOLA PEREZ",codigo:"am22"},{nombre:"JAZMIN PETRAGLIA",codigo:"am23"},{nombre:"VERA RODRIGUEZ RICHIERI",codigo:"am24"},{nombre:"ANA SOFIA ROMANO SANCHEZ",codigo:"am25"},{nombre:"ISABELLA RUIZ DIAZ",codigo:"am26"},{nombre:"JUSTINA SALADINO DARQUIER",codigo:"am27"},{nombre:"ANTONIA VITELLI",codigo:"am28"},{nombre:"THIAGO ROMERO",codigo:"am29"},{nombre:"BENJAMIN AUDUBERT",codigo:"at1"},{nombre:"ROMAN FEDERICO BELLO",codigo:"at2"},{nombre:"MAXIMO AUGUSTO FERREYRA",codigo:"at3"},{nombre:"PEDRO GARCIA NAVARRO",codigo:"at4"},{nombre:"JEREMIAS SALVADOR GUZMAN",codigo:"at5"},{nombre:"LUCIANO TAHIEL JAN",codigo:"at6"},{nombre:"FRANCISCO LEON",codigo:"at7"},{nombre:"TAHIEL MEDINA",codigo:"at8"},{nombre:"LAUTARO IVAN PARDO NUÑEZ",codigo:"at9"},{nombre:"SANTINO ROJAS",codigo:"at10"},{nombre:"HECTOR JOSE ROLDAN",codigo:"at11"},{nombre:"THIAGO ROMERO",codigo:"at12"},{nombre:"MILAN SALVATIERRA",codigo:"at13"},{nombre:"LEANDRO GABRIEL TORRES",codigo:"at14"},{nombre:"JOAQUIEN BENICIO VENTUIZ",codigo:"at15"},{nombre:"TIZIANO BENJAMIN YOVINO",codigo:"at16"},{nombre:"GAIA FRANCESCA ABRAHAM",codigo:"at17"},{nombre:"LUDMILA MARIA ALOMO",codigo:"at18"},{nombre:"LUZ GERALDINE AMBROSONI",codigo:"at19"},{nombre:"LIBERTAD COSMAN VEIGA",codigo:"at20"},{nombre:"JUANA RENATA DUARTE",codigo:"at21"},{nombre:"MAIA FIGUEROA",codigo:"at22"},{nombre:"LARA ELUNEY GALAN",codigo:"at23"},{nombre:"AGOSTINA IURO",codigo:"at24"},{nombre:"NICOLE MAGALI MANSILLA",codigo:"at25"},{nombre:"TIFFANY JULIETA SALINA",codigo:"at26"},{nombre:"INDIA ELOISE SCIAN PERPEN",codigo:"at27"},{nombre:"ISABELA WHEELER ",codigo:"at28"},{nombre:"FRANCO CARETTI",codigo:"at29"},{nombre:"FELIPE AGUIRRE JUAREZ",codigo:"jm1"},{nombre:"JEREMIAS ARCE",codigo:"jm2"},{nombre:"LIHUEL CASCO",codigo:"jm3"},{nombre:"JOAQUIN COLIGUANTE",codigo:"jm4"},{nombre:"HENRY ISMAEL DE MORA",codigo:"jm5"},{nombre:"THIAN BENJAMIN GEREZ",codigo:"jm6"},{nombre:"BENICIO JAN MADRID",codigo:"jm7"},{nombre:"No sabemos como se llama",codigo:"jm8"},{nombre:"JOAQUIN PEREZ BENTRON",codigo:"jm9"},{nombre:"FRANCISCO RODRIGUEZ ",codigo:"jm10"},{nombre:"AUGUSTO ROMAN",codigo:"jm11"},{nombre:"ELIEL VERA MADOERY",codigo:"jm12"},{nombre:"NEREA ARGAÑARAZ",codigo:"jm13"},{nombre:"HUILEN BALOR DALISSANDRO",codigo:"jm14"},{nombre:"ANITA CRISTALDO ",codigo:"jm15"},{nombre:"MIA ABIGAIL CHIRILA",codigo:"jm16"},{nombre:"GENESIS HOYOS SANDOVAL",codigo:"jm17"},{nombre:"MIA ZAMARA IRAMAIN",codigo:"jm18"},{nombre:"ORIANA ANTONELLA LOBO",codigo:"jm19"},{nombre:"MAITE LOPEZ",codigo:"jm20"},{nombre:"LOURDES MACHUCA",codigo:"jm21"},{nombre:"UMA MORALES",codigo:"jm22"},{nombre:"MIA BELEN MORE",codigo:"jm23"},{nombre:"SOFIA VICTORIA NOBLE",codigo:"jm24"},{nombre:"MARTINA AZUL ORONA",codigo:"jm25"},{nombre:"OLIVIA ELBA PELLETIERI",codigo:"jm26"},{nombre:"PALOMA RAMIREZ FARIAS",codigo:"jm27"},{nombre:"LUDMILA VIDELA",codigo:"jm28"},{nombre:"ABRIL ORIANA DEZE",codigo:"jm29"},{nombre:"AGUSTIN ADDATI BRINGIOTTI",codigo:"jt1"},{nombre:"BASTIAN ALEJO ARTAZA",codigo:"jt2"},{nombre:"MATEO BELLO",codigo:"jt3"},{nombre:"FRANCO ENRIQUE FERNANDEZ",codigo:"jt4"},{nombre:"JOAQUIN GAUCHEZ",codigo:"jt5"},{nombre:"DIEGO ETHAN HIDALGO AYALA",codigo:"jt6"},{nombre:"JUAN MANUEL LOPEZ",codigo:"jt7"},{nombre:"TOMAS NAHUEL MIRANDA",codigo:"jt8"},{nombre:"FELIPE PAZ",codigo:"jt9"},{nombre:"DANTE FEDERICO RIEDEL",codigo:"jt10"},{nombre:"CIRO ROJAS",codigo:"jt11"},{nombre:"TEO BENJAMIN SANCHEZ",codigo:"jt12"},{nombre:"LUIS ANDRES VILLARROEL CORASPE",codigo:"jt13"},{nombre:"SANTIAGO VIOLO",codigo:"jt14"},{nombre:"AXEL URRUTIA",codigo:"jt15"},{nombre:"PILAR CARRIZO VAZQUEZ",codigo:"jt16"},{nombre:"ALMA COLMAN PELAYTAY",codigo:"jt17"},{nombre:"SHEILA FARIAS ",codigo:"jt18"},{nombre:"FRANCESCA FERREIRA D'ANGELO",codigo:"jt19"},{nombre:"RENATA CLARA FRATI VANEGAS",codigo:"jt20"},{nombre:"ORNELLA ALMA FRATI VANEGAS",codigo:"jt21"},{nombre:"MIA PILAR HIDALGO ZEBALLOS",codigo:"jt22"},{nombre:"DELFINA LOPEZ QUAGLIATA",codigo:"jt23"},{nombre:"UMMA ABRIL MONJES",codigo:"jt24"},{nombre:"VICTORIA MOREL",codigo:"jt25"},{nombre:"EMMA SACHRITZ",codigo:"jt26"},{nombre:"KYARA SILVA",codigo:"jt27"},{nombre:"EMILCE NAHIARA YERBA ALCARAZ",codigo:"jt28"},{nombre:"ANALIA LLANO ",codigo:"jt29"},{nombre:"DIEGO BESTEIRO POLEDRI",codigo:"vm1"},{nombre:"ISAAC RAMIRO BRITEZ",codigo:"vm2"},{nombre:"BENJAMIN TOMAS DUARTE",codigo:"vm3"},{nombre:"RAMIRO GENTILE",codigo:"vm4"},{nombre:"ALAN GOMEZ COSTA",codigo:"vm5"},{nombre:"JUAN FRANCISCO LOPEZ MORENO",codigo:"vm6"},{nombre:"FELIPE LOPEZ PAREDES",codigo:"vm7"},{nombre:"DANTE MALDONADO OCHOA",codigo:"vm8"},{nombre:"CAMILO PERALTA CASTRO",codigo:"vm9"},{nombre:"TAHIEL SORIA",codigo:"vm10"},{nombre:"LUCIANO SOSA",codigo:"vm11"},{nombre:"FELICITAS AGUIRRE",codigo:"vm12"},{nombre:"ALMA BAEZ",codigo:"vm13"},{nombre:"MARTINA ALICE",codigo:"vm14"},{nombre:"AMBAR NEREA BAEZ",codigo:"vm15"},{nombre:"ISABELA BERON",codigo:"vm16"},{nombre:"JULIA DEL CASTILLO",codigo:"vm17"},{nombre:"BIANCA MANDARADONI TOBAR",codigo:"vm18"},{nombre:"JAZMIN PENELOPE PEREIRA",codigo:"vm19"},{nombre:"ALMA QUIROGA",codigo:"vm20"},{nombre:"LUANA RODRIGUEZ CISNEROS",codigo:"vm21"},{nombre:"ADELA ELIS THAYER",codigo:"vm22"},{nombre:"EMILIANA PIA TORRES",codigo:"vm23"},{nombre:"PENELOPE TRIVIÑO",codigo:"vm24"},{nombre:"EMMA TURK",codigo:"vm25"},{nombre:"ALMA YAMIL VALENZUELA",codigo:"vm26"},{nombre:"JULIA VITELLI",codigo:"vm27"},{nombre:"EMILIA VITELLI",codigo:"vm28"},{nombre:"BENJAMIN AVENTUROSO",codigo:"vt1"},{nombre:"GAEL CENTURION MURUJOS",codigo:"vt2"},{nombre:"BRUNO VALENTIN CRESCIULLO",codigo:"vt3"},{nombre:"GIANFRANCO GUGLIELMETTI",codigo:"vt4"},{nombre:"RENZO GUGLIELMETTI",codigo:"vt5"},{nombre:"LOGAN NOHA HERLEIN",codigo:"vt6"},{nombre:"BENJAMIN ILLAILI",codigo:"vt7"},{nombre:"NATANAEL LLAUDET",codigo:"vt8"},{nombre:"BRUNO LUNA ECHAZU",codigo:"vt9"},{nombre:"BRUNO MAXIMO PERALTA",codigo:"vt10"},{nombre:"JOAQUIN PEDRO PINTO",codigo:"vt11"},{nombre:"MATEO RODRIGUEZ",codigo:"vt12"},{nombre:"OLIVIA BASILE",codigo:"vt13"},{nombre:"CATALINA LOURDES BUSQUETS STRUBS",codigo:"vt14"},{nombre:"CATALINA BUSTAMANTE",codigo:"vt15"},{nombre:"FRANCESCA BUSTAMANTE",codigo:"vt16"},{nombre:"SOFIA CASALI",codigo:"vt17"},{nombre:"GINA BIANCA CAPELLETTI",codigo:"vt18"},{nombre:"VICTORIA GONZALEZ ACEVEDO",codigo:"vt19"},{nombre:"MALENA GUANTAY",codigo:"vt20"},{nombre:"SOFIA HOLMQUIST CARBONARO",codigo:"vt21"},{nombre:"LUCRECIA MARTINEZ",codigo:"vt22"},{nombre:"LUNA ATENEA RODRIGUEZ",codigo:"vt23"},{nombre:"VALENTINA TRIPODI",codigo:"vt24"},{nombre:"CAROLINA AYELEN ZALIEGA",codigo:"vt25"},{nombre:"ALMA BELEN ZARATE HEE",codigo:"vt26"},{nombre:"ALEX ALEGRE",codigo:"vt27"},{nombre:"BENICIO MAS",codigo:"vt28"}]);var p=React.createContext(),w=function(e){function t(e){var o;a(this,t),o=l(this,A(t).call(this,e));var n=new Date;return o.state={alumno:{},nombre:"",items:[{concepto:"Cuota Social",mes:f.meses[n.getMonth()],precio:f.conceptos.filter(function(e){return"Cuota Social"==e.nombre})[0].precio}]},o}return E(t,React.Component),m(t,[{key:"render",value:function(){var e=this;return React.createElement(p.Provider,{value:{state:this.state,cobrar:function(t,o){f.agregarRecibo(n({},e.state,{fecha:t,numero:o})),e.setState({alumno:{},nombre:"",items:[{concepto:"Cuota Social",precio:f.conceptos.filter(function(e){return"Cuota Social"==e.nombre})[0].precio}]})},nuevoItem:function(){return e.setState({items:e.state.items.concat({concepto:"Cuota Social",mes:"Mar",precio:f.conceptos.filter(function(e){return"Cuota Social"==e.nombre})[0].precio})})},quitarItem:function(t){e.setState({items:e.state.items.filter(function(e,o){return o!=t})})},changers:{nombre:function(t){e.setState({nombre:t})},alumno:function(t){var o=t.codigo,n=t.nombre;e.setState({alumno:{codigo:o,nombre:n},nombre:n})},concepto:function(t,o){e.setState({items:e.state.items.map(function(e,c){return t==c?n({},e,{concepto:o,precio:f.conceptos.filter(function(e){return e.nombre==o})[0].precio}):e})})},mes:function(t,o){e.setState({items:e.state.items.map(function(e,c){return t==c?n({},e,{mes:o}):e})})},"tamaño":function(t,o){e.setState({items:e.state.items.map(function(e,c){return t==c?n({},e,{"tamaño":o,precio:f.tamaños.filter(function(e){return e.medidas==o})[0].precio}):e})})}}}},this.props.children)}}]),t}(),S=function(e){function t(e){var o;return a(this,t),(o=l(this,A(t).call(this,e))).containerEl=document.createElement("div"),o.externalWindow=null,o}return E(t,React.PureComponent),m(t,[{key:"componentDidMount",value:function(){var e,t,o=this;this.externalWindow=window.open("","","width=600,height=400,left=200,top=200"),this.externalWindow.document.body.appendChild(this.containerEl),this.externalWindow.document.title="imprimir recibo",e=document,t=this.externalWindow.document,Array.from(e.styleSheets).forEach(function(o){if(o.cssRules){var n=e.createElement("style");Array.from(o.cssRules).forEach(function(t){n.appendChild(e.createTextNode(t.cssText))}),t.head.appendChild(n)}else if(o.href){var c=e.createElement("link");c.rel="stylesheet",c.href=o.href,t.head.appendChild(c)}}),this.externalWindow.addEventListener("beforeunload",function(){o.props.closeWindowPortal()})}},{key:"componentWillUnmount",value:function(){this.externalWindow.close()}},{key:"render",value:function(){return ReactDOM.createPortal(this.props.children,this.containerEl)}}]),t}(),v=function(e){var t=e.links,o=e.children;return React.createElement(g,null,React.createElement("section",{className:"avenir w-100 pa2"},React.createElement("header",{className:"bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l br3"},React.createElement("nav",{className:"f6 fw6 ttu tracked"},t.map(function(e){return React.createElement(N,{to:"/".concat(e.href),className:"link dim white dib mr3 hover-".concat(e.color),activeClassName:e.color,exact:!0,key:L()},e.text)})))),o)},C=function(e){var t=e.color,o=e.children;return React.createElement("section",{className:"avenir w-100 pa2 pt5"},React.createElement("article",{className:"fl w-100 pa2"},React.createElement("div",{className:"bg-".concat(t," white w-100 mt3 pa3 br3")},o)))},T=function(e){var t=e.color,o=e.children;return React.createElement("article",{className:"fl w-100 w-third-ns pa2"},React.createElement("div",{className:"bg-".concat(t," white w-100 mt3 pa3 br3")},o))},M=function(e){var t=e.css,o=e.nombre,n=e.onChange,c=e.value;return React.createElement("div",{className:"flex flex-column pt1 pr3"},React.createElement("label",null,o),React.createElement("input",{onChange:n,value:c,className:"".concat(t," f6 fw6 bb bw-3 bg")}))},h=function(e){var t=e.css,o=e.nombre,n=e.changers,c=e.suggestions,a=e.value;return React.createElement(p.Consumer,null,function(e){return React.createElement("div",{className:"flex flex-column w-30"},React.createElement(M,{css:t,nombre:o,value:a,onChange:function(e){return n.nombre(e.target.value)}}),React.createElement("div",{className:"flex flex-column bg-white br3 pr3 ".concat(t)},e.state.nombre&&c.filter(function(t){return-1!=t.nombre.toLowerCase().indexOf(e.state.nombre.toLowerCase())&&e.state.nombre.toLowerCase()!=t.nombre.toLowerCase()}).map(function(e){return React.createElement("button",{key:L(),onClick:function(){return n.alumno(e)},className:"br-pill b f4 white mh3 mv2 w-auto bg-gold b--gold shadow-3"},e.nombre)})))})},U=function(e){var t=e.color,o=e.nombre,n=e.value,c=e.numero,a=e.changer,r=e.opciones;return React.createElement("div",{className:"flex flex-column pt1 pr3"},React.createElement("label",null,o),React.createElement("select",{value:n,onChange:function(e){return a(c,e.target.value)},className:"".concat(t," w-100 mb3 f6 fw6 bb")},r.map(function(e){return React.createElement("option",{key:L()},e)})))},x=function(e){var t=e.numero,o=e.changers,n=e.item,c=e.quitarItem;return React.createElement("div",{className:"flex flex-row items-center pt3"},React.createElement("button",{onClick:function(){return c(t)},className:"br-pill b f4 gold w2 grow h2 mr3 bg-white b--white shadow-3"},"-"),React.createElement(U,{color:"gold",nombre:"Concepto",numero:t,value:n.concepto,changer:o.concepto,opciones:f.conceptos.map(function(e){return e.nombre})}),"Cuota Social"==n.concepto?React.createElement(U,{color:"gold",nombre:"Mes",numero:t,value:n.mes,changer:o.mes,opciones:f.meses}):"","Fotos"==n.concepto?React.createElement(g,null,React.createElement(M,{css:"gold w-50",nombre:"Acto",numero:t,changer:o.acto}),React.createElement(M,{css:"gold w-50",nombre:"Codigo",numero:t,changer:o.codigo})):"",React.createElement("div",{className:"flex flex-column pr3"},React.createElement("label",null,"Precio"),React.createElement("label",null,"$",f.conceptos.filter(function(e){return e.nombre==n.concepto})[0].precio)))},D=function(e){function t(e){var o;return a(this,t),(o=l(this,A(t).call(this,e))).state={edited:!1,edit:!1,valor:e.valor},o}return E(t,React.Component),m(t,[{key:"render",value:function(){var e=this;return this.state.edit?React.createElement("input",{onKeyPress:function(t){return"Enter"==t.key&&e.setState({edit:!1})},onBlur:function(){return e.setState({edit:!1})},onChange:function(t){return e.setState({valor:t.target.value})},value:this.state.valor}):React.createElement("div",{onClick:function(){return e.setState({edit:!0})},className:this.props.className},this.state.valor)}}]),t}(),P=function(e){return React.createElement(g,null,React.createElement("section",{className:"avenir w-100 pa2 pt5"},React.createElement(T,{color:"pink"},React.createElement(F,null)),React.createElement(T,{color:"light-blue"},React.createElement(y,null)),React.createElement(T,{color:"red"},React.createElement(J,null))),React.createElement(C,{color:"gold"},React.createElement(B,null)))},B=function(e){function t(e){var o;return a(this,t),(o=l(this,A(t).call(this,e))).state={counter:0,showWindowPortal:!1},o.toggleWindowPortal=o.toggleWindowPortal.bind(i(o)),o.closeWindowPortal=o.closeWindowPortal.bind(i(o)),o}return E(t,React.PureComponent),m(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("beforeunload",function(){e.closeWindowPortal()})}},{key:"toggleWindowPortal",value:function(){this.setState(function(e){return n({},e,{showWindowPortal:!e.showWindowPortal})})}},{key:"closeWindowPortal",value:function(){this.setState({showWindowPortal:!1})}},{key:"render",value:function(){var e=this,t=new Date,o="".concat(("0"+t.getDate()).slice(-2)," / ").concat(f.meses[t.getMonth()]," / ").concat(t.getYear()-100," "),n="nro 0000 - ".concat(("000"+f.recibos.length).slice(-4));return React.createElement(w,null,React.createElement(p.Consumer,null,function(t){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw9"},"Recibo"),React.createElement(D,{valor:o,className:"ttu f6 fw9"}),React.createElement(D,{valor:n,className:"ttu f6 fw9"})),React.createElement("div",{className:"flex flex-column pt3"},React.createElement("div",{className:"flex flex-row items-end"},React.createElement(h,{css:"gold",nombre:"Nombre",value:t.state.nombre,changers:t.changers,suggestions:f.alumnos}),t.state.alumno.nombre&&React.createElement("label",{className:"fw9 f4"},"".concat(t.state.alumno.nombre," - Sala ").concat(f.salas.filter(function(e){return t.state.alumno.codigo[0]==e.codigo})[0].color," - Turno ").concat("m"==t.state.alumno.codigo[1]?"Mañana":"Tarde"))),t.state.items.map(function(e,o){return React.createElement(x,{item:e,numero:o,quitarItem:t.quitarItem,changers:t.changers,key:L()})}),React.createElement("button",{onClick:t.nuevoItem,className:"br-pill grow self-center b w4 f4 gold bg-white b--white shadow-3"},"+")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end"},"$ ",t.state.items.reduce(function(e,t){return e+t.precio},0)),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-end"},React.createElement("button",{onClick:function(){t.cobrar(o,n),e.toggleWindowPortal()},className:"br-pill grow b f4 gold w4 bg-white b--white shadow-3"},"Cobrar"),e.state.showWindowPortal&&React.createElement(S,{closeWindowPortal:e.closeWindowPortal},JSON.stringify(t.state),React.createElement("button",{className:"br-pill b f4 gold w2 grow h2 mr3 bg-white b--white shadow-3",onClick:function(){console.log("hey"),alert("hey")}},"IMPRIMIR"),React.createElement("button",{onClick:L},"Close me!"))))}))}}]),t}(),j=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Recibo"),React.createElement("div",{className:"ttu f6 fw2"},"26 / 01 / 2019"),React.createElement("div",{className:"ttu f6 fw2"},"nro 0000 - 0000")),React.createElement("div",{className:"flex flex-column pt3"},React.createElement("label",null,"Nombre"),React.createElement("input",{className:"green w-30 ttu mb3 f6 fw6 bb bw-3 bg w-50"}),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Cuota Social"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Mes"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Marzo")))),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Pedido de Fotos"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Codigo"),React.createElement("input",{value:"123456",className:"green w-100 ttu mb3 f6 fw6 bb bw-3 bg"})),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Tamaño"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"15 x 20")))),React.createElement("button",{className:"br-pill green w-10 bg-white b--white"},"+")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end"},"$ 50"),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-end"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Cobrar")))},G=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Recibo"),React.createElement("div",{className:"ttu f6 fw2"},"26 / 01 / 2019"),React.createElement("div",{className:"ttu f6 fw2"},"nro 0000 - 0000")),React.createElement("div",{className:"flex flex-column pt3"},React.createElement("label",null,"Nombre"),React.createElement("input",{value:"Bianca Mandaradoni",className:"green w-30 ttu mb3 f6 fw6 bb bw-3 bg"}),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Cuota Social"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Mes"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Marzo")))),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Pedido de Fotos"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Codigo"),React.createElement("input",{value:"123456",className:"green w-100 ttu mb3 f6 fw6 bb bw-3 bg"})),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Tamaño"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"15 x 20")))),React.createElement("button",{className:"br-pill green w-10 bg-white b--white"},"+")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end"},"$ 50"),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-end"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Cobrar")))},Z=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Resdfsdfcibo"),React.createElement("div",{className:"ttu f6 fw2"},"26 / 01 / 2019"),React.createElement("div",{className:"ttu f6 fw2"},"nro 0000 - 0000")),React.createElement("div",{className:"flex flex-column pt3"},React.createElement("label",null,"Nombre"),React.createElement("input",{value:"Bianca Mandaradoni",className:"green w-30 ttu mb3 f6 fw6 bb bw-3 bg"}),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Cuota Social"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Mes"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Marzo")))),React.createElement("div",{className:"flex flex-row pt3"},React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Concepto"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"Pedido de Fotos"))),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Codigo"),React.createElement("input",{value:"123456",className:"green w-100 ttu mb3 f6 fw6 bb bw-3 bg"})),React.createElement("div",{className:"flex flex-column pt3 pr4"},React.createElement("label",null,"Tamaño"),React.createElement("select",{className:"green w-100 ttu mb3 f6 fw6 bb"},React.createElement("option",null,"15 x 20")))),React.createElement("button",{className:"br-pill green w-10 bg-white b--white"},"+")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center justify-end"},"$ 50"),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-end"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Cobrar")))},y=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Pedidos")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center"},"49"),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-between"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Ver Lista"),React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Editar")))},F=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Alumnos")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center"},f.alumnos.length),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-between"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Reporte"),React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Agregar")))},J=function(e){return React.createElement(g,null,React.createElement("div",{className:"w-100 pb1 bb b--white-50  inline-flex items-center justify-between"},React.createElement("div",{className:"ttu f6 fw2"},"Usuarios")),React.createElement("div",{className:"pt3 f2 f2-m fw5 w-100 inline-flex items-center"},"13"),React.createElement("div",{className:"pt2 w-100 inline-flex items-center justify-between"},React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Reporte"),React.createElement("a",{className:"link dim white ttu f6 fw6",href:"#",title:"Contact"},"Agregar")))};I(React.createElement(function(){return React.createElement(R,null,React.createElement("div",null,React.createElement(v,{links:[{text:"Home",href:"",color:"pink"},{text:"Nuevo recibo",href:"nuevoRecibo",color:"gold"},{text:"Reportes",href:"reportes",color:"light-blue"},{text:"Cajas",href:"cajas",color:"red"},{text:"Admin",href:"admin",color:"green"}]}),React.createElement(d,null,React.createElement(u,{exact:!0,path:"/",component:P}),React.createElement(u,{path:"/home",component:P}),React.createElement(u,{path:"/nuevoRecibo",component:function(){return React.createElement(w,null,React.createElement(C,{color:"gold"},React.createElement(B,null)))}}),React.createElement(u,{path:"/reportes",component:function(){return React.createElement(C,{color:"light-blue"},React.createElement(j,null))}}),React.createElement(u,{path:"/cajas",component:function(){return React.createElement(C,{color:"red"},React.createElement(G,null))}}),React.createElement(u,{path:"/admin",component:function(){return React.createElement(C,{color:"green"},React.createElement(Z,null))}}))))},null),document.querySelector("#app"))}]);