import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado:true
    }
}

componentWillMount() {
  fetch('http://127.0.0.1:8000/productos/')
    .then((response) => {
      return response.json()
    })
    .then((prod) => {
      this.setState({ productos: prod,recuperado:true})
    })
} 

render() {
    if (this.state.recuperado){
      return this.mostrarTabla()
    }else{
      return (<div>recuperando datos...</div>)
  }
}

mostrarTabla() {
  return (
    <div>
      <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Descripción</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {this.state.productos.map(prod => {
          return (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.descripcion}</td>
              <td>{prod.precio}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
}
  borrar(ide) {
    var temp = this.state.articulos.filter((el)=>el.id !== ide);
    this.setState({
      articulos: temp
    })
  }
}
export default App;
