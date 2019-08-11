import React, { Component } from 'react';
import './style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.q = React.createRef();
    this.limit = React.createRef();
  };



  fn = (e) => {
    e.preventDefault();
    this.props.chargeState({
      q: this.q.current.value,
      limit: this.limit.current.value,
    });
	}

  render() {
    const {q, limit} = this;
    return (
      <form className='form container'>
        <input className='form-input' type='text' placeholder='Que buscamos' ref = {q}/>
        <input className='form-input' type='number' placeholder='cuantos quieres ver?' ref = {limit}/>
        <button className='waves-effect waves-ligh btn pink darken-4' onClick={this.fn}> Buscar</button>
      </form>
    );
  }
}

export default Form;
