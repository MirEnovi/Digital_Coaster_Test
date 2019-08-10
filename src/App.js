import React, { Component } from 'react';
import './App.css';
import CardGifs from './components/cardGifs';
import goGifs from './goGifs';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifsApp: []
    }
  }


  chargeGif = () => {
    goGifs()
      .then((response) => response.json())
      .then((gifs) => {
        this.setState({
          gifsApp: gifs.data.map((g) => {
            return g.images.fixed_width.url
          })
        });
      });
  };

  render() {
    if (this.state.gifsApp.length > 0) {
      return (
        <div className="App">
          <header>
            <h1>SIGO FUNCIONANDO</h1>
          </header>
          <section>
            <p>
              por si andabas con el pendiente y voy a poner gatitos
            </p>
            <CardGifs gifs={this.state.gifsApp}/>
          </section>
        </div>
      )
    } else {
      return (
        <div className="App">
          <header>
            <h1>SIGO FUNCIONANDO</h1>
          </header>
          <section>
            <button onClick={this.chargeGif}>Cargar gatos</button>
            <p>
              y no hay gatitos
            </p>
          </section>
        </div>
      )
    }
  }
} 

export default App;
