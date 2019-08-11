import React, { Component } from 'react';
import './style.css';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);

class Form extends Component {
  constructor(props) {
    super(props);
    this.q = React.createRef();
    this.limit = React.createRef();
    this.state = {
      show: false
    }
  };

  fn = (e) => {
    e.preventDefault();
    if (this.limit.current.value && this.q.current.value) {
      this.props.chargeState({
        q: this.q.current.value,
        limit: this.limit.current.value,
      });
    } else {
      this.setState({ show: true })
    }
	}

  render() {
    const {q, limit} = this;
    return (
      <div>
        <SweetAlert
          show={this.state.show}
          title='Alerta'
          text='No sé qué debo buscar. Podrías poner todos los datos :)'
          onConfirm={() => this.setState({ show: false })}
        />
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
