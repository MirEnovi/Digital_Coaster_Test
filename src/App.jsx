import React, { Component } from 'react';

// componentes
import CardGifs from './components/cardGifs';
import Form from './components/form';

// llamado a la api
import goGifs from './goGifs';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifsApp: [],
      query: [{
        q: 'cat',
        limit: '5'
      }],
    }
  }

  // llamado inicial con los 5 gifs de gatitos
  componentDidMount() {
    goGifs(this.state.query)
      .then((response) => response.json())
      .then((gifs) => {
        this.setState({
          gifsApp: gifs.data.map((g) => {
            const gifsApp = [g.images.fixed_width.url, g.title];
            return gifsApp
          })
        });
      });
  }

  chargeNewGifs = (objFomr) => {
    // limpia el estado para quita resultado anterior de la vista
    this.setState({
      gifsApp: []
    });
    // hace el llamado con los nuevos parametros de busqueda
    goGifs([objFomr])
      .then((response) => response.json())
      .then((gifs) => {
        this.setState({
          gifsApp: gifs.data.map((g) => {
            const gifsApp = [g.images.fixed_width.url, g.title];
            return gifsApp
          })
        });
      });
  };


  render() {
    return (
      <div>
        <header>
          <h1>gatitos.gif</h1>
        </header>
        <section>
          <p>Podemos mostrarte otros gifs</p>
          <Form chargeNewGifs={this.chargeNewGifs}/>
        </section>
        <section className='row'>
          <CardGifs gifs={this.state.gifsApp}/>
        </section>
      </div>
    )
  }
} 

export default App;
