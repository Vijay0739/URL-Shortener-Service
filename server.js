const express = require('express');
const shortid = require('shortid');
const urls = require('./urls');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index', { urls: urls.getAll() });
});

app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortUrl = shortid.generate();
  urls.addUrl(shortUrl, longUrl);
  res.redirect('/');
});

app.get('/:shortUrl', (req, res) => {
  const longUrl = urls.getLongUrl(req.params.shortUrl);
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('URL not found');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
