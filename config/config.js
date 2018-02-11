var config = {};

config.port = process.env.PORT || '3000';
config.host = process.env.HOST || 'http://localhost';
config.marvel = process.env.MARVEL || 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e2b6f2868658881188dfb90b58ddcd5c&hash=7bb1e0142df629f7cdbf339c13eea65a&limit=18';

//process.env.NODE_ENV = 'development';

module.exports = config;
