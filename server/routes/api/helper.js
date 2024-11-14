const axios = require('axios');

const BASE_URL = "https://www.omdbapi.com/?apiKey=8698fdd4"

const fetchMovies = async (searchKey, year) => {
  try {
    const response = await axios.get(BASE_URL + "&t=" + searchKey + "&y=" + year)
    return { data: response.data }
  } catch (error) {
    console.log("error fetching movies", error)
    return { data: [] }
  }
}
module.exports = { fetchMovies }