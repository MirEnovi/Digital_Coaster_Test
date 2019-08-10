
const goGifs = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=cat&limit=5`;
  return fetch(url)
}

export default goGifs;