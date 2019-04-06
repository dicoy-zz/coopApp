

const Datos = {
  agregar: (nombre, valor) => {
    datos[nombre] = valor;
    localStorage.setItem(nombre, JSON.stringify(valor));
  },
  agregarRecibo:({alumno, fecha, numero, items}) => {
    datos.agregar('recibos', datos.recibos.concat({codigo:alumno.codigo, fecha, numero, items}))
  },
  nuevaTabla: (nombre) => {
    datos.agregar(nombre, valor);
  },
  alumnos: JSON.parse(localStorage.getItem("alumnos")),
  conceptos: JSON.parse(localStorage.getItem("conceptos")),
  meses: JSON.parse(localStorage.getItem("meses")),
  recibos: [],
  salas: JSON.parse(localStorage.getItem("salas")),
  apiKey: (location.hash.slice(2).length == 64 && location.hash.slice(2)) || localStorage.getItem("apiKey")
};

export default Datos;