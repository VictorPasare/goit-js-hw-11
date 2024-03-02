import axios from 'axios';

export async function fetchImages(searching, page) {
  try {
    const response = await axios({
      method: 'get',
      url: `https://pixabay.com/api/?key=42656250-3abb0d7f6480c2433a0b6c135&q=${searching}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`,
    });
    return response.data;
  } catch (error) {
    console.log(`error: `, error);
  }
}