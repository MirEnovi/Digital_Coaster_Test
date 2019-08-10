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
    goGifs(0)
      .then((response) => response.json())
      .then((gifs) => {
        this.setState({
          gifsApp: gifs.data.map((g) => {
            return g.images.fixed_width.url
          })
        });
      });
  };

  chargeMoreGif = () => {
    goGifs(5)
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
        <div className='App'>
          <header>
            <h1 className=''>gatitos.gif</h1>
          </header>
          <section className='container'>
            <button className='waves-effect waves-ligh btn pink darken-4' onClick={this.chargeMoreGif}>Cargar más gatos</button>
            <div className='row center-align'>
              <CardGifs gifs={this.state.gifsApp}/>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div className='App'>
          <header>
            <h1>gatitos.gif</h1>
          </header>
          < section className = 'container'>
            <button className='waves-effect waves-ligh btn pink darken-4' onClick={this.chargeGif}>Cargar gatos</button>
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
