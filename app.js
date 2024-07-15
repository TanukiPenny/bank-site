import express from 'express';
import createIndexTemplate from "./views/index.js";

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', async (req, res) => {
  res.send(await createIndexTemplate());
});

// listen to port
app.listen(8081, () => {
  console.log('App listening on port 8081');
});