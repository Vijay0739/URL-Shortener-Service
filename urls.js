const urlDatabase = {};

function addUrl(shortUrl, longUrl) {
  urlDatabase[shortUrl] = longUrl;
}

function getAll() {
  return urlDatabase;
}

function getLongUrl(shortUrl) {
  return urlDatabase[shortUrl];
}

module.exports = {
  addUrl,
  getAll,
  getLongUrl,
};
