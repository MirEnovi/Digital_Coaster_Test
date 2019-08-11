import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import './style.css';
import './alert.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.q = React.createRef();
    this.limit = React.createRef();
  };

  fn = (e) => {
    e.preventDefault();
    if (this.limit.current.value.length > 0 && this.q.current.value.length > 0) {
      this.props.chargeState({
        q: this.q.current.value,
        limit: this.limit.current.value,
      });
    } else {
      confirmAlert({
        title: 'Estoy confundido',
        message: 'No sé qué debo buscar, podrías poner todos los datos :).',
      })
    }
	}

  render() {
    const {q, limit} = this;
    return (
      <div>
        <form className='form container'>
          <input className='form-input' type='text' placeholder='Escribe un tema que quieras ver en gif' ref = {q}/>
          <input className='form-input' type='number' placeholder='¿Cuántos gifs quieres ver?' ref = {limit}/>
          <button className='waves-effect waves-ligh btn pink darken-4' onClick={this.fn}> Buscar</button>
        </form>
      </div>
    );
  }
}

export default Form;
