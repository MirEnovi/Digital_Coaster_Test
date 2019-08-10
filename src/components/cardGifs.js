import React from 'react';

const CardGifs = (props) => {
  console.log(props)
  const card = props.gifs.map((gif, index) =>{
    return(
      <figure key={`gif-${index}`}>
        <img src={gif} alt='gif' />
      </figure>
    )
  })
  return(
    <div>
      aqui hay gatitos
      {card}
    </div>
  );
};
export default CardGifs;