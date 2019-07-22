const express = require('express');
const app = express();
const imageDataURI = require('image-data-uri')
let PORT = process.env.PORT || 5000;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => {
  let imageUrl = req.query.image;
  if(imageUrl) {
    imageDataURI.encodeFromURL(imageUrl)
    .then(imageData => {
      res.json(imageData)
    })
    .catch((err) => console.log(err))
    
  } else {
    res.send('Please add an image param to the URL. Example: url.com/?image=YOUR-UR-HERE.PNG')
  }
})



app.listen(PORT, () => console.log(`listening on port ${PORT}`))