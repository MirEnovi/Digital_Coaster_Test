import React, { Component } from 'react';
import CardGifs from './components/cardGifs';
import goGifs from './goGifs';
import Form from './components/form';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifsApp: [],
      query: [{
        q: 'cat',
        limit: '10'
      }],
    }
  }

  componentDidMount() {
    console.log('se ejecuta did mount');
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('se ejecuta did update');
  }

  chargeState = (objFomr) => {
    this.setState({
      query:[objFomr]
    });
  };


  render() {
    return (
      <div>
        <header>
          <h1 className=''>gatitos.gif</h1>
        </header>
        <section>
          <p>Podemos mostrarte otros gifs</p>
          <Form chargeState={this.chargeState}/>
        </section>
        <div className='row'>
          <CardGifs gifs={this.state.gifsApp}/>
        </div>
      </div>
    )
  }
} 

export default App;
