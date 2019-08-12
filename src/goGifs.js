// construcción del endpoint
const goGifs = (o) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${o[0].q}&limit=${o[0].limit}`;
  return fetch(url)
}

export default goGifs;