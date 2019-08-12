import React, { Component } from 'react';
// importando libreria para la alerta
import { confirmAlert } from 'react-confirm-alert'; 
import './style.css';
import './alert.css';

// objeto que trae la configuración para la alerta
const options = {
  title: 'Estoy confundido',
  message: 'No sé qué debo buscar, prueba llenar todos los campos :)',
  buttons: [{
    label: 'Oki',
    // onClick: () => console.log('boton funciona')
  }]
};


class Form extends Component {
  constructor(props) {
    super(props);
    // crea una referencia que puede ser adjunto a los elementos React por medio del atributo ref
    this.q = React.createRef();
    this.limit = React.createRef();
  };

  // metodo que toma los datos del form y los manda al metodo de busqueda ó manda una alerta de error.
  search = (e) => {
    e.preventDefault();
    if (this.limit.current.value.length > 0 && this.q.current.value.length > 0) {
      this.props.chargeNewGifs({
        q: this.q.current.value,
        limit: this.limit.current.value
      });
    } else {
      confirmAlert(options);
    }
	}

  render() {
    const {q, limit} = this;
    return (
      <div>
        <form className='form container'>
          <input type='text' placeholder='Escribe un tema que quieras ver en gif' ref = {q}/>
          <input type='number' placeholder='¿Cuántos gifs quieres ver?' ref = {limit}/>
          <button className='boton btn' onClick={this.search}>Buscar</button>
        </form>
      </div>
    );
  }
}

export default Form;
