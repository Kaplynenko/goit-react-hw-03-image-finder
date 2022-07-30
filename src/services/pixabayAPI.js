export default async function fetchPictures(name, pageNumber) {
    const axios = require('axios');
  
    const API_KEY = '27844139-566097421da6ad8653733e5a0';
  
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`;
  
    const pictures = await axios.get(URL);
  
    const newPictures = pictures.data.hits.map(el => {
      return {
        id: el.id,
        largeImageURL: el.largeImageURL,
        tags: el.tags,
        webformatURL: el.webformatURL,
      };
    });
  
    return newPictures;
  }