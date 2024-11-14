const express = require("express");
const { getCache, setCache } = require("../../cache/redis");
const { fetchMovies } = require("./helper");
const router = express.Router();

/**
 * @param category -movie category
 * @param searchKey - search keyword
 * @returns list of movies
 */
router.post("/", async (req, res) => {
  try {
    const { searchKey, year } = req.body
    let moviesList;
    if (await getCache(searchKey)) {
      moviesList = await getCache(searchKey)
    }
    else {
      moviesList = await fetchMovies(searchKey, year)
      await setCache(searchKey, moviesList)
    }
    res.status(200).json({ data: moviesList.data })
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router;