const express = require("express");
const app = express();



//Init middleware
app.use(express.json())



app.use('/api/movies', require('./routes/api/movies'));

//Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});