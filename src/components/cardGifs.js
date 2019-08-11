import React from 'react';
import './style.css';

const CardGifs = (props) => {
  const card = props.gifs.map((gif, index) =>{
    return(
      <figure className='col s12 m4 l3 offset-m1 container' key={`gif-${index}`}>
        <img className='img-gif' src={gif} alt='gif' />
          <div className="overlay">
            <p className="text">{(gif[1]) ? gif[1] : 'un gif más' }</p>
          </div>
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