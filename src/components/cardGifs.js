import React from 'react';
import './cardGifs.css'

const CardGifs = (props) => {
  const card = props.gifs.map((gif, index) =>{
    return(
      <figure className='col s12 m4 l3 offset-m1' key={`gif-${index}`}>
        <img className='img-gif' src={gif} alt='gif' />
      </figure>
    )
  })
  return(
    <div>
      {card}
    </div>
  );
};
export default CardGifs;