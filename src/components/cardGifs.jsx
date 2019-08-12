import React from 'react';
import './style.css';

// función que devuelve los gifs encontrados
const CardGifs = (props) => {
  const card = props.gifs.map((gif, index) =>{
    return(
      <figure className='col s12 m4 l3 offset-m1 container' key={`gif-${index}`}>
        <img className='img-gif' src={gif} alt='gif' />
          <div className='overlay'>
            {/* pinta el nombre del gif o un gif mas si no tiene nombre */}
            <p className='text-name'>{(gif[1]) ? gif[1] : 'un gif más' }</p>
          </div>
      </figure>
    )
  });
  return(
    <div>
      {card}
    </div>
  );
};
export default CardGifs;